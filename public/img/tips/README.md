# Feature Tips Screenshots

Place annotated screenshots here for the "Hidden Gems" section on the Features page.

## Required Images

### 1. `recent-files.png`
**Shows:** The Recent Files & Folders popup menu
**Key elements to capture:**
- The filename in the bottom-left status bar (this is what users click)
- The popup menu showing recent files and recent folders
- Ideally show a few entries in each list

**Hotspot positions (adjust in component if needed):**
- Hotspot 1 (x: 15%, y: 95%): Points to the filename in status bar
- Hotspot 2 (x: 20%, y: 50%): Points to the popup menu

---

### 2. `csv-controls.png`
**Shows:** A CSV file open with the status bar controls visible
**Key elements to capture:**
- The CSV table view with data
- The status bar showing: Colors toggle, Headers toggle, Delimiter selector
- Ideally show the rainbow column colors enabled

**Hotspot positions (adjust in component if needed):**
- Hotspot 1 (x: 70%, y: 95%): Colors toggle
- Hotspot 2 (x: 78%, y: 95%): Headers toggle  
- Hotspot 3 (x: 86%, y: 95%): Delimiter selector

---

### 3. `outline-panel.png`
**Shows:** The Outline panel open on the right side
**Key elements to capture:**
- A markdown document with headings
- The Outline panel showing the document structure
- The Stats tab visible (or show both Outline and Stats)
- The toggle button in the toolbar

**Hotspot positions (adjust in component if needed):**
- Hotspot 1 (x: 92%, y: 8%): Outline toggle button
- Hotspot 2 (x: 88%, y: 40%): Heading entries in outline
- Hotspot 3 (x: 92%, y: 20%): Stats tab

---

### 4. `view-modes.png`
**Shows:** The view mode segmented control (R/S/V buttons)
**Key elements to capture:**
- The top toolbar with the R/S/V pill-shaped segmented control
- Show one mode selected (e.g., S for Split)
- The document area showing the selected mode

**Hotspot positions (adjust in component if needed):**
- Hotspot 1 (x: 50%, y: 6%): The R/S/V control

---

## Image Specifications

- **Format:** PNG (preferred) or WebP
- **Aspect ratio:** 16:9 recommended (matches the aspect-video class)
- **Resolution:** 1280x720 or higher recommended
- **Theme:** Dark theme preferred (matches website aesthetic)

## Adjusting Hotspot Positions

If the hotspot positions don't align with your screenshots, edit the coordinates in:
`components/FeatureTipsSection.vue`

Each hotspot has:
- `x`: percentage from left edge (0-100)
- `y`: percentage from top edge (0-100)

Example:
```typescript
{
  id: 'filename-click',
  x: 15,  // 15% from left
  y: 95,  // 95% from top (near bottom)
  label: '1',
  description: 'Click the filename...'
}
```
