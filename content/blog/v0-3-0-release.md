---
title: "v0.3.0 Release: Rendered Edit Session, Export, Code Execution & Platform Refresh"
description: "Ferrite v0.3.0 ships a consolidated WYSIWYG rendered edit session, PDF & HTML export, executable code blocks, Mermaid first wave, Phosphor icons, split-view scroll sync, and a platform upgrade to eframe/egui 0.34.2 with Rust 1.92 MSRV."
date: 2026-05-22
category: release
readingTime: "14 min read"
tags: ["release", "wysiwyg", "export", "code-execution", "mermaid", "egui", "phosphor"]
---

# Ferrite v0.3.0: Rendered Edit Session, Export, Code Execution & Platform Refresh

Ferrite v0.3.0 is the biggest release since v0.2.6 introduced the custom editor engine. It ships a consolidated WYSIWYG architecture that replaces years of accumulated per-widget hacks, a complete export story (PDF + HTML + Print preview), executable code blocks, the Mermaid first wave with insert tooling and inline validation, a full icon refresh with Phosphor, and a platform upgrade to eframe/egui 0.34.2 running on Rust 1.92.

> **Summary:** Rendered edit session (one-click WYSIWYG block switching, RS-1…RS-7). PDF export (krilla), themed HTML export, print preview. Executable fenced code blocks (shell/Python, inline ANSI output). Mermaid: insert toolbar, inline validation, flowchart shapes & style, state fork/join/history, major edge routing improvements. eframe/egui 0.34.2 + Rust 1.92 MSRV. Phosphor icon set (egui-phosphor 0.12.0). Split-view scroll sync with source-line anchors. Quick note workflow. Workspace file index (Ctrl+P / Ctrl+Shift+F). User-configurable accent color. Spanish locale. Two critical fixes (smart-paste crash, recovery data loss cycle). 30+ additional bug fixes.

---

## Rendered Edit Session (Tasks 94–105)

The headline feature of v0.3.0 is a consolidated WYSIWYG editing architecture that fixes the fundamental UX problem with rendered view: **you used to need two clicks to edit a different block**.

### The Problem

Previous versions had scattered per-widget focus and defer logic. Each block type (heading, paragraph, list item, formatted block, table cell) managed its own commit and focus state independently. When you clicked away from an active `TextEdit`, egui would defocus it — but the target block's `TextEdit` wouldn't gain focus until the *next* click, because the first click was consumed by egui's focus handshake. The result: a perpetual double-click requirement that made rendered-mode editing feel like a second-class citizen.

The root cause went deeper: widget IDs were scoped on `content_hash`, which changed whenever the source text changed during a focus transition. This remapped every `TextEdit` id mid-session, destroying caret state — which is why the cursor would flash or disappear while typing in rendered headings.

### The Solution: `RenderedEditSession`

v0.3.0 introduces `RenderedEditSession` — a tab-scoped state machine in `src/markdown/rendered_session.rs`. Its job is simple: one block is active at a time. When you click a new block, `switch_to_ui` closes the previous block (`SaveIfDirty`) and queues `PendingActivation` to open the target with correct cursor placement on the next frame.

Key design decisions:

- **`source_epoch` widget identity** — Per-tab counter that bumps on external invalidation (raw edits, file reload, undo/redo, find/replace) but *not* on rendered block commits. `TextEdit` ids are scoped by `editor_id + source_epoch` instead of `content_hash`. This keeps ids stable while typing and only remaps on genuine external changes.
- **`content_hash` retained for culling** — The existing viewport culling system still uses `content_hash` to decide when to remeasure block heights. The two concerns (identity and culling) are now correctly separated.
- **Block-commit undo** — Keystrokes inside an active rendered block stay off the undo stack until close/switch. Each block commit produces one logical Ctrl+Z step via `src/markdown/rendered_commit_undo.rs`. For comparison: v0.2.x would either flood the undo stack with every keystroke or, with time-based merging, collapse entire fast-typing bursts into one step.

### What's Supported

The session model covers:
- **Headings** (wired first, legacy `rendered_focus.rs` paths removed)
- **Paragraphs & plain list items** — share session buffers and the unified commit path
- **Formatted blocks** — styled display ↔ raw TextEdit; click enters edit with galley-based cursor mapping; Escape discards
- **Table cells** — `BlockRef::TableCell` participates in block switching; `signal_table_force_commit` commits the full table on cross-block exit; Tab/Shift+Tab within a table preserves deferred commit
- **Split-view parity** — rendered pane in split shares the same session and `source_epoch` as rendered-only mode; raw-pane edits bump epoch and invalidate session buffers

