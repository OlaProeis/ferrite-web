---
title: "v0.2.8 Release: Command Palette, Text Shaping, Image & PDF Viewers"
description: "Ferrite v0.2.8 brings a Command Palette with fuzzy search, HarfRust text shaping for complex scripts, native image and PDF viewer tabs, a major rendered view performance overhaul, table cell rich text, and 13 bug fixes."
date: 2026-04-15
category: release
readingTime: "9 min read"
tags: ["release", "command-palette", "text-shaping", "pdf", "performance", "tables"]
---

# Ferrite v0.2.8: Command Palette, Text Shaping, Image & PDF Viewers

Ferrite v0.2.8 is a performance and capability release. Where v0.2.7 focused on writing workflows (wikilinks, Vim mode, callouts), this release goes deeper into the rendering engine: a Command Palette for discoverability, HarfRust-powered text shaping for complex scripts, native image and PDF viewing, and a ground-up overhaul of rendered view performance that makes large documents actually usable.

> **Summary:** Command Palette (Alt+Space) with fuzzy search. HarfRust text shaping for Arabic, Bengali, Devanagari, and other complex scripts. Image viewer tabs (PNG/JPEG/GIF/WebP/BMP) and PDF viewer tabs (hayro, pure Rust). Major rendered view performance overhaul: AST caching, viewport culling, block height cache, lazy estimation. Table cell rich text with click-to-edit. Background file loading for 5MB+ files. Strict line breaks. Middle-click to close tabs. 13 bug fixes.

## Command Palette

The biggest quality-of-life addition in v0.2.8 is the Command Palette, launched with **Alt+Space**.

Every action in Ferrite is now searchable. Type a few characters and fuzzy matching surfaces the command you need — toggle Vim mode, switch themes, export HTML, open recent files, or any of the dozens of actions that previously required knowing the exact keyboard shortcut.

The palette includes:
- **Fuzzy search** across all registered actions
- **Recent commands** surfaced at the top for quick re-use
- **Category grouping** so related commands appear together
- **Shortcut hints** displayed alongside each action

On Windows, a thread-level keyboard hook prevents the OS system menu from hijacking Alt+Space. The keybinding is configurable if Alt+Space conflicts with your workflow.

This replaces the need for a traditional menu bar. Instead of navigating File → Export → HTML, just type "export" and hit Enter.

## HarfRust Text Shaping (Phase 2)

v0.2.7 added font loading for 11 script families (Phase 1). v0.2.8 completes Phase 2 by integrating **HarfRust** — a Rust port of HarfBuzz — for proper text shaping.

What does text shaping mean in practice? Scripts like Arabic, Bengali, and Devanagari have characters that change form depending on their neighbors. Arabic letters connect differently at the start, middle, and end of words. Bengali and Devanagari have complex ligatures and conjuncts. Without a shaping engine, these scripts render as disconnected, incorrect glyphs.

With HarfRust, Ferrite now correctly shapes:
- **Arabic** — Connected cursive forms, right-to-left glyph substitution
- **Bengali** — Conjunct consonants, vowel sign positioning
- **Devanagari** — Ligatures, half-forms, nukta positioning
- **Other complex scripts** — Thai, Tamil, and more benefit from proper glyph positioning

This is the editor-side shaping. Phase 3 (RTL layout and bidirectional text) and Phase 4 (shaped text in rendered view and Mermaid diagrams) are planned for v0.3.0.

## Image Viewer Tabs

Ferrite can now open image files directly as tabs. Supported formats: **PNG, JPEG, GIF, WebP, BMP**.

Open an image from the file browser or drag-and-drop it into the tab bar. The viewer supports zoom, pan, and fits the image to the available space. This is particularly useful when working on documentation with embedded screenshots — you can view the image without leaving the editor.

## PDF Viewer Tabs

PDF files can now be opened as native tabs using **hayro**, a pure Rust PDF rendering library. No system dependencies, no external viewers — PDFs render directly in the Ferrite window.

This complements the markdown workflow: view reference PDFs alongside your writing without switching applications. The viewer supports page navigation and zoom.

Note that this is a *viewer* — PDF export (markdown to PDF) is planned for v0.2.9.

## Rendered View Performance Overhaul

The rendered (WYSIWYG) view got a comprehensive performance rework targeting large documents. Previously, documents over a few thousand lines could stutter or become sluggish in rendered view. v0.2.8 fixes this with four key optimizations:

### AST Caching

The markdown AST is now cached and only re-parsed when the document changes. Previously, every frame triggered a full re-parse. For a 10,000-line document, this eliminates ~15ms of per-frame parsing overhead.

### Viewport Culling

Only blocks visible in the current viewport are rendered. The layout engine computes block positions but skips the actual rendering for off-screen content. Scrolling through a 50,000-line document now costs roughly the same as scrolling through 500 lines.

### Block Height Cache

Each block's rendered height is cached and invalidated only when its content changes. Combined with viewport culling, this means scrollbar calculations and scroll-to-line operations are O(1) lookups instead of O(N) traversals.

