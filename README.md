# Task Manager App (React Native + Expo)

This is a simple Task Manager mobile app built with React Native and Expo.

## Overview

The app helps users track tasks with a clean and lightweight UI. It supports creating, completing, and deleting tasks with clear visual feedback.

## Features

- Add a new task from the input field.
- Mark a task as completed.
- Delete a task from the list.
- Show visual feedback when interacting with task actions.
- Handle keyboard overlap using KeyboardAvoidingView.

## Setup And Run Instructions

### Prerequisites

- Node.js 18+
- npm (or yarn)
- Expo Go on a physical device, or Android/iOS emulator

### Installation

```bash
cd my-app
npm install
```

### Run The App

```bash
npm start
```

Then choose one option:

- Scan the QR code with Expo Go on your phone
- Press a to open Android emulator
- Press i to open iOS simulator (macOS only)
- Press w to run in web mode

## Special Instructions

- If your phone cannot open the project from QR, ensure device and computer are on the same network.
- If icon rendering is delayed on first load in development mode, this is typically font-loading overhead and is usually less noticeable in production builds.
- The project is TypeScript-based. Main app files are in src/components, src/hooks, and src/types.

## Project Structure (Brief)

- App.tsx: Root layout and screen composition.
- src/hooks/useTasks.ts: Task state and actions (add, toggle, delete).
- src/components/TaskList.tsx: Task list rendering.
- src/components/TaskItem.tsx: Individual task row UI and interaction states.
- src/components/TaskInput.tsx: Task input area.
- src/components/AppHeader.tsx: Header section.
- src/components/EmptyState.tsx: Empty list placeholder.

## Third-Party Libraries Used

- expo: Development platform and runtime integration.
- react-native: Core native UI framework.
- expo-status-bar: Controls status bar style across platforms.
- @expo/vector-icons: Provides icon sets (for example, Feather and FontAwesome icons used in UI).

