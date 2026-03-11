---
title: "v0.2.7 Release: Wikilinks, Vim Mode, Callouts & 20+ Bug Fixes"
description: "Ferrite v0.2.7 brings wikilinks & backlinks, Vim mode, GitHub-style callouts, a visual frontmatter editor, welcome view, Unicode complex script support, MSI installer overhaul, and 20+ bug fixes."
date: 2026-03-11
category: release
readingTime: "10 min read"
tags: ["release", "wikilinks", "vim", "callouts", "frontmatter", "unicode", "performance"]
---

# Ferrite v0.2.7: Wikilinks, Vim Mode, Callouts & 20+ Bug Fixes

Ferrite v0.2.7 is our biggest feature release yet. While v0.2.6 was about rebuilding the editor engine from scratch, v0.2.7 is about making Ferrite genuinely useful for daily writing and note-taking workflows — with wikilinks, Vim keybindings, callout blocks, and dozens of quality-of-life improvements.

> **Summary:** Wikilinks & backlinks, Vim mode, GitHub-style callouts, visual frontmatter editor, welcome view, check for updates, Ctrl+Scroll zoom, lazy CSV parsing, single-instance protocol, MSI installer overhaul, PortableApps.com packaging, Nix/NixOS support, Unicode complex script fonts (Phase 1), and 20+ bug fixes.

## Markdown Linking: Wikilinks & Backlinks

The most requested feature for note-taking workflows is here.

### Wikilinks

Use `[[target]]` or `[[target|display text]]` to link between documents. Wikilinks resolve relative paths, handle spaces in filenames, and navigate on click. If a target is ambiguous (multiple files with the same name), Ferrite shows a disambiguation prompt.

### Backlinks Panel

A new panel shows every file that links to the current document. Built on graph-based indexing for large workspaces, with click-to-navigate for instant jumping between connected notes.

## Vim Mode

Optional Vim-style modal editing is now available in Settings → Editor. Supports:

- **Normal mode** — hjkl movement, dd (delete line), yy (yank), p (paste), /search
- **Insert mode** — Standard editing with Escape to return to Normal
- **Visual mode** — v for character selection, V for line selection

A mode indicator in the status bar shows your current mode. All existing Ferrite shortcuts continue to work alongside Vim bindings.

## GitHub-Style Callouts

Ferrite now supports the callout syntax used by GitHub and Obsidian:

- `> [!NOTE]` — Informational notes
- `> [!TIP]` — Helpful tips
- `> [!WARNING]` — Warnings
- `> [!CAUTION]` — Dangerous actions
- `> [!IMPORTANT]` — Critical information

Each callout type gets color-coded blocks with icons in rendered view. Add custom titles with `> [!NOTE] Custom Title`, or make them collapsible with `> [!NOTE]-`.

## Welcome View

