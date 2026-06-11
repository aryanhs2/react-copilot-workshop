# Challenge Guide
## React + GitHub Copilot — AI Challenge

> **You have 60 minutes. Build as many features as you can.**
> Start from Tier 1. Work upward. Each feature earns points.
> The team with the most points at 4:45 PM wins.

---

## Before You Start

1. Open your starter project: `npm run dev`
2. Open `src/App.jsx` in VS Code — this is where most of your work will happen
3. Keep your browser open at `http://localhost:5173` to see changes instantly
4. Open `COPILOT_CHEATSHEET.md` in a second VS Code tab for quick reference

### How to Use Copilot

Write a comment describing what you want, then start typing the code.
Copilot will suggest the rest. Press `Tab` to accept, `Esc` to reject.

```jsx
// Example — type this comment, then press Enter:
// Filter tasks to only show tasks where status is Pending
const pendingTasks = ...  // Copilot completes this line
```

**Golden Rule:** Read every suggestion before you accept it.
Copilot helps you write faster — you are still responsible for what goes in.

---

## 🥉 TIER 1 — FOUNDATIONS (10–15 points each)

These features build on top of what the starter already has.
Start here — they are the fastest wins.

---

### Feature 1 — Task Counter Improvements *(10 pts)*

**What to build:**
Improve the task counter in the Header to show more useful information.

**Expected behaviour:**
The header badge currently shows just a number.
Add a second line showing `X / Y tasks done` (e.g., `2 / 5 tasks done`).

**Where to edit:** `src/components/Header.jsx` and `src/App.jsx`

**Example output in the header badge:**
```
3          ← pending count (already there)
tasks remaining

2 / 5 done  ← NEW: show completed vs total
```

**Hint:**
You need to pass two new props to Header: `doneCount` and `totalCount`.
Calculate them in `App.jsx` the same way `pendingCount` is calculated.

**Copilot prompt to try:**
```
// Calculate doneCount as the number of tasks where status is 'Done'
```

**Points check:** Judges will look for the done/total count visible in the header.

---

### Feature 2 — Priority Badges *(10 pts)*

**What to build:**
Each task already has a `priority` field (`'high'`, `'medium'`, or `'low'`).
Create a `PriorityBadge` component that shows a coloured badge on each task card.

**Expected behaviour:**
- `high` priority → red badge labelled **High**
- `medium` priority → yellow/amber badge labelled **Medium**
- `low` priority → green badge labelled **Low**

**Where to create:** `src/components/PriorityBadge.jsx`
**Where to use:** `src/components/TaskCard.jsx`

**Example:**
```
[Submit assignment]   🔴 High    Pending   [Done] [Delete]
[Read chapter 3]      🟡 Medium  Done      [Undo] [Delete]
[Review notes]        🟢 Low     Pending   [Done] [Delete]
```

**Copilot prompt to try:**
```jsx
// Create a PriorityBadge component that receives a priority prop
// ('high', 'medium', 'low') and returns a small coloured span badge
// high = red background, medium = amber background, low = green background
```

**CSS hint — add to App.css:**
```css
.priority-high   { background: #fee2e2; color: #991b1b; }
.priority-medium { background: #fef3c7; color: #92400e; }
.priority-low    { background: #d1fae5; color: #065f46; }
```

**Points check:** Judges will check that all three colours work and the badge appears on every task.

---

### Feature 3 — Enter Key Support *(10 pts)*

**What to build:**
Currently, clicking the `+ Add Task` button is the only way to add a task.
Add support for pressing the **Enter** key inside the input field.

**Where to edit:** `src/components/AddTaskForm.jsx`

**Expected behaviour:**
- User types in the input
- Presses Enter
- Task is added (same as clicking `+ Add Task`)

**Hint:**
Add an `onKeyDown` event to the input element.
Check if `event.key === 'Enter'` and call the `onAdd` function.

**Copilot prompt to try:**
```jsx
// Handle keyDown on the input — if event.key is 'Enter', call onAdd
```

**Points check:** Judges will type a task and press Enter without clicking the button.

---

### Feature 4 — Status Colour Coding *(15 pts)*

**What to build:**
Change the left border colour of each task card based on the task's status.

