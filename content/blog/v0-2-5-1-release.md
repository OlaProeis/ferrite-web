---
title: "v0.2.5.1 Release: Memory, Encoding & Polish"
description: "Ferrite v0.2.5.1 dramatically reduces memory usage (250MB to 72MB), adds multi-encoding file support, fixes CPU usage issues, and improves cursor positioning accuracy."
date: 2026-01-17
category: release
readingTime: "5 min read"
tags: ["release", "performance", "encoding", "memory", "optimization"]
---

# Ferrite v0.2.5.1: Memory, Encoding & Polish

Hot on the heels of v0.2.5, we're releasing v0.2.5.1 - a point release focused on **memory optimization**, **multi-encoding file support**, **CPU usage fixes**, and **accuracy improvements**. This update makes Ferrite significantly more resource-efficient and capable.

## Memory Optimization: 250MB to 72MB

The headline improvement: idle memory usage dropped from ~250MB to ~72MB for most users. Here's how we did it:

### CJK Font Lazy Loading
Previously, Ferrite loaded all CJK (Chinese, Japanese, Korean) fonts at startup - roughly 180MB of font data even if you never opened a CJK document. Now fonts load on-demand:

- **Korean** - Loads only when Hangul characters detected (~30MB)
- **Japanese** - Loads only when Hiragana/Katakana detected (~30MB)  
- **Chinese** - Loads only when Han characters detected (~30MB)

For non-CJK users, this means ~180MB of savings. For users who do work with CJK text, fonts load quickly when first needed.

### Custom Memory Allocators
We've switched to platform-specific high-performance allocators:

- **Windows**: `mimalloc` - Microsoft's high-performance allocator
- **Linux/macOS**: `jemalloc` - Facebook's allocator, excellent for long-running processes

These reduce heap fragmentation and memory usage, especially in long editing sessions.

### Memory Leak Fixes
Fixed leaks where `tree_viewer_states`, `csv_viewer_states`, and `sync_scroll_states` weren't being cleaned up when tabs closed. Also cleaned up stale `SyntaxHighlightCache` entries from egui's memory.

## Multi-Encoding File Support

No more garbled text when opening legacy files. Ferrite now automatically detects and handles multiple encodings:

- **Automatic detection** - Uses `encoding_rs` and `chardetng` for reliable encoding detection
- **Supported encodings** - Latin-1, Windows-1252, ISO-8859-x, Shift-JIS, EUC-KR, GBK, and more
- **Status bar indicator** - Shows current encoding with click-to-change dropdown
- **Preserve on save** - Files save back in their original encoding, not forced to UTF-8

This is especially useful for working with older documents, regional text files, or mixed-encoding codebases.

## CPU Usage: 10% to <1% When Idle

We fixed a persistent issue where Ferrite used ~10% CPU even when idle. The culprits:

### Tiered Idle Repaint System
Implemented intelligent repaint scheduling based on user interaction:

- **Active** (animations/dialogs): 60 FPS continuous repaint
- **Light idle** (0-2 seconds): ~10 FPS (100ms intervals)
- **Deep idle** (2+ seconds): ~2 FPS (500ms intervals)

### Intel Mac CPU Fix
Fixed a specific issue on Intel Macs where Rendered mode caused continuous 60fps repaints. The root cause: `Sense::hover()` on the scroll area was triggering repaints whenever the mouse moved, bypassing idle throttling.

### Window Title Optimization
Previously we sent viewport title commands every frame. Now we only send when the title actually changes.

## Cursor Positioning Improvements

Click-to-edit in rendered/split view is now more accurate:

- **Galley-based click mapping** - Uses egui's actual text layout for character index conversion
- **Formatting marker mapping** - Correctly maps displayed positions to raw markdown, accounting for `**bold**`, `*italic*`, `` `code` ``, `~~strikethrough~~`, and `[links](url)`
- **Text wrapping support** - Handles wrapped lines correctly
- **Bold font measurement** - Uses the correct font weight when measuring bold text

> **Known limitation:** Cursor positioning is "best effort" within egui's constraints. Lines with mixed formatting may still have slight drift on longer lines. Perfect positioning will come with the custom editor widget in v0.3.0.

## Scroll Navigation Accuracy

Fixed scroll navigation in large files (3000+ lines) where targets could be hundreds of pixels off:

- **Unified scroll calculation** - Single function for all scroll-to-line operations
- **Fixed off-by-one errors** - Consistent 0-indexed vs 1-indexed handling
- **Fresh line height** - Uses actual rendered line height, not stale default values
- **Semantic minimap fix** - Fixed highlight offset when clicking outline/minimap items

## Additional Fixes

- **New file dirty flag** - New untitled files no longer prompt to save when closed if unmodified
- **CJK first-line indentation** - Paragraph indentation now correctly applies only to the first line
- **Workspace close button** - X button shifted left to prevent overlap with resize handles
- **Linux close button** - Fixed hit-testing issue preventing close button clicks
- **Session restore settings** - Added option to disable tab restoration on startup

## Antivirus False Positive Mitigation

Windows Defender's ML-based detection has been flagging Ferrite as suspicious (a common issue for unsigned Rust applications). We've adjusted the release build profile to reduce heuristic triggers:

- Changed LTO from "fat" to "thin"
- Changed opt-level from "z" to "3"
- Disabled symbol stripping

**Code signing is our top priority for v0.2.6** - this will provide cryptographic proof of authenticity and dramatically reduce false positives.

## Upgrade Instructions

### Windows
Download the new installer from the [download page](/download) and run it. Settings are preserved.

### macOS
Download the new DMG and drag to Applications, replacing the old version.

### Linux

```bash
# AppImage
chmod +x ferrite-0.2.5.1-linux-x64.AppImage
./ferrite-0.2.5.1-linux-x64.AppImage

# Debian/Ubuntu
sudo dpkg -i ferrite-0.2.5.1-linux-x64.deb

# Fedora/RHEL
sudo rpm -U ferrite-0.2.5.1-linux-x64.rpm
```

## What's Next (v0.2.6)

The next release focuses on:

- **Code signing** - Stop Windows Defender false positives
- **Large file performance** - Handle 80MB+ CSV files with lazy row parsing
- **Executable code blocks** - Run code snippets directly in preview
- **Content blocks/callouts** - GitHub-style `[!NOTE]`, `[!WARNING]` blocks
- **Vim mode** - Optional modal editing for Vim users

## What's Still Missing

We believe in transparency. Here's what Ferrite can't do yet:

- **No LaTeX math** - Math rendering planned for v0.4.0
- **No multi-cursor** - Blocked by egui, fix coming in v0.3.0 custom editor
- **No code folding** - Text hiding not possible in egui, fix coming in v0.3.0
- **Large files degrade** - View-only mode for huge files planned for v0.2.6

Check our [roadmap](https://github.com/OlaProeis/ferrite/blob/main/ROADMAP.md) for the full picture.

## Thank You

Thanks to everyone who reported issues and provided feedback. Special thanks to:

- The community for patience with the antivirus false positive issues
- [@sr79368142](https://github.com/sr79368142) for Simplified Chinese translation
- Everyone testing on Intel Macs who helped us diagnose the CPU issue

---

[Download v0.2.5.1](/download) | [View full changelog](https://github.com/OlaProeis/ferrite/blob/main/CHANGELOG.md) | [Report issues](https://github.com/OlaProeis/ferrite/issues)