New users are greeted with a guided setup on first launch (contributed by [@blizzard007dev](https://github.com/blizzard007dev) in [PR #80](https://github.com/OlaProeis/Ferrite/pull/80)). Configure your preferred theme, language, editor settings (word wrap, line numbers, minimap, bracket matching), max line width, CJK font preference, and auto-save — all before touching your first document.

## Visual Frontmatter Editor

A new "FM" tab in the outline panel provides a form-based interface for editing YAML frontmatter. String fields, date pickers, and tag lists with chip UI — all synced bidirectionally with the source. No more hand-editing YAML delimiters.

## Check for Updates

A new button in Settings → About checks the GitHub Releases API and shows the result inline. Strictly manual and user-initiated — no background checking, no telemetry, consistent with Ferrite's offline-first philosophy. Security-hardened with URL validation and TLS via `rustls`.

## UI Declutter

The interface got cleaner:

- **Format toolbar moved to editor bottom** — Bold, italic, headings, lists, and other formatting buttons now live in a collapsible toolbar at the bottom of the raw editor. Reduces ribbon clutter significantly.
- **Side panel toggle strip** — A thin strip on the right edge replaces separate ribbon buttons for outline and productivity hub. Click to open/close the panel containing Outline, Statistics, Backlinks, and Productivity Hub tabs.
- **All keyboard shortcuts preserved** — Existing shortcuts continue to work exactly as before.

## Large File Performance

- **Large file detection** — Files over 10MB trigger a warning toast on open
- **Lazy CSV row parsing** — Byte-offset row index built on load; only visible rows parsed on demand. Reduces additional memory from ~100-200MB to ~8MB for 1M-row files. Small CSV files (<1MB) are now cached instead of re-parsed every frame.

## Table Editing Improvements

- **Column resizing** — Drag column separators with resize cursor, visual guide line, min-width enforcement, proportional scaling on window resize, double-click to reset
- **Background fix** — Table backgrounds now use actual rendered row dimensions, fixing gaps and overlap issues

## Unicode Complex Script Support (Phase 1)

Ferrite can now load fonts for 22 Unicode ranges across 11 script families: Arabic, Bengali, Devanagari, Thai, Hebrew, Tamil, Georgian, Armenian, Ethiopic, other Indic scripts, and Southeast Asian scripts. Font loading is lazy (per-script atomic flags) with platform-specific system font candidates and fallback chains.

A new Settings → Appearance → Additional Scripts section lets you pre-select fonts per script. Phase 2 (text shaping via HarfRust) is planned for v0.2.8.

## Single-Instance Protocol

Double-clicking files in the OS file explorer now opens them as tabs in the existing Ferrite window instead of spawning a new process. Uses lock file + TCP IPC with a background accept thread for instant response (<50ms end-to-end).

## Installer & Distribution

### Windows MSI Overhaul

Complete installer rewrite with WixUI_FeatureTree:
- Optional file associations (.md, .txt, .json, .yaml, .toml, .csv) with per-extension toggles
- Explorer context menu ("Open with Ferrite" on files and folders)
- Optional add-to-PATH and desktop shortcut
- Windows Default Apps registration
- Launch-after-install checkbox

### PortableApps.com Format

Full PAF-compliant portable distribution. NSIS-compiled installer with LZMA compression, automated in CI. No registry writes, no AppData — everything lives in `Data\settings\`.

### Nix/NixOS Flake

Official `flake.nix` for reproducible builds and development shells, contributed by [@liuxiaopai-ai](https://github.com/liuxiaopai-ai) in [PR #92](https://github.com/OlaProeis/Ferrite/pull/92). Supports `nix run`, `nix build`, `nix develop` across x86_64 and aarch64 on Linux and macOS.

### macOS .app Bundle

CI now packages a proper `.app` bundle via `cargo-bundle`, fixing Gatekeeper blocking issues ([#93](https://github.com/OlaProeis/Ferrite/issues/93)).

## Localization

German (Deutsch) and Japanese (日本語) are now available in Settings → Appearance → Language, joining the existing translations.

## Bug Fixes

This release resolves over 20 bugs:

- **Crash on large selection delete** — Selecting a large block and pressing Backspace caused a `capacity overflow` panic. Fixed with 4-layer defense.
- **IME backspace deleting editor text** ([#91](https://github.com/OlaProeis/Ferrite/issues/91)) — Backspace during CJK IME composition no longer deletes committed characters.
- **Light mode text invisible** — `RichText::strong()` headers were invisible in light mode due to `active.fg_stroke.color` being WHITE.
- **List item text not wrapping** ([#82](https://github.com/OlaProeis/Ferrite/issues/82)) — Long list items in rendered view now wrap properly.
- **Empty list item heading mis-render** ([#82](https://github.com/OlaProeis/Ferrite/issues/82)) — `- ` after a paragraph no longer triggers false setext heading detection.
- **Syntax highlighting per-frame re-parsing** — Cache-first approach eliminates severe lag on files with long lines.
- **Scrollbar position incorrect with word wrap** — Now uses cumulative y-offsets from the height cache.
- **Scrollbar drag wrong reverse mapping** — Binary search with sub-line precision for accurate dragging.
- **Scrollbar jumping** — Dirty flag rebuild and smoothed scrollbar height.
- **Images not displaying in rendered mode** — `![](path)` now shows images with path resolution, caching, and graceful placeholders.
- **Binary file crash** — Opening PNG/JPEG as text no longer panics.
- **Session recovery dialog after "Don't Save"** — Lock file ordering fix prevents false crash detection.
- **Task list checkbox rendering** ([#95](https://github.com/OlaProeis/Ferrite/issues/95)) — Proper checkbox UI instead of ASCII `[ ]`/`[x]`.
- **Flatpak "Open Folder"** ([#96](https://github.com/OlaProeis/Ferrite/issues/96)) — Falls back to `$HOME` when no recent directory available.
- **Linux file dialog errors** ([#97](https://github.com/OlaProeis/Ferrite/issues/97)) — Portal failure detection with distro-specific installation instructions.
- **Rendered mode copy spacing** — No more phantom spaces in copied code blocks and inline text.
- **CJK rendering after restart** ([#76](https://github.com/OlaProeis/Ferrite/issues/76)) — Preferred CJK font preloaded at startup.

## Refactoring & Quality

- **Flowchart modularization** — The 3600-line `flowchart.rs` was split into 12 focused modules (types, parser, layout, render, utils)
- **Window controls redesign** — Crisp hand-painted icons, rounded hover backgrounds, compact sizing, fixed fullscreen icon

## What's Next: v0.2.8

With the features and polish of v0.2.7, the next release focuses on deeper capabilities:

- **Executable code blocks** — Run shell/Python snippets with inline output
- **Unicode text shaping (Phase 2)** — HarfRust integration for proper Arabic, Bengali, Devanagari rendering
- **LSP integration** — Language server protocol for diagnostics, hover, and go-to-definition
- **Traditional menu bar** — Alt-key accessible File/Edit/View menus
- **More file formats** — XML tree viewer, INI/ENV files, log file highlighting

## Upgrade Instructions

### Windows

Download the new MSI installer or portable ZIP from the [download page](/download). The MSI installer now supports optional file associations and context menu integration.

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

This release includes contributions from the community — special thanks to [@blizzard007dev](https://github.com/blizzard007dev) for the welcome view ([PR #80](https://github.com/OlaProeis/Ferrite/pull/80)) and [@liuxiaopai-ai](https://github.com/liuxiaopai-ai) for Nix/NixOS support ([PR #92](https://github.com/OlaProeis/Ferrite/pull/92)). Thank you to everyone who reported bugs, tested pre-releases, and contributed translations.

---

[Download v0.2.7](/download) | [View full changelog](/changelog) | [Report issues](https://github.com/OlaProeis/ferrite/issues)
