# GitHub Copilot Cheat Sheet
## 30 Prompts for the React Task Manager Challenge

> **How to use this sheet:**
> Copy a prompt into your code as a comment.
> Press Enter. Wait 1–2 seconds for Copilot to suggest.
> Press Tab to accept or Esc to reject and try again.
>
> **The more specific your comment, the better the suggestion.**
> Vague comment → vague code. Specific comment → useful code.

---

## How Copilot Reads Your Code

Before suggesting anything, Copilot reads:
- The file you are currently in
- The function names and variable names it can see
- The imports at the top of your file
- The comment you just wrote

This means **context matters**. If you are in `App.jsx` and Copilot can see `const [tasks, setTasks] = useState(...)`, your prompts about tasks will be much more accurate.

---

## 🟢 BEGINNER PROMPTS

These work well for Tier 1 features.

---

### Prompt 1 — Filter tasks to show only Pending
```jsx
// Filter the tasks array to only include tasks where status is 'Pending'
// Store the result in pendingTasks
```
**Why it works:** Short, specific, names the variable. Copilot knows `tasks` is in scope.

---

### Prompt 2 — Count completed tasks
```jsx
// Calculate doneCount as the number of tasks where status equals 'Done'
```
**Why it works:** Clear goal, uses the exact string value ('Done') that matches your data.

---

### Prompt 3 — Handle Enter key on input
```jsx
// Handle keyDown event on the input
// If event.key is 'Enter', call the onAdd function
```
**Why it works:** Names the event type, specifies the key, names the function to call.

---

### Prompt 4 — Show a count of total vs done
```jsx
// Show '{doneCount} of {totalCount} tasks complete' as a paragraph
```
**Why it works:** Template literals in the comment help Copilot match your variable names.

---

### Prompt 5 — Add conditional className to a div
```jsx
// Add a className to the task card div
// 'task-card--pending' if status is 'Pending', 'task-card--done' if status is 'Done'
```
**Why it works:** Naming both class names gives Copilot the full picture.

---

### Prompt 6 — Create a simple badge component
```jsx
// PriorityBadge component
// Receives: priority prop — 'high', 'medium', or 'low'
// Returns: a <span> with className 'priority-{priority}' and the priority label
```
**Why it works:** Describes input, output, and the naming pattern for the class.

---

### Prompt 7 — Show/hide an empty state message
```jsx
// If tasks.length is 0, show a paragraph 'No tasks yet. Add one above!'
// Otherwise, render the task list
```
**Why it works:** Copilot understands the conditional pattern — it will write the ternary or if/else.

---

### Prompt 8 — Controlled input with state
```jsx
// Controlled text input
// value equals newTask state
// onChange calls setNewTask with the input's current value
```
**Why it works:** Names the exact state variable, describes the event handler pattern.

---

### Prompt 9 — Button with dynamic label
```jsx
// Button that shows 'Undo' if task.status is 'Done', otherwise shows 'Done'
```
**Why it works:** Exact condition, exact label text — Copilot writes the ternary for you.

---

### Prompt 10 — Display pluralized text
```jsx
// Show '{pendingCount} task remaining' when count is 1
// Show '{pendingCount} tasks remaining' when count is not 1
```
**Why it works:** Describes the pluralization rule explicitly.

---

## 🟡 INTERMEDIATE PROMPTS

These work well for Tier 2 features.

---

### Prompt 11 — Filter tasks by search term
```jsx
// Filter tasks where the title includes searchTerm
// Make the comparison case-insensitive using toLowerCase()
// Store the result in filteredTasks
```
**Why it works:** Specifies the method to use (`toLowerCase`) and the variable name.

---

### Prompt 12 — Category filter tabs
```jsx
// Render three buttons: 'All', 'Pending', 'Done'
// Each button calls setFilter with its own label
// The active button (where label equals filter state) gets className 'tab--active'
```
**Why it works:** Describes all three buttons, the handler, and the active state condition.

---

### Prompt 13 — Filter tasks by active tab
```jsx
// If filter is 'All', show all tasks
// If filter is 'Pending', show only tasks where status is 'Pending'
// If filter is 'Done', show only tasks where status is 'Done'
// Store the result in displayedTasks
```
**Why it works:** All three cases are described. Copilot will generate clean conditional logic.

---

### Prompt 14 — Toggle editing mode for a task
```jsx
// When the Edit button is clicked, set editingId to task.id
// When editingId equals task.id, show an input with the task title
// Otherwise show the title as text
```
**Why it works:** Describes both the trigger and the conditional render logic.

---

### Prompt 15 — Save an edited task title
```jsx
// handleEditTask function receives id and newTitle
// Updates the task in tasks array where id matches
// Sets the title to newTitle
// Uses setTasks and tasks.map
```
**Why it works:** Names the function, parameters, and the exact array method to use.

---

### Prompt 16 — Cancel editing on Escape key
```jsx
// If the user presses the Escape key while editing a task title
// Cancel the edit by setting editingId back to null
```
**Why it works:** Names the key, names the state, and describes the desired outcome.

---

### Prompt 17 — Combine search and filter
```jsx
// Apply both searchTerm and filter together
// First filter by status (based on filter state)
// Then filter by title (based on searchTerm)
// Chain the two filter calls
```
**Why it works:** Explains the order of operations — Copilot will chain the filters correctly.

