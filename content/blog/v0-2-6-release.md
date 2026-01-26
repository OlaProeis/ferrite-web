---
title: "v0.2.6 Release: FerriteEditor - A Custom Text Editor from Scratch"
description: "Ferrite v0.2.6 introduces FerriteEditor, a complete ground-up reimplementation of the text editor. Massive memory savings (4MB file: 15MB vs 1.5GB), with virtual scrolling, multi-cursor, code folding, IME support, and more."
date: 2026-01-26
category: release
readingTime: "8 min read"
tags: ["release", "editor", "performance", "multi-cursor", "code-folding", "virtual-scrolling"]
---

# Ferrite v0.2.6: FerriteEditor - A Custom Text Editor from Scratch

This release marks a **major milestone** for Ferrite. We've completely rewritten the text editor from the ground up, replacing egui's built-in TextEdit with our own custom implementation: **FerriteEditor**.

> **Milestone achieved:** Massive memory improvements. A 4MB file now adds ~15MB RAM (was 1.5GB with egui's TextEdit). Editing is smooth and responsive.

## Why Build a Custom Editor?

Previous Ferrite versions used egui's TextEdit widget. While it worked well for small files, it had fundamental limitations:

- **No virtual scrolling** - The entire document was rendered every frame
- **Multi-cursor blocked** - egui's architecture made true multi-cursor impossible
- **Code folding impossible** - Couldn't hide text ranges
- **Memory hungry** - Large files caused massive RAM consumption
- **Performance ceiling** - O(n) operations became unacceptable for big files

With FerriteEditor, every one of these limitations is now resolved.

## What's New in FerriteEditor

### Virtual Scrolling

FerriteEditor only renders the visible lines plus a small buffer, dramatically reducing memory usage for larger files. Scroll position is tracked in a ViewState that efficiently maps screen coordinates to document positions.

### Rope-Based Text Buffer

The document is stored in a **rope data structure** (via the `ropey` crate), enabling O(log n) text operations. Whether you're editing at the start, middle, or end of a massive file, insertions and deletions are instant.

### Full Selection Support

- **Click and drag** to select text
- **Shift+Arrow keys** for keyboard selection
- **Shift+Home/End** to select to line boundaries
- **Double-click** to select a word
- **Triple-click** to select a line
- **Ctrl+A** to select all

### Multi-Cursor Editing

Finally, true multi-cursor support! **Ctrl+Click** adds cursors at any position. All cursors edit simultaneously - type, delete, or paste and watch every cursor update in sync.

### Code Folding

Fold regions now work properly. Click the fold indicators in the gutter to collapse code blocks, functions, or any foldable region. Navigation automatically skips over folded content.

### IME Support

Full input method support for:
- **Chinese Pinyin** input
- **Japanese Romaji** input  
- **Korean Hangul** input

The IME composition window positions correctly relative to the cursor.

### Syntax Highlighting

Per-line syntax highlighting using syntect, but smartly limited to the visible viewport. Even in huge files, highlighting stays fast because we only process what you can see.

### Bracket Matching

A windowed algorithm (~200 lines around the cursor) finds matching brackets in O(window) time. Works instantly regardless of file size.

### Word Wrap

Dynamic line heights with proper visual cursor navigation. The cursor moves through wrapped lines naturally, and selection highlighting accounts for wrapped content.

### Undo/Redo System

Operation-based EditHistory with intelligent grouping. Keystrokes within 500ms are grouped into single undo units, so you don't have to undo character-by-character. Ctrl+Z and Ctrl+Y work as expected.

## UI/UX Improvements

### Document Navigation Buttons

New jump buttons in the editor corner let you instantly navigate to the **top**, **middle**, or **bottom** of your document.

### Semi-Transparent Selection

Selected text remains readable through the highlight. No more squinting at inverted colors.

### Cursor Blink

Standard ~500ms blink interval with theme-aware colors. New documents auto-focus so you can start typing immediately.

### Better File Dialog

The Open dialog now shows `.txt` files in the default filter. No more hunting through "All Files" to find your text files.

## Performance Fixes

### The 4MB / 1.5GB Bug (#45)

Opening a 4MB text file previously caused ~1.5GB RAM usage due to egui's TextEdit. With FerriteEditor, that same file now adds only ~15MB. For larger files like 80MB, you'll see roughly 300MB additional RAM usage - still a massive improvement over the gigabytes it would have consumed before.

We found and fixed multiple culprits:

1. **Per-frame content cloning** - The editor was copying the entire document every frame for undo snapshots. Now uses lazy snapshot pattern.

2. **Case-insensitive search** - Was copying the entire document to lowercase for searching. Now uses regex `(?i)` flag for streaming search.

3. **Search debouncing** - Added 150ms debounce preventing search execution on every keystroke.

4. **Large file optimizations** - Files >1MB now get:
   - Hash-based modification detection
   - Cleared original bytes after loading
   - Reduced undo stack (10 vs 100 operations)

5. **Bracket matching O(n) fix** - Was extracting the entire buffer every frame (4.8GB/sec allocation for 80MB file!). Now uses windowed ~20KB extraction.

6. **Memory release on tab close** - Memory is now properly freed when closing large file tabs.

## Editor Bug Fixes

- **Text jumping to next line** - Fixed cursor unexpectedly jumping when typing at end of line
- **Cannot scroll to bottom** - Fixed missing lines at bottom of large files with/without word wrap
- **Outline/Minimap cursor placement** - Fixed cursor landing several lines below clicked heading
- **Search highlight alignment** - Fixed highlight drift on wrapped lines in large files
- **Box drawing characters** - Fixed U+2500-U+257F rendering as squares (added JetBrains Mono fallback)

## UI Fixes

- **File browser context menu icons** - Fixed doubled/square icons in right-click menu
- **Link hover gear icon removed** - Click now edits, Ctrl+Click opens in browser
- **Initial cursor visibility** - New documents show blinking cursor immediately
- **Cursor appearance** - Theme-aware color, proper height matching line height
- **Windows Start Menu icon** - Fixed pixelated/low-res icon (proper multi-size .ico)

## Architecture: Modular Refactoring

The original `editor.rs` was a 2735-line monolith. We've split it into focused modules for better maintainability:

| Module | Responsibility |
|--------|----------------|
| `buffer.rs` | Rope-based TextBuffer with efficient text operations |
| `cursor.rs` | Cursor and Selection types with multi-cursor support |
| `history.rs` | EditHistory with operation-based undo/redo |
| `view.rs` | ViewState for virtual scrolling and viewport tracking |
| `line_cache.rs` | LRU galley cache for efficient rendering |
| `selection.rs` | Selection rendering, word boundaries, select_all |
| `highlights.rs` | Search/bracket highlight rendering |
| `find_replace.rs` | Replace operations with undo support |
| `mouse.rs` | Click position to cursor conversion |
| `search.rs` | Search match management API |
| `input/` | Keyboard and IME input handling |
| `rendering/` | Cursor, gutter, and text rendering |

The main `editor.rs` dropped from 2735 to 1551 lines - a **43% reduction**. Each module is now testable in isolation.

## Integration Updates

All existing features now work with the new editor:

- Format toolbar connected to FerriteEditor buffer operations
- Outline panel and minimap integrated with new scroll system
- Font settings dynamically update editor rendering
- Line numbers toggle works without restart
- File save preserves encoding through FerriteEditor

## Upgrade Instructions

### Windows

Download the MSI installer or portable ZIP from the [download page](/download).

### macOS

Download the new tarball and replace the old version. Settings are preserved.

### Linux

```bash
# Debian/Ubuntu
sudo apt install ./ferrite-editor_amd64.deb

# Fedora/RHEL/CentOS
sudo dnf install ./ferrite-editor.x86_64.rpm

# Tarball
tar -xzf ferrite-linux-x64.tar.gz
./ferrite
```

## What's Next

With the custom editor foundation in place, we can now build features that were previously impossible:

- **Vim mode** - Modal editing with proper cursor/selection semantics
- **Rectangular selection** - Alt+drag for column selection
- **Sticky scroll** - Keep context headers visible while scrolling
- **Inline code execution** - Run code blocks and see output inline

## Thank You

This release represents months of work reimagining what Ferrite's editor could be. Special thanks to everyone who reported performance issues and helped test the new editor.

---

[Download v0.2.6](/download) | [View full changelog](/changelog) | [Report issues](https://github.com/OlaProeis/ferrite/issues)