Acceptance tests RS-1…RS-7 and TBLE-1…TBLE-3 are documented in the v0.3.0 regression matrix.

---

## Export: PDF, HTML & Print Preview

v0.3.0 completes the export story started in v0.2.8's roadmap.

### Native PDF Export (Tasks 60–61)

**File → Export → PDF…** opens an export dialog with:
- Page size (A4, Letter, A3, Legal)
- Margins (normal, narrow, wide, custom)
- Optional page break before H1
- Link annotations preserved from markdown links

The export pipeline is built on **krilla** + **krilla-svg** — a pure Rust PDF generation library. No external dependencies, no LaTeX, no Chrome headless. The same font stack that renders in the editor renders in the exported PDF, including syntect-highlighted code blocks and Mermaid diagrams as embedded SVGs.

### Print Preview (Task 62)

Print preview reuses the same PDF render path. It writes a temporary PDF and opens it in the in-app `PdfViewer` tab — the same viewer introduced in v0.2.8. No new dependencies; you get a paginated preview before committing to a file.

### Themed HTML Export (Task 63)

HTML export in v0.2.x produced minimal unstyled output. v0.3.0 generates **themed, self-contained HTML** with:
- Theme-aware CSS (dark/light, matching your editor theme)
- Mermaid diagrams exported as **inline SVG** (no JavaScript required)
- Syntax-highlighted code blocks via **syntect**
- Export options dialog for theme and styling choices

The HTML file is fully self-contained — open it in any browser offline.

---

## Executable Code Blocks (Tasks 64–68)

Fenced code blocks for `shell` and `python` can now be run directly in the editor.

### How It Works

A **Run** control appears in rendered and split-preview mode for supported language blocks. Clicking it:
1. Spawns a background worker with the configured shell (PowerShell/bash) or Python interpreter
2. Streams ANSI-colored output inline below the code block
3. Shows exit status and elapsed time on completion
4. Optionally inserts the output as a new fenced block below

**Stop** cancels the process immediately. A configurable timeout (default 30 s, max 300 s) kills long-running commands automatically. The timeout vs. cancel distinction is labeled clearly in the UI.

### Settings & Safety

Code execution settings live in **Editor → Code execution**:
- **Master enable/disable** — off by default, explicit opt-in
- **Shell toggle** and **Python toggle** separately
- **Timeout** slider

A **first-run consent modal** appears before the first execution. The queue is held until the user accepts. This can be bypassed via Settings for power users who want no friction.

---

## Mermaid First Wave

### Insert Toolbar (Tasks 69–70)

**Insert → Mermaid…** opens a toolbar with template snippets for every supported diagram type: flowchart, sequence, state, class, ER, mindmap, gantt, git graph, and more. The About/Help syntax section is aligned with the insert toolbar so snippets match the documentation.

### Inline Validation (Task 71)

Mermaid parse errors now surface immediately:
- A **warning header** appears in the preview above the error
- The **last good diagram** is shown as a fallback (no blank space)
- **Squiggles** appear in the raw editor at the error location

This replaces the previous behavior where a parse error silently produced a blank diagram with no indication of what went wrong.

### Flowchart Shapes & Style (Task 72)

The flowchart renderer gains support for additional node shapes (stadium, subroutine, cylindrical, asymmetric, hexagon, and more) and the `style` / `classDef` directives for custom node colors and borders.

### State Diagrams: Fork/Join & History (Task 73)

State diagrams now render `<<fork>>` / `<<join>>` bars as proper horizontal bars and `[H]` / `[H*]` as history pseudostate glyphs — matching the Mermaid Live reference implementation.

### Flowchart Edge Routing & Layout Polish (FC-83a)

The native flowchart renderer received extensive layout improvements that close the bulk of the FC-83a regression versus Mermaid Live:

- **Edge–node obstacle avoidance** — Forward edges that would pass through unrelated nodes now route around them via multi-strategy orthogonal routing
- **TD/BT layer centering** — Layers now center on `max_cross_size` instead of `available_width`, eliminating the large empty left strip on diagrams with feedback loops
- **Stable back-edge side channels** — Back-edges use orthogonal routes at `BACK_EDGE_LOOP_MARGIN = 24 px` instead of fixed cubic-bezier loops; loop side is picked from source position
- **Parallel back-edge lanes** — Multiple loops targeting the same node on the same side get distinct `BackEdgeLane` slots (`BACK_EDGE_LANE_SPACING = 36 px`) so they stay visually separate
- **Inner back-edge direct path** — Lane-0 back-edges exit the source at the top-outer corner and enter the target at its side-centre, instead of going horizontal-first across the trunk
- **Branch parent snap** — Decision nodes with 2+ forward children snap to the barycenter of those children (matches dagre/Mermaid.js behavior)
- **Same-layer sibling spacing** — New `resolve_layer_overlaps` pass enforces minimum spacing between adjacent siblings, fixing the coffee-machine repro where nodes previously overlapped by ~68–79 px