**Expected behaviour:**
- `Pending` tasks → **orange/amber** left border (`#f59e0b`)
- `Done` tasks → **green** left border (`#10b981`)

**Where to edit:** `src/components/TaskCard.jsx` and `src/App.css`

**Current state:**
The task card has `border-left: 4px solid #6366f1` (purple) for all cards.

**Copilot prompt to try:**
```jsx
// Add a dynamic className to the task card's border
// based on whether task.status is 'Done' or 'Pending'
```

**CSS to add:**
```css
.task-card--pending { border-left-color: #f59e0b; }
.task-card--done    { border-left-color: #10b981; }
```

**Points check:** Judges will add a task (Pending = orange border), mark it Done (green border), undo it (back to orange).

---

## 🥈 TIER 2 — FEATURES (15–20 points each)

These features require new state and more logic. Work through Tier 1 first.

---

### Feature 5 — Search Bar *(15 pts)*

**What to build:**
Add a search input above the task list that filters tasks in real time.

**Expected behaviour:**
- User types in the search bar
- Task list shows only tasks whose titles contain the search text
- Search is **case-insensitive** (typing "submit" matches "Submit assignment")
- When search is cleared, all tasks show again
- The task counter still reflects the pending count of **visible** tasks (bonus challenge)

**Where to edit:** `src/App.jsx` and `src/App.css`

**Hint — the pattern:**
```jsx
// 1. Add state for the search term
const [searchTerm, setSearchTerm] = useState('');

// 2. Create a filtered version of tasks
const filteredTasks = tasks.filter(...);

// 3. Render filteredTasks instead of tasks
```

**Copilot prompt to try:**
```jsx
// Filter the tasks array to only include tasks where the title
// includes searchTerm (case-insensitive using toLowerCase)
// Store the result in filteredTasks
```

**Where to add the search input:**
In `App.jsx`, add a `<div className="search-bar">` between `<AddTaskForm>` and the task list.

**CSS to add:**
```css
.search-bar input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 15px;
  outline: none;
  font-family: inherit;
}
.search-bar input:focus { border-color: #6366f1; }
```

**Points check:** Judges will type a partial word and expect only matching tasks to appear.

---

### Feature 6 — Category Filter Tabs *(20 pts)*

**What to build:**
Add three filter tabs — **All**, **Pending**, and **Done** — that let users see only certain tasks.

**Expected behaviour:**
- Clicking **All** shows every task
- Clicking **Pending** shows only tasks with `status === 'Pending'`
- Clicking **Done** shows only tasks with `status === 'Done'`
- The active tab is visually highlighted

**Where to edit:** `src/App.jsx` and `src/App.css`

**Hint — the pattern:**
```jsx
// 1. New state for active filter
const [filter, setFilter] = useState('All'); // 'All' | 'Pending' | 'Done'

// 2. Derive which tasks to show based on filter
const filteredByTab = filter === 'All'
  ? tasks
  : tasks.filter(t => t.status === filter);

// 3. Render three buttons that call setFilter()
```

**Copilot prompt to try:**
```jsx
// Render three tab buttons: All, Pending, Done
// Each button calls setFilter with its label value
// The active tab gets a className of 'tab--active'
```

**CSS to add:**
```css
.filter-tabs {
  display: flex;
  gap: 8px;
  background: #ffffff;
  padding: 12px;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.tab-btn {
  flex: 1;
  padding: 8px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background: transparent;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
}
.tab--active {
  background: #6366f1;
  color: #ffffff;
  border-color: #6366f1;
}
```

**Points check:** Judges will click each tab and verify only the correct tasks are visible.

---

### Feature 7 — Edit Task Title Inline *(20 pts)*

**What to build:**
Allow users to edit a task's title directly inside the task card, without deleting and re-adding.

**Expected behaviour:**
- Each task card has an **Edit** button
- Clicking Edit replaces the title text with an `<input>` field pre-filled with the current title
- User edits the text and presses Enter or clicks **Save**
- The task title updates and the input returns to text
- Pressing **Cancel** discards changes

**Where to edit:** `src/components/TaskCard.jsx` and `src/App.jsx`

**Hint — two approaches:**

