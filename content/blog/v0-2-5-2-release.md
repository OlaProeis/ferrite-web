---
title: "v0.2.5.2 Release: Editor Shortcuts, File Associations & New Installers"
description: "Ferrite v0.2.5.2 brings Delete Line and Move Line shortcuts, macOS file type associations, Windows MSI installer, portable build, and Linux RPM support."
date: 2026-01-20
category: release
readingTime: "4 min read"
tags: ["release", "shortcuts", "installers", "macos", "windows", "linux"]
---

# Ferrite v0.2.5.2: Editor Shortcuts, File Associations & New Installers

Following quickly after v0.2.5.1's memory and performance optimizations, v0.2.5.2 focuses on **editor productivity**, **platform integration**, and **installation flexibility**. This release brings highly-requested editing shortcuts, native macOS file associations, and multiple new installation options across all platforms.

## New Editor Shortcuts

Thanks to [@abcd-ca](https://github.com/abcd-ca) for contributing these productivity improvements!

### Delete Line (Cmd/Ctrl+D)

A classic editor shortcut that many users requested. Press `Cmd+D` (macOS) or `Ctrl+D` (Windows/Linux) to instantly delete the current line. No need to select the entire line first.

The shortcut is configurable in Settings if you prefer a different binding.

### Move Line Up/Down (Alt+Up/Down)

Quickly rearrange your content with `Alt+Up` and `Alt+Down`. The current line swaps position with the line above or below. This is incredibly useful for:

- Reordering list items
- Moving paragraphs around
- Adjusting code structure

Both shortcuts work correctly in Split view, where an earlier bug caused cursor position issues.

## macOS File Type Associations

Ferrite now properly registers itself with macOS for common text file types. Right-click any `.md`, `.json`, `.yaml`, `.toml`, or `.txt` file in Finder, select "Open With," and you'll see Ferrite as an option.

You can also set Ferrite as your default editor for these file types through Finder's "Get Info" dialog.

## New Installation Options

### Windows MSI Installer

We now offer a proper Windows installer (`ferrite-windows-x64.msi`) built with WiX Toolset:

- **Start Menu shortcut** - Find Ferrite easily from the Start Menu
- **Application icon** - Proper icon in all Windows lists
- **Clean uninstall** - Remove via Windows Settings > Apps
- **User-level install** - No admin rights required

### Windows Portable Build

For users who prefer to carry their editor on a USB drive or avoid system modifications, we now offer `ferrite-portable-windows-x64.zip`:

- **True portable mode** - All settings stored in a `portable` folder next to the executable
- **No registry changes** - Completely self-contained
- **Perfect for USB drives** - Take your editor and settings anywhere

### Linux RPM Package

Fedora, RHEL, CentOS, Rocky Linux, and other RPM-based distributions now have native package support:

```bash
sudo dnf install ./ferrite-editor.x86_64.rpm
```

The package includes:
- Desktop entry for application menu integration
- Proper icon in all sizes
- Standard Linux paths for binary and resources

## Internationalization Improvements

This release includes significant i18n cleanup:

- **Comprehensive audit** - Found and replaced hardcoded strings throughout the codebase
- **Orphaned key removal** - Cleaned up ~200 unused translation keys
- **Locale file sync** - All locale files now share consistent structure with `en.yaml`

## Bug Fixes

### Ctrl+X Cutting Entire Document

Fixed a longstanding egui bug where pressing `Ctrl+X` with no text selection would cut the entire document content. Now it correctly does nothing when nothing is selected.

### Linux Window Drag Stuck Mouse

Fixed a critical bug on Linux where dragging the custom title bar caused the mouse to get "stuck" in drag mode. The root cause was egui's widget-level drag tracking desynchronizing with the window manager after `ViewportCommand::StartDrag`. The fix bypasses egui's drag state machine entirely, using raw input detection for immediate, reliable window drag initiation.

### Split Mode Cursor Position

Line operations (delete, move) now work correctly in Split view. Previously, the rendered pane could overwrite the cursor position, causing unexpected behavior. Thanks to [@abcd-ca](https://github.com/abcd-ca) for the fix!

### macOS Modifier Tooltips

Tooltips throughout the app now correctly show `Cmd+E` on macOS instead of hardcoded `Ctrl+E`. Platform-specific modifier detection ensures the correct key names appear everywhere.

### Semantic Minimap Highlight Accuracy

Fixed highlight positioning in the semantic minimap. Now uses byte offsets matching search behavior for correct highlight placement on all text.

## Upgrade Instructions

### Windows

**MSI Installer (Recommended):**
Download and run the `.msi` - it handles everything automatically.

**Portable:**
Download `ferrite-portable-windows-x64.zip`, extract, and run from anywhere.

### macOS

Download the new tarball and extract, replacing the old version. Your settings are preserved.

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

## What's Next (v0.2.6)

The next release continues our focus on:

- **Code signing** - Stop Windows Defender false positives
- **Large file performance** - Lazy row parsing for huge CSV files
- **Executable code blocks** - Run code snippets directly in preview
- **Content blocks/callouts** - GitHub-style `[!NOTE]`, `[!WARNING]` blocks
- **Vim mode** - Optional modal editing

## Thank You

Special thanks to:

- [@abcd-ca](https://github.com/abcd-ca) for the editor shortcuts, cursor fixes, and macOS improvements
- The Weblate translation community for Estonian and Norwegian Bokmål
- Everyone who reported the Ctrl+X and Linux drag bugs

---

[Download v0.2.5.2](/download) | [View full changelog](/changelog) | [Report issues](https://github.com/OlaProeis/ferrite/issues)