---

## Platform: eframe/egui 0.34.2 & Rust 1.92

### The Upgrade Path

Ferrite's egui version history: 0.28 → 0.31 (Task 57, landed in v0.3.0) → 0.34 (Task 89). The 0.31 upgrade targeted Wayland keyboard issues and winit compatibility ([#106](https://github.com/OlaProeis/Ferrite/issues/106), [#111](https://github.com/OlaProeis/Ferrite/issues/111)). The 0.34 upgrade brings a new text backend, API cleanups, and the Phosphor 0.12 icon font.

### egui 0.34 Changes

Key migrations applied across the codebase:
- `screen_rect` → `viewport_rect` / `content_rect`
- **Popup API** for menus and dropdowns
- **Tooltip API** (replacing manual positioning)
- `Ui::close_menu` → `close`, `child_ui` → `new_child`
- `ComboBox::from_id_salt`, `Button::selectable`
- `Frame::corner_radius`
- ScrollArea edge-fade disabled globally for visual parity

### skrifa + vello_cpu Text Backend

The new default text backend replaces egui's previous rasterizer with **skrifa** (font parsing) + **vello_cpu** (glyph rasterization). This improves subpixel rendering and sets up future GPU-accelerated rendering paths. Windows continues to use the **glow** renderer.

### HarfRust Under egui 0.34

Complex-script cursor and selection now work via cluster shaping: `shape_line_clusters` and `validate_cluster_byte_ranges` ensure cursor movement respects grapheme cluster boundaries in Arabic, Devanagari, Bengali, and other scripts. 32 shaping unit tests cover edge cases. Word wrap with complex scripts still uses egui galley only — this is a documented limitation.

### MSRV: Rust 1.92

The `rust-toolchain.toml` and `package.rust-version` are pinned to 1.92. If you build from source, run `rustup toolchain install 1.92.0` or rely on the toolchain file for automatic installation.

### Build Warning Cleanup (Tasks 90–93)

The egui 0.34 upgrade generated ~268 new compiler warnings. Four cleanup passes brought this to zero:
1. **Task 90** — `cargo fix` + manual unused-import cleanup (~55 warnings)
2. **Task 91** — Unused variables, `mut`, parameters in central panel, Vim view, markdown widgets (~9)
3. **Task 92** — egui 0.34 deprecated API migrations (~152)
4. **Task 93** — `dead_code` audit: surgical removals, wiring fixes, `#[allow(dead_code)]` for intentional public API (~49)

---

## Phosphor Icons

All UI chrome now uses **egui-phosphor 0.12.0** — the Phosphor regular weight icon set registered as a font at startup. This replaces a mix of emoji, Unicode symbols, and ad-hoc character glyphs that rendered inconsistently across platforms.

**Covered by the migration:**
- Ribbon, format toolbar, outline & productivity panels, terminal
- Settings, About, command palette, quick switcher, file tree
- Status bar, dialogs, title bar, tab close, theme toggle, recovery UI
- Markdown preview (table alignment, list remove, code Run/Stop/status, Mermaid type icons & warnings)
- JSON/YAML/TOML tree viewer, CSV row-count banner, Gantt done checkmarks, ER diagram PK/FK markers
- Editor gutter fold carets

**Intentionally unchanged:** Git file-status badges, markdown callout body icons (Note/Tip/Warning content), and R/S/V view-mode segment letters.

The locale files for `en`, `de`, `es`, `ja`, and `zh_Hans` were cleaned of duplicate emoji strings where icons are now drawn separately.

---

## Split-View Scroll Sync

Raw editor and rendered preview in Split mode can now stay aligned while scrolling.

### How the Sync Works

The sync uses **source line + fraction** anchors, not scroll percentage. This matters because code blocks and Mermaid diagrams can be very different heights in the raw editor vs. the rendered preview — scroll percentage would drift badly on code-heavy documents.

The algorithm:
1. Identify the top-visible line in the source pane
2. Compute fractional position within that line/block
3. Map to the corresponding rendered block via the line map
4. Scroll the preview to that position

