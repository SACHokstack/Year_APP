# Implementation Plan - YearApp (Android)

I understand you want a **native Android app**, not a website. We will use your existing React/Vite foundation and wrap it with **Capacitor** to create a true Android project that can be built into an APK. This ensures high-quality fluid animations and native capability while leveraging modern UI tools.

## User Requirements
- **Platform**: Android Mobile App (not a website).
- **Core Feature**: 365 dots at the start of the year. Dots "reduce" (disappear/dim) as days pass.
- **Aesthetics**: Minimalist, Dark Mode, "Wallpaper" vibe (Lock screen aesthetic).
- **Reference**: Image showing a grid of dots, reduced count/progress.

## Technology Stack
- **Framework**: React (Vite) - allowing for fast, high-performance UI rendering.
- **Native Bridge**: **CapacitorJS** - converts the web build into a standard Android Studio project (`android` folder).
- **Styling**: CSS Modules / Vanilla CSS (Inter font, Dark theme).

## Proposed Features

### 1. Visual Engine (The Grid)
- **Algorithm**:
  - Calculate `DayOfYear` (1-365/366).
  - Calculate `RemainingDays`.
  - Render exactly `RemainingDays` as bright white/red dots.
  - Option to show "Past Days" as empty space or very faint placeholders (layout stability).
  - *Decision*: We will keep the layout stable (grid of 365 slots) but turn off (hide) the dots for past days, so looking at the grid shows the year "emptying out".

### 2. Time Logic
- Auto-detect current date.
- Real-time updates (check every minute? or just on load).

### 3. UI/UX
- **Header**: "Year Calendar" / "Progress".
- **Hero**: Large current time/date (Lock screen style).
- **Grid**: Centered, responsive to mobile width.
- **Footer**: Simple controls or status text ("150 days left").

## Verification Plan
1.  **Browser Preview**: We will simulate the mobile view in the browser first to perfect the "Dot Reduction" logic.
2.  **Android Setup**:
    -   Install `@capacitor/core`, `@capacitor/cli`, `@capacitor/android`.
    -   Initialize Capacitor.
    -   Running `npx cap add android` to generate the native project folder.
3.  **Build**:
    -   Explain how the user can open the `android` folder in Android Studio to hit "Run" or "Build APK".

## Directory Structure
```
/home/sach/lifeapp/
├── android/            # Generated Native Android Project
├── src/
│   ├── components/
│   │   └── YearGrid.jsx
│   ├── App.jsx
│   └── index.css
├── capacitor.config.json
└── package.json
```