*Option A (simpler):* Add `editingId` state to `App.jsx`. When `editingId === task.id`, `TaskCard` shows an input instead of the title.

*Option B (self-contained):* Add local `isEditing` state inside `TaskCard.jsx` itself.

**Copilot prompt to try:**
```jsx
// Add an Edit button to TaskCard
// When clicked, show an input with the current title value
// On Save or Enter key, call an onEdit(id, newTitle) prop
// On Cancel, return to displaying the title as text
```

**You will need to add to App.jsx:**
```jsx
// Handle editing a task title
const handleEditTask = (id, newTitle) => {
  if (!newTitle.trim()) return;
  setTasks(tasks.map(t =>
    t.id === id ? { ...t, title: newTitle.trim() } : t
  ));
};
```

**Points check:** Judges will double-click a task, change the text, save, and verify the new title appears.

---

## 🥇 TIER 3 — ADVANCED (25 points each)

These features are more challenging but very achievable with good Copilot prompts.
If your Tier 1 and Tier 2 features are solid, go for these.

---

### Feature 8 — localStorage Persistence *(25 pts)*

**What to build:**
Save tasks to the browser's localStorage so they survive a page refresh.

**Expected behaviour:**
- Tasks are saved to localStorage every time the `tasks` state changes
- On page load, tasks are loaded from localStorage (if any exist)
- Refreshing the page does not lose any tasks
- Adding/deleting/toggling a task instantly saves to localStorage

**Where to edit:** `src/App.jsx`

**You need to know about `useEffect`:**
`useEffect` runs a function after the component renders.
It can be set to run only when specific values change.

```jsx
import { useState, useEffect } from 'react';
```

**Copilot prompt to try:**
```jsx
// Load tasks from localStorage on component mount
// The key is 'workshop-tasks'
// Use JSON.parse to convert the stored string back to an array
// Fall back to sampleTasks if nothing is stored
```

```jsx
// Save tasks to localStorage whenever the tasks array changes
// Use JSON.stringify to convert the array to a string
// The key is 'workshop-tasks'
```

**Full pattern (type this, let Copilot complete):**
```jsx
// Load from localStorage on mount
useEffect(() => {
  const stored = localStorage.getItem('workshop-tasks');
  if (stored) {
    setTasks(JSON.parse(stored));
  }
}, []); // empty array = runs once on mount

// Save to localStorage when tasks change
useEffect(() => {
  localStorage.setItem('workshop-tasks', JSON.stringify(tasks));
}, [tasks]); // runs every time tasks changes
```

**Points check:** Judges will add a task, refresh the page, and check the task is still there.

---

### Feature 9 — Dark Mode Toggle *(25 pts)*

**What to build:**
Add a button that switches the app between light and dark mode.

**Expected behaviour:**
- A toggle button appears in the Header (or top-right of the page)
- Clicking it switches between light mode (current) and dark mode
- Dark mode uses dark backgrounds and light text throughout
- The user's preference is remembered in localStorage

**Where to edit:** `src/App.jsx`, `src/App.css`, `src/components/Header.jsx`

**Hint — the pattern:**
```jsx
// 1. Theme state in App.jsx
const [darkMode, setDarkMode] = useState(false);

// 2. Apply theme class to root div
<div className={`app ${darkMode ? 'dark' : ''}`}>

// 3. Pass toggle to Header
<Header darkMode={darkMode} onToggleDark={() => setDarkMode(!darkMode)} />
```

**Copilot prompt to try:**
```jsx
// Add a dark mode toggle button to the Header
// It should show '🌙 Dark' in light mode and '☀️ Light' in dark mode
// Call the onToggleDark prop when clicked
```

**CSS to add (dark theme overrides):**
```css
.dark { background-color: #0f172a; color: #e2e8f0; }
.dark .task-card { background: #1e293b; color: #e2e8f0; }
.dark .task-title { color: #e2e8f0; }
.dark .add-task-form { background: #1e293b; }
.dark .add-task-input {
  background: #0f172a;
  color: #e2e8f0;
  border-color: #334155;
}
.dark .filter-tabs { background: #1e293b; }
.dark .tab-btn { border-color: #334155; color: #94a3b8; }
```