---

### Prompt 18 — Show result count after filtering
```jsx
// Show a message like 'Showing 3 tasks' below the filter tabs
// Use the length of filteredTasks
```
**Why it works:** Names the source variable and shows the exact message format.

---

### Prompt 19 — Sort tasks by priority
```jsx
// Sort the tasks array so high priority tasks appear first, then medium, then low
// Create a priority order object: { high: 0, medium: 1, low: 2 }
// Use Array.sort with that order
```
**Why it works:** Gives Copilot the sorting strategy explicitly — it will implement it precisely.

---

### Prompt 20 — Highlight overdue tasks
```jsx
// If task.dueDate exists and is earlier than today's date
// Add the className 'task-card--overdue' to the task card
```
**Why it works:** Describes the condition and the class name. Copilot knows how to compare dates.

---

## 🔴 ADVANCED PROMPTS

These work well for Tier 3 features.

---

### Prompt 21 — Load from localStorage on mount
```jsx
// On component mount, load tasks from localStorage
// The key is 'workshop-tasks'
// Use JSON.parse to convert the string back to an array
// If nothing is stored, fall back to sampleTasks
```
**Why it works:** Names the key, the parsing method, and the fallback. Copilot writes the useEffect.

---

### Prompt 22 — Save to localStorage when tasks change
```jsx
// Whenever the tasks array changes, save it to localStorage
// The key is 'workshop-tasks'
// Use JSON.stringify to convert the array to a string
// Use useEffect with [tasks] as the dependency array
```
**Why it works:** All four details (key, method, trigger, dependency) are explicit.

---

### Prompt 23 — Dark mode class on root div
```jsx
// Add className 'dark' to the root app div when darkMode state is true
// Use a template literal or ternary to conditionally add the class
```
**Why it works:** Describes the mechanism, not just the goal.

---

### Prompt 24 — Dark mode toggle button
```jsx
// A button that shows '🌙 Dark' when darkMode is false
// And '☀️ Light' when darkMode is true
// Clicking it calls onToggleDark
```
**Why it works:** Both states and both labels are described — no ambiguity.

---

### Prompt 25 — Save dark mode preference to localStorage
```jsx
// Save the darkMode boolean to localStorage with key 'workshop-dark-mode'
// Load it on mount and use it to set the initial darkMode state
```
**Why it works:** Names the key, the type (boolean), and describes both save and load.

---

### Prompt 26 — Progress bar fill width
```jsx
// Calculate percentage as (doneCount / totalCount) * 100
// If totalCount is 0, percentage should be 0 (avoid dividing by zero)
// Set the width of the progress bar fill div to that percentage using inline style
```
**Why it works:** Handles the edge case (zero tasks), describes the inline style pattern.

---

### Prompt 27 — Celebration message at 100%
```jsx
// If all tasks are done (percentage === 100 and totalCount > 0)
// Show a paragraph '🎉 All tasks complete! Amazing work!'
// Otherwise show the normal progress percentage text
```
**Why it works:** Both conditions for the celebration case are specified.

---

### Prompt 28 — useEffect with multiple dependencies
```jsx
// Run a useEffect whenever tasks or filter changes
// Log to the console: 'Tasks or filter updated'
```
**Why it works:** Specifies both dependencies. Useful for debugging.

---

### Prompt 29 — Copy task list to clipboard
```jsx
// When the Export button is clicked
// Create a text string with each task title on its own line
// Copy it to the clipboard using navigator.clipboard.writeText
// Show an alert saying 'Tasks copied to clipboard!'
```
**Why it works:** Describes the Web API method and the feedback to give the user.

---

### Prompt 30 — Add a confetti animation on completion
```jsx
// When pendingCount reaches 0 and tasks.length is greater than 0
// Show a full-width banner div with className 'all-done-banner'
// Display the text '🎉 You finished everything! Great work today.'
// The banner should only appear while the condition is true
```
**Why it works:** Specifies the trigger condition, the element, the class, and the message.

---

## Quick Reference — Keyboard Shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Accept Copilot suggestion | `Tab` | `Tab` |
| Reject suggestion | `Esc` | `Esc` |
| See next suggestion | `Alt + ]` | `Option + ]` |
| See previous suggestion | `Alt + [` | `Option + [` |
| Open Copilot inline chat | `Ctrl + I` | `Cmd + I` |
| Open Copilot suggestions panel | `Ctrl + Enter` | `Cmd + Enter` |
| Undo last change | `Ctrl + Z` | `Cmd + Z` |
| Save file | `Ctrl + S` | `Cmd + S` |
| Format code | `Shift + Alt + F` | `Shift + Option + F` |
| Open terminal | `Ctrl + `` ` `` ` | `Cmd + `` ` `` ` |

---

## The Golden Rules

1. **Comment first, code second.** Always write what you want before you start typing code.
2. **Be specific.** "Add a button" → bad. "Add a button with className 'btn-delete' that calls onDelete(task.id) when clicked" → good.
3. **Name your variables.** Mention variable names from your file. Copilot will use them.
4. **Read every suggestion.** Tab accepts. Read it, understand it, then accept.
5. **You are the developer.** Copilot is the tool. If the suggestion is wrong, reject it and re-prompt.
