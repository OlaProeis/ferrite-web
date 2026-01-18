---
title: "v0.2.5 Release: The Mermaid Update"
description: "Ferrite v0.2.5 brings a massive Mermaid diagram overhaul, native CSV viewing, internationalization support, semantic minimap, and dozens of new productivity features."
date: 2026-01-16
category: release
readingTime: "6 min read"
tags: ["release", "mermaid", "csv", "i18n", "productivity"]
---

# Ferrite v0.2.5: The Mermaid Update

We're excited to release Ferrite v0.2.5 - our biggest update yet! This release brings a complete Mermaid diagram overhaul, native CSV/TSV viewing, internationalization infrastructure, a semantic minimap, and dozens of productivity improvements.

## Mermaid Diagram Overhaul

The native Mermaid renderer received massive improvements:

### Architectural Changes
- **Modular refactor** - Split the 7000+ line `mermaid.rs` into organized modules per diagram type
- **Performance caching** - AST and layout caching with blake3 hashing for complex diagrams
- **Crash prevention** - Infinite loop safety and panic handling for malformed input

### New Features
- **YAML frontmatter support** - Parse `---` metadata blocks with `title:`, `config:` etc.
- **Parallel edge operator** - Support `A --> B & C & D` syntax for multiple edges
- **classDef/class styling** - Full node styling via directives
- **linkStyle edge styling** - Edge customization via `linkStyle` directive
- **Subgraph improvements** - Layer clustering, internal layout, edge routing, nested margins

### Bug Fixes
- Fixed chained edge parsing (`A --> B --> C`)
- Fixed flowchart direction (LR/TB/RL/BT) keywords
- Fixed missing nodes in complex flowcharts
- Fixed viewport clipping with negative coordinates
- Fixed asymmetric shape text centering

## Native CSV/TSV Viewer

Ferrite now handles tabular data natively:

- **Table view** - Fixed-width column alignment for CSV and TSV files
- **Rainbow column coloring** - Alternating colors for improved readability
- **Auto-delimiter detection** - Detects comma, tab, semicolon, and pipe separators
- **Header row detection** - Intelligent detection and highlighting

## Internationalization (i18n)

The groundwork for a fully translated UI:

- **i18n infrastructure** - YAML translation files in `locales/` directory
- **String extraction** - All UI strings moved to translation keys
- **Weblate integration** - Community translations via [Weblate](https://hosted.weblate.org/projects/ferrite/)
- **CJK paragraph indentation** - First-line indentation for Chinese (2 chars) or Japanese (1 char)

## Semantic Minimap

The minimap is now actually useful for navigation:

- **Header labels** - Display actual H1/H2/H3 text instead of unreadable pixels
- **Content type indicators** - Visual markers for code blocks, diagrams, tables, images
- **Density visualization** - Subtle horizontal bars showing text density
- **Mode toggle** - Switch between "Visual" and "Semantic" modes in settings

## Split View Enhancements

- **Dual editable panes** - The rendered pane in split view is now fully editable
- **Full undo/redo support** - Both panes maintain complete edit history

## New Productivity Features

### Editor Improvements
- **Keyboard shortcut customization** - Rebind any shortcut via settings panel
- **Custom font selection** - Select preferred fonts for editor and UI
- **Windows fullscreen toggle** - Dedicated F10 for fullscreen (separate from F11 Zen mode)
- **Drag & drop images** - Drop images to auto-save to `./assets/` and insert markdown link

### Document Tools
- **Table of Contents generation** - Insert/update `<!-- TOC -->` blocks with Ctrl+Shift+U
- **Document statistics panel** - Word count, reading time, heading/link/image counts
- **Snippets/abbreviations** - Text expansions like `;date` → current date

### Session & Files
- **Session restore reliability** - Workspaces and recent files now persist correctly
- **Recent folders** - Recent files menu now includes workspace folders

## Bug Fixes

- **Search highlight drift** - Fixed highlight boxes drifting from matched text
- **Config persistence** - Settings now save correctly across restarts
- **Zen mode centering** - Content centers properly in rendered/split view
- **Git status auto-refresh** - Refreshes on save, focus, and file system events
- **Quick switcher mouse support** - Fixed mouse hover/click not working
- **Table editing cursor loss** - Fixed cursor losing focus after each keystroke
- **Line width in split view** - Now respects pane boundaries with proper centering
- **Windows top edge resize** - Window can now be resized from all edges
- **macOS Intel optimization** - Reduced CPU usage with idle repaint scheduling

## New Branding

Ferrite has a new visual identity:

- **New logo** - Orange geometric crystal icon
- **Platform icons** - Windows, macOS, and Linux icons in all required sizes

## Upgrade Instructions

### Windows
Download the new installer from the [download page](/download) and run it. Settings are preserved.

### macOS
Download the new DMG and drag to Applications, replacing the old version.

### Linux

```bash
# AppImage
chmod +x ferrite-0.2.5-linux-x64.AppImage
./ferrite-0.2.5-linux-x64.AppImage

# Debian/Ubuntu
sudo dpkg -i ferrite-0.2.5-linux-x64.deb

# Fedora/RHEL
sudo rpm -U ferrite-0.2.5-linux-x64.rpm
```

## What's Next (v0.2.6)

The next release focuses on:

- **Large file performance** - Handling 80MB+ CSV files efficiently
- **Flowchart refactoring** - Splitting the 3500+ line flowchart module
- **Executable code blocks** - Run code snippets directly in preview
- **Content blocks/callouts** - GitHub-style `[!NOTE]`, `[!WARNING]` blocks

## Thank You

Thanks to everyone who reported issues, contributed translations, and provided feedback. Special thanks to:

- [@SteelCrab](https://github.com/SteelCrab) for CJK rendering improvements
- [@sr79368142](https://github.com/sr79368142) for Simplified Chinese translation work
- The community on GitHub Discussions

---

[Download v0.2.5](/download) | [View full changelog](https://github.com/OlaProeis/ferrite/blob/main/CHANGELOG.md) | [Report issues](https://github.com/OlaProeis/ferrite/issues)