**Points check:** Judges will click the toggle, verify the app goes dark, refresh the page, and verify the preference is remembered.

---

### Feature 10 — Progress Bar *(25 pts)*

**What to build:**
Add a visual progress bar showing how many tasks have been completed.

**Expected behaviour:**
- Bar appears below the Header (or above the task list)
- Shows percentage of tasks that are Done: `(done / total) × 100`
- Bar fills from left to right as tasks are completed
- Shows text like `2 of 5 tasks complete (40%)`
- If all tasks are done: show a celebration message 🎉

**Where to create:** `src/components/ProgressBar.jsx`
**Where to use:** `src/App.jsx`

**Copilot prompt to try:**
```jsx
// Create a ProgressBar component that receives doneCount and totalCount props
// Calculate the percentage: (doneCount / totalCount) * 100
// Render a container div with a filled inner div whose width is the percentage
// Show text: 'X of Y tasks complete (Z%)'
// If percentage is 100, show a celebration emoji instead
```

**CSS to add:**
```css
.progress-bar-container {
  background: #ffffff;
  border-radius: 14px;
  padding: 16px 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.progress-bar-track {
  background: #e5e7eb;
  border-radius: 100px;
  height: 10px;
  overflow: hidden;
  margin: 10px 0;
}
.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  border-radius: 100px;
  transition: width 0.4s ease;
}
.progress-label {
  font-size: 13px;
  color: #6b7280;
  font-weight: 500;
}
```

**Points check:** Judges will mark tasks done and watch the bar fill up. They will verify the percentage text is correct.

---

## ⭐ BONUS — Creativity Award (+15 pts)

**Voted by the room at the showcase.**

This award goes to the team with the most creative addition — something not on the tier list.
Judges and attendees vote using the QR code shown during the showcase.

**Ideas to inspire you:**

| Idea | Difficulty |
|------|-----------|
| Due dates with overdue highlighting | Medium |
| Task categories / tags | Medium |
| Drag-and-drop reordering | Hard |
| Task completion animations | Easy |
| Confetti on 100% completion | Easy |
| Priority sorting (High tasks float to top) | Easy |
| Task count per priority level | Easy |
| Custom theme colour picker | Medium |
| Export tasks as text / copy to clipboard | Easy |
| Keyboard shortcut: `N` to focus the input | Easy |

**How to get Copilot's help on creative features:**
Be very specific in your comment. The more detail you give, the better Copilot's suggestion.

```jsx
// Add a confetti animation when all tasks are marked Done
// Show a full-width banner saying '🎉 All done! Great work!'
// The banner should only appear when tasks.length > 0 AND pendingCount === 0
```

---

## Scoring Summary

| Feature | Points |
|---------|--------|
| Task Counter Improvements | 10 |
| Priority Badges | 10 |
| Enter Key Support | 10 |
| Status Colour Coding | 15 |
| Search Bar | 15 |
| Category Filter Tabs | 20 |
| Edit Task Inline | 20 |
| localStorage Persistence | 25 |
| Dark Mode Toggle | 25 |
| Progress Bar | 25 |
| **Max from tiers** | **175** |
| Creativity Award | +15 |
| **Grand Total Possible** | **190** |

---

## Showcase Format (4:45 PM)

Each team gets **3 minutes:**
- **0:00 – 1:00** — Show your running app live. Demo your features.
- **1:00 – 2:00** — Show the code. Explain one feature you are proud of.
- **2:00 – 3:00** — Show one Copilot prompt that worked really well for you.

The audience votes for the Creativity Award via QR code.

---

## Emergency Help

**If you break your App.jsx and can't fix it:**
The instructor has a reset version. Ask for help — do not spend 20 minutes debugging.

**If Copilot stops suggesting:**
1. Check the Copilot icon (bottom right of VS Code) — it should be active
2. Try pressing `Esc` and rewriting your comment
3. Try pressing `Ctrl+I` to open Copilot inline chat and ask directly

**If your app crashes (blank white screen):**
1. Check the browser console (`F12` → Console tab) for red error messages
2. Read the error — it usually tells you exactly what is wrong
3. Press `Ctrl+Z` to undo your last change and try again

Good luck! You have got this. 🚀