After ~120 ms of idle, one snap updates the other pane. **Top/bottom** detection (within 5 px) snaps directly to document edges to avoid floating near the end.

### Controls

Two controls on the semantic minimap footer:
- **Sync** (master toggle, persists to settings, default off)
- **2-way** (default on when Sync is enabled: preview scroll also moves raw; off = raw → preview only)

### Mode-Toggle Sync (Ctrl+E)

With sync enabled, switching Raw ↔ Rendered preserves scroll position via the same hybrid strategy. Split mode continues using real-time sync instead of toggle-time conversion.

---

## Quick Note Workflow

Enabled by default in **Settings → Files**. The goal: pathless "scratch" tabs should never block your exit.

**Behavior with Quick note workflow on:**
- Closing a **modified** untitled tab still prompts (Save / Don't save / Cancel)
- Closing an **empty** untitled tab silently discards it
- **Quitting the app** does not prompt for pathless tabs — exit is frictionless
- **Session recovery** preserves unsaved text across restarts when "Restore previous session on startup" is enabled
- **Double-click** an untitled tab's header to set a display name

Turn it off in Settings to restore classic save prompts for all pathless tabs.

---

## Workspace File Index

The Quick File Switcher (Ctrl+P) and Search in Files (Ctrl+Shift+F) now search the **entire workspace** on a background thread, not only folders you've expanded in the sidebar.

### Behavior

- An animated progress bar ("Indexing… N files found") shows on large trees
- The index rebuilds automatically when files are created, deleted, or renamed
- Same exclusion rules as the file tree (`node_modules`, `.git`, etc.)
- Path tokenization on `-`, `_`, `.`, and separators — so `tables` matches `test_tables.md` and `box` matches `test_box_drawing.md`
- Recent files are included in results regardless of index state, so unexpanded folders still surface files you've opened recently

---

## Other Additions

**User-configurable accent color** — Color picker in Settings → Appearance and the Welcome view. Drives headings, selection highlight, tabs, view mode segment, productivity hub chrome, and the status bar. Markdown links keep the standard link color.

**Spanish locale** — Español added to the language selector. System locale `es` / `es-*` detection wires through `Language::Spanish`.

**Productivity Hub polish** — Card layout, Pomodoro emphasis, floating × re-docks to sidebar instead of hiding the hub, stable docked widths via clipped child UI, detached window respects user resize without content-driven growth.

**Main ribbon always icon-only** — The collapse/expand control and section labels ("File", "Edit", "Tools") have been removed. The toolbar is a fixed 28 px compact icon bar. Tooltips and keyboard shortcuts are unchanged.

---

## Critical Fixes

### Smart-Paste Crash on Mixed-Script Text

**Severity: CRITICAL.** Pasting any text whose first colon is followed by a multi-byte UTF-8 codepoint — Hebrew (`Hebrew: שלום עולם`), Bengali, Hindi, emoji (`emoji: 👨‍👩‍👧`) — caused `STATUS_STACK_BUFFER_OVERRUN` / `0xc0000409` in release builds (`panic = "abort"`).

Root cause: `FerriteApp::is_url` in `src/app/input_handling.rs` was doing `&s[colon_pos..colon_pos + 3]` to look for `://`. When `colon_pos + 3` landed inside a multi-byte UTF-8 codepoint (2-/3-/4-byte), this panicked on a non-char-boundary. The smart-paste pipeline calls `is_url` for *every* paste event.

Fix: `s.get(colon_pos..colon_pos + 3) == Some("://")`, which returns `None` on invalid byte ranges instead of panicking. Five regression tests pin this.

### Recovery Snapshot Data Loss Cycle

**Severity: CRITICAL.** After clicking **Restore** in the session recovery dialog, then making edits, then crashing a second time — all edits since the first Restore were silently discarded on the next launch.

Root cause: `Tab::with_file(path, recovered_content)` set *both* `tab.content` and `tab.original_content` to the recovered buffer. This broke the tab's identity link to disk: `disk_content_hash()` hashed the recovered buffer, not the disk file. The next crash snapshot wrote that wrong hash as `original_content_hash`. On the second launch, identity gating correctly rejected the poisoned recovery (disk hash ≠ stored hash) and fell back to disk content — silently discarding everything.

Fix: `restore_from_session_result` now splits recovery into two branches. `ResolvedContent::RecoveredWithDiskDivergence` constructs the tab from `on_disk_content` and swaps in the recovered buffer via `set_content`, so `original_content` stays anchored to disk. Bonus: Ctrl+Z after Restore now walks back to disk content as one logical step.

---

## Other Bug Fixes

- **Double-click required to switch WYSIWYG blocks** — fixed by `RenderedEditSession::switch_to_ui` (RS-1, RS-4, RS-5)
- **Cursor flash/disappear while typing in rendered headings** — stable `source_epoch` ids fix `content_hash`-based id remaps (RS-2)
- **Formatted list/paragraph stuck in raw edit after clicking away** — immediate save/exit on dismiss; `formatted_editing` cleared on switch (RS-3)
- **Mermaid flowcharts shifted right with large left gap** ([#83](https://github.com/OlaProeis/Ferrite/issues/83)) — TD/BT layers centered on `max_cross_size`; back-edge padding only on sides that need loop clearance
- **Split/rendered view: only first consecutive fenced code block visible** ([#129](https://github.com/OlaProeis/Ferrite/issues/129))
- **Empty table cells hard to focus** ([#131](https://github.com/OlaProeis/Ferrite/issues/131)) — hit targets and Tab/Shift+Tab for empty cells
- **Multi-cursor copy/cut only copied primary selection** — `selected_text()` joins all non-empty selections (VS Code style)
- **Search in Files panel grew to full window height** — fixed-height scrollable region, max 480 px
- **Scroll ghost snap with sync off** — turning sync off clears pending targets and resets `SyncScrollState`
- **Split 2-way sync: preview jumped when scrolling to bottom** — top/bottom snaps from rendered pane use `set_raw_target()` instead of `pending_scroll_offset`
- **Crash recovery dropped file opened on cold start** — CLI/file-association startup paths deferred until recovery dialog is answered
- **Recovery cross-tab data loss** (Task 106) — recovery and autosave now require path-and-disk-hash identity; mismatches show a non-blocking banner
- **Rendered view: scroll jump on task list checkbox click** — reuses culling layout when block line structure is unchanged; only wheel/scrollbar treated as active scroll
- **CSV long cell text overflow** — `truncate_cell_to_pixel_width()` with font-metrics binary search + painter clip rect
- **Frontmatter panel stale after tab switch** — cache keyed on `(tab_id, content_version)`
- **Doc nav buttons visible above modal overlays** — use `Order::Middle`; suppressed while Ctrl+P / palette / search is open
- **Status-bar Help vs resize corner** (I-1) — `consume_clicks_in_resize_zones` prevents edge widgets stealing resize clicks
- **Terminal CJK paste/input local-echo** (I-2) — UTF-8 init on shell spawn; lazy CJK font load on CJK input
- **Quick note workflow: untitled close didn't prompt to save** — `SavePromptContext` distinguishes tab close from app exit
- **Export menu double icons** — stripped duplicate emoji from all locale files
- **Outline panel tab hit-testing with Phosphor icons** — painter-based dual-font tab labels
- **Per-document view mode not restored on reopen** — closed tabs upsert into `last_open_tabs`
- **Detached Productivity Hub fought resize** — removed width floor; clipped inner content

---

## What's Next: v0.3.1

The next release focuses on text rendering and diagram export:

- **Full RTL & bidirectional text support** — editor and rendered view
- **SVG and PNG export for Mermaid diagrams** — save any diagram directly from the preview
- **Manual diagram layout** — drag-to-reposition nodes
- **Mermaid renderer as standalone crate** — extraction for community use

---

## Upgrade Instructions

### Windows

Download the MSI installer or portable ZIP from the [download page](/download).

### macOS

Download the `.app` bundle (Apple Silicon or Intel) from the [download page](/download).

> **Note:** If macOS shows a "damaged app" warning, see [macOS install instructions](/download#macos) for the Gatekeeper workaround. Code signing is planned for v0.3.1.

### Linux

```bash
# Debian/Ubuntu
sudo apt install ./ferrite-editor_amd64.deb

# Fedora/RHEL
sudo dnf install ./ferrite-editor.x86_64.rpm

# Nix/NixOS
nix run github:OlaProeis/Ferrite

# Tarball
tar -xzf ferrite-linux-x64.tar.gz
./ferrite
```

### Rust Version

v0.3.0 requires **Rust 1.92**. If you build from source:

```bash
rustup toolchain install 1.92.0
# or: rely on rust-toolchain.toml in the repo root
```

---

## Thank You

Thank you to everyone who reported bugs, contributed translations via Weblate, and tested pre-releases. The critical smart-paste crash was reported by users pasting non-Latin text and wondering why Ferrite crashed — your bug reports directly shaped this release.

---

[Download v0.3.0](/download) | [View full changelog](/changelog) | [Report issues](https://github.com/OlaProeis/ferrite/issues)