### Lazy Height Estimation

For blocks that haven't been rendered yet (far off-screen), Ferrite uses statistical estimation based on average line heights. Heights are refined as blocks scroll into view. This means the scrollbar is accurate without needing to lay out every block upfront.

Together, these optimizations fix [#105](https://github.com/OlaProeis/Ferrite/issues/105) and make the rendered view viable for large files that previously required staying in raw editor mode.

## Per-Frame O(N) Elimination

Beyond the rendered view, v0.2.8 hunts down and eliminates per-frame O(N) allocations across the application:

- **CSV viewer** — Fixed unnecessary per-frame re-parsing of visible rows
- **TreeViewer** (JSON/YAML/TOML) — Reduced per-frame allocations in tree layout
- **Central panel** — Optimized per-frame allocation patterns

These are the kind of changes that don't show up as features but make the entire application feel more responsive, especially on lower-powered machines.

## Table Cell Rich Text

Markdown tables in rendered view now support **inline formatting inside cells**:

- **Bold**, *italic*, ~~strikethrough~~, `code spans`
- Nested formatting (bold+italic, bold+code, etc.)
- Click-to-edit — click a cell in rendered view to jump to the source

Previously, table cells were rendered as plain text regardless of markdown formatting. This was one of the most frequently reported gaps between Ferrite's rendered view and what users expected from their markdown tables.

## Other Improvements

### Background File Loading

Files over 5MB now load in a background thread with progress indication. The editor remains responsive while large files are being read, parsed, and indexed. Previously, opening a large file could freeze the UI for several seconds.

### Strict Line Breaks

Ferrite now supports the **Obsidian line break model** where a single newline in the source creates a `<br>` in the rendered view. This matches how Obsidian, Typora, and other editors handle line breaks, as opposed to the CommonMark default where single newlines are treated as soft wraps.

### Middle-Click to Close Tabs

Middle-clicking a tab now closes it, matching the behavior of web browsers and most tabbed editors.

## Bug Fixes

This release resolves 13 bugs:

- **macOS .md file association** ([#102](https://github.com/OlaProeis/Ferrite/issues/102)) — Fixed .md files not opening in Ferrite when double-clicked in Finder
- **Windows IME candidate box positioning** ([#103](https://github.com/OlaProeis/Ferrite/issues/103)) — Applied `layer_transform_to_global()` to IME coordinates so the candidate window appears at the cursor
- **Custom font crash on Linux** ([#114](https://github.com/OlaProeis/Ferrite/issues/114)) — Fixed crash when loading custom fonts on Linux systems
- **Linux Cinnamon dialog detection** ([#116](https://github.com/OlaProeis/Ferrite/issues/116)) — Proper detection of Cinnamon desktop environment for file dialogs
- **Table inline formatting preservation** ([#117](https://github.com/OlaProeis/Ferrite/issues/117)) — Inline formatting (bold, italic, code) no longer lost on cell edit
- **Terminal CJK double-width character overlap** ([#110](https://github.com/OlaProeis/Ferrite/issues/110)) — Added `unicode-width` crate for correct 2-column cursor advancement and wide character rendering
- **Windows 11 borderless window offset** ([#112](https://github.com/OlaProeis/Ferrite/issues/112)) — Applied `.with_transparent(true)` DWM workaround for correct window positioning
- **Slow rendering on large documents** ([#105](https://github.com/OlaProeis/Ferrite/issues/105)) — Fixed via the performance overhaul described above
- **Table strikethrough not rendering** — Cells with `~~text~~` now render with strikethrough
- **Table code spans not rendering** — Cells with `` `code` `` now render as code
- **Table nested formatting** — Combined formatting (e.g., `***bold italic***`) now renders correctly in cells
- **Table formatting lost on edit** — Editing a cell no longer strips inline formatting from other cells
- **CSV viewer per-frame parsing** — Fixed unnecessary re-parsing on every frame

## What's Next: v0.2.9

The next release focuses on a major platform upgrade and export capabilities:

- **eframe/egui 0.31+ upgrade** — Fixes Wayland keyboard input on Ubuntu 24.04, macOS Sonoma keyboard issues, and Windows 11 borderless/DPI problems at their root
- **PDF export** — Export markdown to PDF with proper margins, page breaks, code blocks, and tables
- **HTML export improvements** — Themed, self-contained HTML with better Mermaid/code/table styling
- **Executable code blocks** — Run shell and Python snippets with inline output (deferred from v0.2.8)
- **LSP integration fixes** — Memory optimization, diagnostics panel, incremental document sync

## Upgrade Instructions

### Windows

Download the MSI installer or portable ZIP from the [download page](/download).

### macOS

Download the `.app` bundle (Apple Silicon or Intel) from the [download page](/download).

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

## Thank You

Thank you to everyone who reported bugs, tested pre-releases, and contributed translations via Weblate. Your feedback directly shaped the priorities in this release.

---

[Download v0.2.8](/download) | [View full changelog](/changelog) | [Report issues](https://github.com/OlaProeis/ferrite/issues)
