# React + GitHub Copilot Workshop — Production Slide Script
**GDSC UTP | 3 Hours | 2 Speakers | Beginner Audience**
*Complete content rebuild — preserves existing visual identity*

---

> **HOW TO USE THIS DOCUMENT**
> Each slide entry contains everything needed for Canva production and live delivery.
> 🎤 = Speaker A (React Lead) | 🤖 = Speaker B (Copilot Lead) | 👥 = Both
> `[LAB]` = Students are actively coding. Never skip these. Never rush them.
> `[CHECKPOINT]` = Pause and verify the whole room before continuing.

---

## SECTION 0 — OPENING (Slides 1–4)
*Purpose: Set the stage, build excitement, eliminate anxiety, align expectations.*

---

### SLIDE 1 — Title / Hero

**Slide Objective:** First impression. Signal that this is a professional, hands-on experience.

**Slide Content:**
```
REACT + GITHUB COPILOT
WORKSHOP

Build Modern Web Apps with AI

GDSC UTP Workshop Series
[Date] | Learning Hub Block 1, UTP
2:00 PM – 5:00 PM
```

**Suggested Visual/Layout:**
Keep existing hero layout. Large title in neon/glow font. React atom icon + GitHub Copilot brain icon flanking the title. Dark circuit background. Bottom bar with event details.

**Speaker Notes (🤖 Speaker B opens):**
"Welcome everyone. Before we start — raise your hand if you've never written a line of React before. Perfect. That's exactly who this workshop is for. In three hours you're going to build a real, working application and have an AI coding assistant helping you the whole way. We're not here to give you a lecture — we're here to get you coding."

---

### SLIDE 2 — Meet Your Speakers

**Slide Objective:** Build credibility and human connection quickly. Keep it under 2 minutes.

**Slide Content:**
```
YOUR GUIDES TODAY

[Speaker A Name]          [Speaker B Name]
React Lead               Copilot Lead
[Photo]                  [Photo]
[Role/Year/Club]         [Role/Year/Club]

"We've been where you are. Today we share what actually works."
```

**Suggested Visual/Layout:**
Two-column card layout. Each card has: photo, name, title badge in neon green. Same hexagonal card style as existing deck.

**Speaker Notes (👥 Both):**
Each speaker: 20 seconds max. Name, year, what you build. No lengthy bios. End with: "Alright — let's see what you're working with today."

---

### SLIDE 3 — What You Need Right Now

**Slide Objective:** Get the room to a working technical baseline. This is the most critical slide in the first 20 minutes.

**Slide Content:**
```
SETUP CHECKLIST ✓
Get this done in the next 10 minutes

01  Node.js installed?
    node --version  →  should say v18 or higher

02  VS Code open?
    Download at code.visualstudio.com

03  GitHub Copilot extension installed?
    VS Code → Extensions → search "GitHub Copilot" → Install
    (Free with GitHub Student Pack)

04  Extract the workshop ZIP file:
    Open VS Code, click "Open Folder", and select the folder:
    Challenge/Starter Project
    
05  Open VS Code Terminal (Ctrl + `) and run:
    npm install
    npm run dev

✅  You should see a React app at localhost:5173

🆘  Stuck? Raise your hand — we're coming to you.
    OR use the backup: [CodeSandbox link here]
```

**Suggested Visual/Layout:**
Numbered checklist cards in the existing hexagonal/octagonal style. Each numbered item as its own card. A prominent "🆘 Stuck?" section at the bottom in a different accent color. QR code linking to CodeSandbox as fallback.

**Speaker Notes (👥 Both — room walkers):**
Speaker A stays at the front and reads through each step aloud, demonstrating on the projector in real time. Speaker B walks the room immediately. "If you hit an error you don't understand, don't try to fix it alone — wave at us right now." **Do not advance until at least 80% of the room has a running dev server.** Use the CodeSandbox fallback for anyone who cannot get Node working. Budget: 12–15 minutes.

**Student Activity:** [CHECKPOINT 0] — Everyone should have `localhost:5173` open showing the default Vite + React page.

---

### SLIDE 4 — The Workshop Promise

**Slide Objective:** Reveal the destination. Frame the entire 3 hours as a journey, not a lecture. Eliminate "what are we even doing here?" anxiety.

**Slide Content:**
```
TODAY'S MISSION

By 5:00 PM you will have:

🏗️  Built a Student Task Manager app from scratch

⚛️  Used React components, props, and state for real

🤖  Used GitHub Copilot as your AI coding partner

🏆  Competed in a live AI Challenge with a leaderboard

THIS IS WHAT YOU'RE BUILDING
[Screenshot of completed Task Manager app]
Features visible: task list, add button, delete, complete toggle, task counter

"Every concept we teach — you build it in the next 5 minutes."
```

**Suggested Visual/Layout:**
Left half: Four achievement cards with icons. Right half: A large, clean screenshot or mockup of the final Task Manager app with callout arrows labeling: "useState here", "Props here", "Component here". This visual is the north star for the whole workshop — make it iconic.

**Speaker Notes (🎤 Speaker A):**
"This is what you're building today. [Point to app screenshot] This Task Manager. You can add tasks, delete them, mark them complete, and later we're going to supercharge it with AI. Every piece of theory we cover today is going to immediately show up in this app. So keep this screenshot in your head — it's your destination."

---

### SLIDE 5 — Workshop Agenda / Learning Journey

**Slide Objective:** Show the structure. Students work better when they know the map.

**Slide Content:**
```
THE PLAN

PHASE 1 — REACT FOUNDATIONS        2:15 – 3:45 PM
  What is React? → JSX → Components → Props → State
  [Each concept → immediate mini-build]

─────────────────── 10 MIN BREAK ───────────────────

PHASE 2 — GITHUB COPILOT INTRO      3:55 – 4:15 PM
  Meet Copilot → Live demo & guided prompt exercises

PHASE 3 — AI CHALLENGE              4:15 – 4:45 PM
  Build new features with Copilot. Points. Leaderboard.

SHOWCASE + CLOSE                    4:45 – 5:00 PM

"Every 10 minutes: learn something → immediately use it."
```

**Suggested Visual/Layout:**
Timeline with three distinct phase blocks, color-coded. Phase 1 in teal/cyan, Phase 2 in green, Phase 3 in gold/yellow. Existing left-side timeline node style works perfectly here. Break clearly marked as a rest point.

**Speaker Notes (🎤 Speaker A):**
"Here's the deal — you will never go more than 10 minutes without typing code. This is not a lecture. Every concept you hear, you will immediately use. If you get stuck at any point, that's normal and expected — just raise your hand. Alright, let's go."

---

## SECTION 1 — REACT FOUNDATIONS (Slides 6–17)
*Philosophy: Teach ONE concept → show the code → students type it → see it work → connect to the app.*

---

### SLIDE 6 — What Is React? (The 60-Second Version)

**Slide Objective:** Give a fast, memorable answer to "why does React exist?" without drowning beginners in framework history.

**Slide Content:**
```
WHAT IS REACT?

Before React:                    With React:
"Update the page manually        "Describe what the page
 every time data changes"         SHOULD look like.
                                  React handles the rest."

[Two-panel diagram:
Left: DOM manipulation code (messy, lots of document.getElementById)
Right: React JSX (clean, readable)]

React is a JavaScript library that lets you build UIs out of
reusable pieces called COMPONENTS.

Used by: Instagram • Netflix • Airbnb • Atlassian • Shopify

"You're not learning a toy. You're learning what the industry uses."
```

**Suggested Visual/Layout:**
Two-panel split. Left panel has a "before" feel (cluttered, red-tinted). Right panel has a clean, neon green feel. Company logos at the bottom as small badge pills.

**Speaker Notes (🎤 Speaker A):**
"Before React existed, updating a webpage meant manually finding elements in the DOM and changing them one by one. It got messy fast. React flipped the model — instead of telling the browser *how* to update, you just describe *what* the UI should look like given the current data. React figures out what changed and updates the minimum necessary. That's the core idea. Let's see it."

---

### SLIDE 7 — The Mental Model: Components Are LEGO

**Slide Objective:** Give students a sticky mental model for components before they see any code. This analogy will be referenced all day.

**Slide Content:**
```
THE COMPONENT MENTAL MODEL

Think of your app like LEGO.

[Diagram:]
┌─────────────────────────────────┐
│            <App />              │   ← The whole set
│  ┌──────────────────────────┐   │
│  │       <Header />         │   │   ← A LEGO section
│  └──────────────────────────┘   │
│  ┌──────────────────────────┐   │
│  │      <TaskList />        │   │   ← Another section
│  │  ┌──────────┐            │   │
│  │  │<TaskCard>│ ×3         │   │   ← Repeating piece
│  │  └──────────┘            │   │
│  └──────────────────────────┘   │
└─────────────────────────────────┘

Each component:
  • Does ONE job
  • Can be reused
  • Knows nothing about other components (unless told)

"Today you will build every one of these components."
```

**Suggested Visual/Layout:**
A nested box diagram in the existing neon-on-dark style. Each component box is outlined in cyan or green. Arrows show nesting. This diagram should be clean and large — it's a reference point students will return to mentally throughout the workshop.

**Speaker Notes (🎤 Speaker A):**
"This is your app's architecture. Every box is a component — a reusable piece of UI. You're going to build all of these today. `App` is the container. `Header` shows the title. `TaskList` holds the tasks. `TaskCard` is one task. The same `TaskCard` component gets reused for every task in the list — that's the power of components. You build it once, use it many times."

---

### SLIDE 8 — JSX: HTML Inside JavaScript

**Slide Objective:** Demystify JSX. Students often fear JSX because it "looks wrong." Normalize it fast, then get them typing it.

**Slide Content:**
```
JSX — UI INSIDE JAVASCRIPT

JSX lets you write HTML-like syntax directly inside JavaScript.
It gets compiled to regular JavaScript before the browser sees it.

// This is JSX:
function Header() {
  return (
    <div className="header">
      <h1>My Task Manager</h1>
      <p>Stay organised, stay productive.</p>
    </div>
  );
}

// React turns this into regular JS behind the scenes.
// You never have to write the compiled version.

KEY RULES:
  ✅  Return ONE parent element (wrap in <div> or <>)
  ✅  Use className, not class
  ✅  Close every tag: <img />, <input />
  ✅  Use { } to insert JavaScript expressions
```

**Speaker Notes (🎤 Speaker A):**
"JSX looks a bit weird at first — HTML inside JavaScript? But think of it as a shorthand. Instead of writing `React.createElement('div', null, 'Hello')`, you write `<div>Hello</div>`. Same thing, much more readable. The browser never actually sees JSX — there's a build step that compiles it. You just write it."

**Student Activity [LAB 1 — 5 minutes]:**
```
🔨 YOUR TURN — LAB 1

In your src/App.jsx, delete everything and type this:

function App() {
  return (
    <div>
      <h1>My Task Manager</h1>
      <p>Built by: [your name]</p>
    </div>
  );
}

export default App;

Save it. Your browser should auto-update.
✅ Goal: See your name on the screen.
```

**Build Milestone:** App renders your own heading. First working React code.

**Expected Student Outcome:** A running page showing "My Task Manager" and their name. Students who see this for the first time often react with surprise — the live reload is immediately satisfying. Lean into this moment.

---

### SLIDE 9 — Components: Build Your First One

**Slide Objective:** Move from a single function to extracting a real component. Students build `Header` as a standalone component.

**Slide Content:**
```
BUILDING YOUR FIRST COMPONENT

A component is just a JavaScript function that returns JSX.

Step 1: Create a new file  →  src/components/Header.jsx

// src/components/Header.jsx
function Header() {
  return (
    <header>
      <h1>📋 My Task Manager</h1>
      <p>0 tasks remaining</p>
    </header>
  );
}

export default Header;


Step 2: Use it inside App.jsx

// src/App.jsx
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;

"<Header /> — that's your component being used."
```

**Speaker Notes (🎤 Speaker A):**
"Notice the function name is capitalised — `Header`, not `header`. This is how React knows it's a component rather than a plain HTML element. Lowercase `<header>` is an HTML tag. Capitalised `<Header />` is your React component. Create the file exactly as shown, then import it."

**Student Activity [LAB 2 — 7 minutes]:**
```
🔨 YOUR TURN — LAB 2

1. Create a new folder: src/components/
2. Create src/components/Header.jsx — type the code exactly as shown
3. Import and use <Header /> inside App.jsx
4. Save both files

✅ Goal: App renders your Header component.
🔑 Key moment: You are now using a component you built.
```

**Build Milestone:** First extracted component. `Header` lives in its own file. Students have created their `components/` folder.

**Expected Student Outcome:** Students' browsers show the header. They can see that changing text in `Header.jsx` updates the app without touching `App.jsx`. This teaches component isolation naturally.

---

### SLIDE 10 — TaskCard: The Repeating Component

**Slide Objective:** Build the `TaskCard` component. Introduce the idea that components represent repeated UI elements.

**Slide Content:**
```
THE TASK CARD COMPONENT

Every task in your app looks the same.
Instead of copy-pasting the same HTML 10 times,
you build ONE component and use it as many times as you need.

// src/components/TaskCard.jsx
function TaskCard() {
  return (
    <div className="task-card">
      <span className="task-title">Finish my assignment</span>
      <span className="task-status">Pending</span>
      <button>✓ Done</button>
      <button>🗑 Delete</button>
    </div>
  );
}

export default TaskCard;


// In App.jsx — use it three times:
import TaskCard from './components/TaskCard';

function App() {
  return (
    <div className="app">
      <Header />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
}

⚠️ Problem: Every card says the same thing.
   They all show "Finish my assignment".
   → Next: PROPS fix this.
```

**Speaker Notes (🎤 Speaker A):**
"Build the TaskCard and use it three times in App. Notice what happens — all three cards show the same text. That's because the data is hardcoded inside the component. This is the problem that Props are designed to solve. Build this first, then we'll fix it in two minutes."

**Student Activity [LAB 3 — 6 minutes]:**
```
🔨 YOUR TURN — LAB 3

1. Create src/components/TaskCard.jsx
2. Build the TaskCard as shown (hardcode the text for now)
3. Use <TaskCard /> three times in App.jsx

✅ Goal: Three identical cards visible in the browser.
🤔 Notice: All three show "Finish my assignment".
   Why is that a problem? What's the fix? → Next slide.
```

**Build Milestone:** Static task list renders. App has Header + 3 TaskCards. No dynamic data yet.

---

### SLIDE 11 — Props: Passing Data Into Components

**Slide Objective:** Introduce props as the mechanism for making components dynamic. This is the most concept-heavy moment — use the mailbox analogy to anchor it.

**Slide Content:**
```
REACT PROPS — DATA FLOWS DOWN

Props are how you pass data from a parent component
into a child component.

Think of props like a FUNCTION ARGUMENT for a UI component.

// Parent passes data in:
<TaskCard title="Finish my assignment" status="Pending" />
<TaskCard title="Read Chapter 4" status="Done" />
<TaskCard title="Submit project" status="Pending" />

// Child RECEIVES and USES the data:
function TaskCard({ title, status }) {
  return (
    <div className="task-card">
      <span className="task-title">{title}</span>
      <span className="task-status">{status}</span>
      <button>✓ Done</button>
      <button>🗑 Delete</button>
    </div>
  );
}

RULES:
  ✅  Props flow ONE WAY: parent → child
  ✅  Props are READ-ONLY inside the child
  ✅  Use { } to display prop values in JSX
  ❌  A child CANNOT modify its own props
```

**Suggested Visual/Layout:**
Top: the "before" (hardcoded) and "after" (props) comparison. Middle: a clear parent→child flow arrow diagram. Bottom: the rules in the existing card style. Syntax highlight `{title}` and `{status}` prominently — students need to see the `{}` usage clearly.

**Speaker Notes (🎤 Speaker A):**
"Here's the fix. Instead of hardcoding 'Finish my assignment' inside TaskCard, you pass it in as a prop when you use the component. Think of it like a function argument — `TaskCard` is the function, `title` and `status` are the arguments. The data flows one way: from the parent down to the child. The child cannot change its own props — that's an important rule. It receives and displays, that's it. Let's fix our app."

**Student Activity [LAB 4 — 8 minutes]:**
```
🔨 YOUR TURN — LAB 4

Part A: Update TaskCard to accept props
  function TaskCard({ title, status }) {
    ... use {title} and {status} in your JSX

Part B: Update App.jsx to pass different data
  <TaskCard title="Finish my assignment" status="Pending" />
  <TaskCard title="Read Chapter 4" status="Done" />
  <TaskCard title="Submit project" status="Pending" />

✅ Goal: Three cards, each showing DIFFERENT content.
🎉 This is Props working. Each card is the same component
   displaying different data.
```

**Build Milestone:** Props working. Three TaskCards showing different titles and statuses. Students can see data flowing from parent to child.

**Expected Student Outcome:** The "aha" moment when they change a `title` prop and see the card update. This is usually a visible reaction in the room — use it.

---

### SLIDE 12 — Props In Practice: The Full Picture

**Slide Objective:** Consolidate the Props mental model before moving to State. Quick visual summary, not new content.

**Slide Content:**
```
PROPS — THE FULL PICTURE

[Diagram:]

App (Parent)
│
├── passes title="Finish assignment" ──→  TaskCard #1
│                                         receives: { title, status }
├── passes title="Read Chapter 4" ────→  TaskCard #2
│                                         receives: { title, status }
└── passes title="Submit project" ────→  TaskCard #3
                                          receives: { title, status }

Same component. Different data. Different output.
This is the power of reusable components.

✅  You've learned: JSX  →  Components  →  Props
🎯  Next: State — what happens when data CHANGES

"So far your app is static. Let's make it alive."
```

**Suggested Visual/Layout:**
Clean parent→children diagram. Use the component tree style from slide 7 but now populated with the actual app components. A progress tracker at the bottom showing: JSX ✅ Components ✅ Props ✅ State (next).

**Speaker Notes (🎤 Speaker A):**
"Quick check-in — the concept covered. JSX lets you write UI in JavaScript. Components are reusable functions that return JSX. Props let parents pass data to children. Now the question is: what if the data *changes*? Like when a user adds a task or marks one complete? Props can't do that — props are read-only. That's where State comes in."

---

### SLIDE 13 — State: Your App's Memory

**Slide Objective:** Introduce `useState` with a clear mental model before any code. The re-render loop is the critical concept — spend extra time here.

**Slide Content:**
```
STATE — REACT'S MEMORY

State is data that can CHANGE over time.
When state changes, React automatically re-renders the UI.

THE RE-RENDER LOOP (memorise this):

  User Action
       ↓
  State Changes  (via setState function)
       ↓
  React re-runs your component function
       ↓
  New JSX is returned
       ↓
  React updates only what changed in the DOM
       ↓
  User sees the updated UI

HOW TO CREATE STATE:
  import { useState } from 'react';

  const [tasks, setTasks] = useState([]);
  //     ↑           ↑            ↑
  // current     function to    starting
  //  value      update it       value

"Never modify state directly. Always use the setter function."
```

**Suggested Visual/Layout:**
The re-render loop as a circular flow diagram in the existing neon style. Arrows clearly connecting each step. The `useState` destructuring explained with annotated callout arrows above each part. This is a concept slide — make the diagram large and clear.

**Speaker Notes (🎤 Speaker A):**
"This loop is everything. Burn it into your brain. You change state using `setTasks`. React sees the change, re-runs your component, gets fresh JSX, and updates the DOM. You never touch the DOM directly. You never write `document.getElementById`. You just update state and React handles the rest. The golden rule: NEVER modify state directly. Don't say `tasks.push(newTask)`. Always call `setTasks` and give it the new array."

---

### SLIDE 14 — useState: Your First Dynamic Feature

**Slide Objective:** Implement `useState` in the actual app. Students replace their three hardcoded `<TaskCard />` calls with a real state-driven list. This is the most significant coding moment so far.

**Slide Content:**
```
STATE IN YOUR TASK MANAGER

Step 1: Move tasks into state in App.jsx

import { useState } from 'react';
import Header from './components/Header';
import TaskCard from './components/TaskCard';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Finish my assignment', status: 'Pending' },
    { id: 2, title: 'Read Chapter 4', status: 'Done' },
    { id: 3, title: 'Submit project', status: 'Pending' },
  ]);

  return (
    <div className="app">
      <Header />
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          status={task.status}
        />
      ))}
    </div>
  );
}

export default App;

KEY CONCEPTS HERE:
  • useState([...]) — initial tasks as an array
  • tasks.map() — loop through array, return JSX for each
  • key={task.id} — required by React for list items
```

**Speaker Notes (🎤 Speaker A):**
"Instead of three hardcoded TaskCards, we now have an array in state and we're using `.map()` to loop over it and create a TaskCard for each one. When we add a task later, we just add it to the array and React automatically renders a new card. The `key` prop is required whenever you render a list — it helps React track which items changed. Always give each item a unique key."

**Student Activity [LAB 5 — 10 minutes]:**
```
🔨 YOUR TURN — LAB 5

Replace your hardcoded TaskCards with state-driven rendering:

1. Add: import { useState } from 'react'
2. Create the tasks state array with 3 objects
3. Replace <TaskCard /> calls with tasks.map()
4. Make sure each TaskCard gets key, title, status props

✅ Goal: Same 3 cards visible, but now driven by state.
🔑 Test: Add a 4th task object to the array.
   A 4th card should appear automatically — no extra JSX needed.
```

**Build Milestone:** Dynamic rendering with `useState`. Students can add to the array and see new cards appear. This is the first moment the app truly feels "alive."

**Expected Student Outcome:** Students who add a 4th object to the array and watch a 4th card appear instantly get the state/render loop viscerally. This is the most important "aha" of the whole workshop.

---

### SLIDE 15 — Add Task: Controlled Inputs + State Update

**Slide Objective:** Wire up the Add Task feature. Students build a controlled input and write their first state-update function.

**Slide Content:**
```
ADDING TASKS — CONTROLLED INPUTS

Step 1: State for the input field

const [newTask, setNewTask] = useState('');

Step 2: The add function

function handleAddTask() {
  if (newTask.trim() === '') return;  // don't add empty tasks
  
  setTasks([
    ...tasks,                          // keep existing tasks
    {
      id: Date.now(),                  // simple unique id
      title: newTask,
      status: 'Pending',
    }
  ]);
  
  setNewTask('');                      // clear the input
}

Step 3: The input + button JSX (add below <Header />)

<div className="add-task">
  <input
    value={newTask}
    onChange={(e) => setNewTask(e.target.value)}
    placeholder="Add a new task..."
  />
  <button onClick={handleAddTask}>+ Add Task</button>
</div>

WHAT JUST HAPPENED?
  • value={newTask} — input is controlled by state
  • onChange — every keystroke updates state
  • onClick — calls handleAddTask when button is clicked
  • ...tasks — spread operator keeps existing tasks
```

**Speaker Notes (🎤 Speaker A):**
"Two pieces of state now: `tasks` (the list) and `newTask` (what the user is typing). The input is 'controlled' — its value is always equal to the `newTask` state. When you type, `onChange` fires, updates `newTask` state, React re-renders, and the input shows the latest value. When you hit Add, we create a new task object and use the spread operator to add it to the existing array. Notice we never mutate the array directly — we always create a NEW array with the new item added."

**Student Activity [LAB 6 — 10 minutes]:**
```
🔨 YOUR TURN — LAB 6

Add the "Add Task" feature to your app:

1. Add newTask state (useState(''))
2. Write the handleAddTask function
3. Add the input + button JSX below your Header
4. Test: Type a task name and click Add

✅ Goal: New tasks appear in the list when you click Add.
🔑 Stretch: What happens if you press Enter instead of clicking?
   (Hint: look up onKeyDown)
```

**Build Milestone:** Add Task working. Users can type and submit new tasks. The core CRUD operation is live.

---

### SLIDE 16 — Delete Task: Filtering State

**Slide Objective:** Implement delete by filtering state. Introduces the concept of immutable state updates.

**Slide Content:**
```
DELETING TASKS — FILTER THE ARRAY

The delete function — add to App.jsx:

function handleDeleteTask(id) {
  setTasks(tasks.filter((task) => task.id !== id));
}

Explanation:
  tasks.filter() creates a NEW array
  containing only tasks where id ≠ the deleted id
  The original array is untouched
  setTasks triggers a re-render with the new array


Pass the function down as a prop:

{tasks.map((task) => (
  <TaskCard
    key={task.id}
    title={task.title}
    status={task.status}
    onDelete={() => handleDeleteTask(task.id)}
  />
))}


Use it in TaskCard.jsx:

function TaskCard({ title, status, onDelete }) {
  return (
    <div className="task-card">
      <span>{title}</span>
      <span>{status}</span>
      <button onClick={onDelete}>🗑 Delete</button>
    </div>
  );
}

⚠️ KEY CONCEPT: Functions can be passed as props too.
   onDelete is a function — the child calls it,
   but the actual logic lives in the parent (App).
```

**Speaker Notes (🎤 Speaker A):**
"Notice the pattern: the `handleDeleteTask` function lives in App, because that's where the `tasks` state lives. But the delete button is in `TaskCard`. So we pass the function down as a prop — `onDelete`. When the button is clicked, it calls `onDelete`, which calls `handleDeleteTask` in the parent, which calls `setTasks` with the filtered array. Data down, events up — this is a fundamental React pattern."

**Student Activity [LAB 7 — 8 minutes]:**
```
🔨 YOUR TURN — LAB 7

1. Write handleDeleteTask in App.jsx
2. Pass onDelete={...} as a prop to each TaskCard
3. Use onDelete in the TaskCard delete button

✅ Goal: Clicking Delete removes that specific task.
🔑 Notice: You never touched the DOM.
   You just updated state and React did the rest.
```

**Build Milestone:** Delete working. Core Task Manager is fully functional: add, display, delete.
### SLIDE 17 — Mark Complete + Task Counter: State in Action

**Slide Objective:** Add the "mark complete" toggle and a live task counter. Reinforces state updates and derived data.

**Slide Content:**
```
MARK COMPLETE + TASK COUNTER

Toggle complete — add to App.jsx:

function handleToggleComplete(id) {
  setTasks(tasks.map((task) =>
    task.id === id
      ? { ...task, status: task.status === 'Done' ? 'Pending' : 'Done' }
      : task
  ));
}

Pass it down to TaskCard:
<TaskCard
  ...
  onToggle={() => handleToggleComplete(task.id)}
/>

Use in TaskCard:
<button onClick={onToggle}>
  {status === 'Done' ? '↩ Undo' : '✓ Done'}
</button>


DERIVED DATA — The task counter (add to Header or App):

const pendingCount = tasks.filter(t => t.status === 'Pending').length;

// Pass to Header:
<Header pendingCount={pendingCount} />

// In Header.jsx:
function Header({ pendingCount }) {
  return (
    <header>
      <h1>📋 My Task Manager</h1>
      <p>{pendingCount} tasks remaining</p>
    </header>
  );
}

✨ The counter updates automatically when tasks change.
   No extra code needed — derived from existing state.
```

**Speaker Notes (🎤 Speaker A):**
"Two things here. First, toggle: we map over tasks, and when we find the matching ID, we flip its status using a ternary. `...task` is the spread operator — it copies all other properties and we just change `status`. Second: the counter. Notice we don't store `pendingCount` in its own `useState`. We *derive* it from the existing `tasks` state using filter. Derived data is always better than duplicated state — it's always in sync automatically."

**Student Activity [LAB 8 — 8 minutes]:**
```
🔨 YOUR TURN — LAB 8

1. Add handleToggleComplete to App.jsx
2. Pass onToggle prop to TaskCard
3. Update TaskCard button to use onToggle
4. Add pendingCount derived from tasks state
5. Pass pendingCount to Header and display it

✅ Goal: Full working Task Manager.
   ✓ Add tasks  ✓ Delete tasks  ✓ Toggle complete  ✓ Counter

🎉 CHECKPOINT: You have built a working React application.
```

**Build Milestone:** COMPLETE TASK MANAGER. All features working. Students have a functional React app with state management.

---

### SLIDE 18 — CHECKPOINT: React Fundamentals Complete

**Slide Objective:** Celebrate the milestone. Consolidate what was learned. Create a clear pause before introducing Copilot.

**Slide Content:**
```
⚛️ CHECKPOINT — PHASE 1 COMPLETE

In the last 50 minutes you:

✅  Built a Header component
✅  Built a TaskCard component
✅  Passed data with Props
✅  Used useState to manage task data
✅  Wired up Add, Delete, and Toggle
✅  Calculated derived state
✅  Let React handle all the DOM updates

YOUR COMPONENT TREE RIGHT NOW:
App (state: tasks, newTask)
├── Header (props: pendingCount)
├── [input + button] (controlled by newTask state)
└── TaskCard × N (props: title, status, onDelete, onToggle)

THE CONCEPTS BEHIND WHAT YOU BUILT:
  JSX → wrote your UI in JavaScript
  Components → built reusable pieces
  Props → passed data and functions down
  State → made data reactive and dynamic

────────── 10 MINUTE BREAK ──────────
"Stretch, breathe, get water.
 When you return: your AI coding partner joins the workshop."
```

**Suggested Visual/Layout:**
Celebration energy — use the existing trophy/achievement visual style. Left: the completed component tree (now with real component names from the app). Right: the four concepts as completed achievement badges. Break announcement in a prominent accent color. Make this feel like a level-up screen.

**Speaker Notes (👥 Both):**
"Genuinely — well done. What you just built in 50 minutes took professional developers weeks to learn when they were starting out. You have a working React application. Take your 10 minutes. When you come back, we're going to show you how to build this kind of code 2x faster using an AI assistant."

**[10-MINUTE BREAK — DO NOT SKIP]**

---

## SECTION 2 — GITHUB COPILOT (Slides 19–23)
*Philosophy: Copilot is introduced as a tool that accelerates the skills you just learned, not a shortcut that replaces them.*

---

### SLIDE 19 — Meet GitHub Copilot

**Slide Objective:** Frame Copilot correctly from the start. It's a pair programmer, not a magic button. Students who just built real React code are in the best position to appreciate this.

**Slide Content:**
```
GITHUB COPILOT — YOUR AI PAIR PROGRAMMER

What it is:
  An AI that watches your code in real-time
  and suggests what comes next.

What it's NOT:
  • Not a replacement for understanding code
  • Not always right — you are the developer
  • Not magic — it works because you give it context

How it knows what to suggest:
  1. The file you're in
  2. The comment you wrote above
  3. The function name you started typing
  4. Other files in your project

THE WORKFLOW:
  You write context  →  Copilot suggests  →  You decide

  Tab = Accept
  Esc = Reject
  Alt+] = See next suggestion
  Ctrl+I = Open Copilot Chat

"You spent 50 minutes learning React.
 Now watch how Copilot uses that knowledge with you."
```

**Suggested Visual/Layout:**
Left: the "pair programmer" concept visualised — two people at a desk, one typing, one suggesting (or: developer + AI brain graphic). Right: the workflow diagram as a clean three-step loop. Keyboard shortcuts in code-pill style.

**Speaker Notes (🤖 Speaker B):**
"Here's the right way to think about Copilot: you just spent 50 minutes learning how state works, how props flow, how to structure components. Copilot knows all of that too — actually, it's read millions of React codebases. So when you're working, it can suggest patterns you'd spend 5 minutes googling. But you have to steer it. Copilot is the co-pilot, not the pilot. You're still flying the plane."

---

### SLIDE 20 — Copilot Live Demo: React in Action

**Slide Objective:** Live demonstration of Copilot suggesting real React code. Students watch, then immediately try it themselves. This is the highest-impact moment of the Copilot section.

**Slide Content:**
```
COPILOT LIVE DEMO 🤖

Watch: Copilot completes a React component from a comment

DEMO 1 — Component generation
Step: Type this comment in a new file, then press Enter

// A React component that shows a task priority badge
// It receives a priority prop: 'high', 'medium', or 'low'
// High = red, Medium = yellow, Low = green

// Start typing: function Priority
// Watch Copilot suggest the rest...


DEMO 2 — Function completion
Step: Inside App.jsx, type this comment

// Sort tasks by status: Pending tasks first, Done tasks last

// Type: function sortTasks
// Accept Copilot's suggestion. Read it. Does it make sense?


DEMO 3 — CSS generation
// Open App.css, type:
/* Styles for a task card with a left border indicating status */
/* Pending = orange border, Done = green border */


KEY OBSERVATION:
The better your comment, the better Copilot's suggestion.
Vague comment → vague code.
Specific comment → useful code.
```

**Speaker Notes (🤖 Speaker B — LIVE DEMO):**
Run these demos live on the projector. Do NOT pre-prepare the code — the value is in watching Copilot suggest in real time. For Demo 1: type the comment slowly, hit Enter, pause, watch the ghost suggestion appear. Tab to accept. Narrate: "See how it read my comment and generated the entire function? Let me check if this is actually correct... [read through it]... yes, the logic makes sense." For Demo 2: intentionally accept a suggestion and then find a small mistake in it. Say: "See this? It got 90% right but I need to fix this line. That's the workflow — Copilot drafts, you review and refine."

**Student Activity [LAB 9 — 5 minutes]:**
```
🔨 YOUR TURN — LAB 9: First Copilot interaction

In your task-manager project, try this:

1. Open src/components/TaskCard.jsx
2. Above the function, type this comment:
   // Add a priority level badge showing HIGH, MEDIUM or LOW
   // Use conditional rendering based on a priority prop
3. Hit Enter and start typing: function
4. See what Copilot suggests. Tab to accept, or Esc to reject.

✅ Goal: Get at least one Copilot suggestion and decide whether to accept it.
🎯 Notice: What context did Copilot use to make that suggestion?
```

---

### SLIDE 21 — Prompt Engineering for Developers

**Slide Objective:** Teach students to write good prompts. The quality of Copilot output is directly proportional to the quality of the comment.

**Slide Content:**
```
WRITING GOOD PROMPTS FOR COPILOT

Copilot reads your comment as instruction.
Be specific. Be technical. Mention the context.

❌  WEAK PROMPTS:
  // add filter
  // make button work
  // fix this

✅  STRONG PROMPTS:
  // Filter tasks array to show only items where status === 'Pending'
  // Store filtered result in a new variable called pendingTasks

  // Handle the Enter key press on the input field
  // Should call handleAddTask when key === 'Enter'

  // Add localStorage persistence for the tasks array
  // Save tasks on every update, load them on component mount

PROMPT TEMPLATE:
  // [What to build]
  // [Parameters/inputs it receives]
  // [Expected output or behaviour]
  // [Any constraints: must use X, should handle Y edge case]

"A developer who can prompt well gets 10 hours of work done in 3."
```

**Suggested Visual/Layout:**
Two-column comparison: weak vs. strong prompts. Each weak prompt has a ❌ and a note on why it's weak. Each strong prompt has a ✅ and an annotation explaining what makes it effective. The Prompt Template at the bottom in a highlighted code box.

**Speaker Notes (🤖 Speaker B):**
"The single biggest skill with any AI coding tool isn't learning the shortcuts — it's learning to give good instructions. The more specific you are about what you need, what parameters are involved, and what the expected behaviour is, the more useful the suggestion will be. Think of it like writing a spec for a junior developer — the better the spec, the better the code."

---

### SLIDE 22 — Copilot + React: Enhancing Your App

**Slide Objective:** Students use Copilot to add a real feature to their existing Task Manager. This bridges the React knowledge from Phase 1 with the Copilot skills from Phase 2.

**Slide Content:**
```
COPILOT-ASSISTED ENHANCEMENT

Your Task Manager is working.
Now use Copilot to add something new — together.

GUIDED ENHANCEMENT: Add a task counter summary bar

Step 1: In App.jsx, above your JSX, type this comment:
  // Calculate summary stats from tasks state:
  // total tasks, pending count, completed count

Step 2: Let Copilot suggest the derived values.
  Review the suggestion. Does it use filter() correctly?
  Accept if correct. Fix if wrong.

Step 3: Type this comment in your JSX return:
  {/* Summary bar showing total, pending, and completed counts */}

Step 4: Let Copilot generate the JSX.
  You should get something like:
  <div className="summary">
    <span>Total: {totalCount}</span>
    <span>Pending: {pendingCount}</span>
    <span>Done: {completedCount}</span>
  </div>

🔑 Notice: Copilot knew about your tasks state because it
   read your existing code. Context matters.

✅ Goal: Summary bar visible below Header showing live counts.
```

**Speaker Notes (🤖 Speaker B):**
"This is the Copilot workflow for real-world development. You're not asking it to build the whole app from scratch. You're adding features incrementally, using comments to guide it, and reviewing its suggestions. Notice how it referenced your existing `tasks` state — it read your code before suggesting. The more good code you have in your file, the better Copilot's suggestions become."

**Student Activity [LAB 10 — 8 minutes]:**
```
🔨 YOUR TURN — LAB 10

Use Copilot to add the summary bar to your app.
Follow the steps on this slide.

✅ Minimum: Summary bar showing at least one count.
🌟 Stretch: Style it with inline styles or CSS classes.
   (Try prompting Copilot for CSS too)

[CHECKPOINT 2]: Everyone should now have a Copilot-assisted
feature in their Task Manager.
```

---

### SLIDE 23 — Copilot: What It Can and Can't Do

**Slide Objective:** Set honest expectations. Students need to understand Copilot's limitations before the challenge, so they don't become over-reliant or frustrated.

**Slide Content:**
```
COPILOT — HONEST EXPECTATIONS

✅  Copilot IS great for:
  • Boilerplate and repetitive patterns
  • Generating event handlers from clear comments
  • Writing CSS from descriptive comments
  • Completing functions you've started
  • Suggesting array methods (map, filter, reduce)
  • Scaffolding new components quickly

⚠️  Copilot STRUGGLES with:
  • Understanding your specific app logic if it's not in context
  • Complex state management across many components
  • Always knowing which pattern is best for your use case
  • Catching its own logical errors

❌  Copilot CANNOT:
  • Replace your understanding of React
  • Debug runtime errors on its own
  • Know what you want if your comment is vague
  • Guarantee its code is bug-free

THE GOLDEN RULE:
  Read every suggestion before you accept it.
  You are responsible for the code in your project,
  regardless of who (or what) wrote it.
```

**Suggested Visual/Layout:**
Three-row table: green row (IS great for), amber row (STRUGGLES with), red row (CANNOT). The Golden Rule at the bottom in a gold/amber callout box. Keep it clean and readable.

**Speaker Notes (🤖 Speaker B):**
"I want to be straight with you before the challenge. Copilot is a tool, and like any tool it has limitations. The biggest mistake beginners make is accepting every suggestion without reading it. Sometimes Copilot will generate code that looks right but has a subtle bug. You'll only catch it if you read it. Your React knowledge from Phase 1 is exactly what lets you evaluate whether Copilot's suggestion is good or not. That's why we taught React first."

---

## SECTION 3 — AI CHALLENGE (Slides 24–28)
*Philosophy: High energy, self-directed, peer-competitive, creatively open. Speakers circulate — not presenting.*

---

### SLIDE 24 — Challenge Brief: The Mission

**Slide Objective:** Launch the challenge with clarity, excitement, and energy. Students need to know exactly what they're building and how points are earned before they start.

**Slide Content:**
```
⚡ COPILOT AI CHALLENGE ⚡

YOUR MISSION:
  Enhance your Task Manager using GitHub Copilot.
  Build as many features as you can in 30 minutes.
  Most points wins.

THE BASELINE (everyone starts here):
  Your working Task Manager from Phase 1 + 2.
  If you need a fresh start or yours isn't working:
  Open a clean copy of the "Challenge/Starter Project"
  folder from your extracted ZIP package!

WHAT YOU'RE JUDGED ON:
  ⚡  Points scored (feature completion)
  💡  Most creative use of Copilot
  🎤  Showcase presentation (3 teams present at 4:45)

TOOLS AVAILABLE:
  ✅  GitHub Copilot  ✅  Google  ✅  Your teammates
  ✅  The speakers (raise your hand)
  ❌  Copy-paste from ChatGPT without understanding it

"The best hack isn't the most code. It's the most learning."
```

**Suggested Visual/Layout:**
High-energy slide. Mission header in large neon type. A graphic showing the folder hierarchy or ZIP extraction. Rules in clear numbered/bulleted format. A clock graphic reinforcing the 30-minute window.

**Speaker Notes (👥 Both):**
"This is it. 30 minutes. You have a working app. Now you're going to make it yours. If your app is currently stuck or not working, don't worry — just open a fresh copy of the 'Challenge/Starter Project' folder from the ZIP file you downloaded earlier. It has the complete, working baseline for the challenge ready to go. Use Copilot as your partner — write comments, generate code, review it, fix it. We're walking around the room. Ask us anything. Go."

---

### SLIDE 25 — Challenge Feature Menu + Point System

**Slide Objective:** Give students a clear, tiered menu of features to build. Structured enough to guide them; open enough to allow creativity.

**Slide Content:**
```
CHALLENGE FEATURES + POINTS

TIER 1 — FOUNDATIONS (10–15 pts each)
  🔢  Task counter display (10 pts)
      Show total / pending / completed in a summary bar

  🏷️  Priority levels (10 pts)
      Add High/Medium/Low priority to tasks with colour badges

  ⌨️  Enter key support (10 pts)
      Submit new task on Enter key press (onKeyDown)

  🎨  Status colour coding (15 pts)
      Different visual style for Pending vs Done cards


TIER 2 — FEATURES (15–20 pts each)
  🔍  Search/filter bar (15 pts)
      Filter visible tasks by title as user types

  📂  Category tabs (20 pts)
      Filter by All / Pending / Done — one click each

  ✏️  Edit task title (20 pts)
      Click a task title to edit it inline


TIER 3 — ADVANCED (25 pts each)
  💾  LocalStorage persistence (25 pts)
      Tasks survive page refresh
      (Hint: you'll need useEffect — ask Copilot!)

  🌙  Dark/light mode toggle (25 pts)
      Toggle between themes, remember preference in state

  📊  Progress bar (25 pts)
      Visual progress bar showing % complete


BONUS — CREATIVITY AWARD
  🏆  Most creative feature: +15 pts
      (Judged by the room, not the speakers)
```

**Suggested Visual/Layout:**
Three-tier card layout — Tier 1 cards in teal, Tier 2 in green, Tier 3 in gold. Each card shows the feature name, point value, and a one-line hint. Bonus award card in a special accent. This is a reference slide — keep it on screen throughout the challenge if possible.

**Speaker Notes (👥 Both — keep brief, students need to start):**
"Quick walk-through. Tier 1 features you can absolutely do with what you learned today. Tier 2 needs a bit more thinking — use Copilot heavily for these. Tier 3 introduces concepts just beyond today's scope — challenge yourselves. LocalStorage in particular: Copilot can guide you through `useEffect`, but ask us if you get stuck. Any questions before the clock starts? Great. Go."

---

### SLIDE 26 — Copilot Prompt Starter Pack

**Slide Objective:** Give students ready-to-use prompts so nobody sits frozen staring at a blank comment line. This slide removes the activation energy barrier.

**Slide Content:**
```
🤖 PROMPT STARTER PACK

Copy, paste, modify — let Copilot do the heavy lifting.

FOR SEARCH/FILTER:
// Filter the tasks array to only show tasks where
// the title includes the searchTerm string (case insensitive)
// Store result in filteredTasks, use it in the JSX map

FOR PRIORITY BADGES:
// A PriorityBadge component that receives a priority prop
// 'high' = red background, 'medium' = yellow, 'low' = green
// Returns a small coloured span with the priority label

FOR LOCALSTORAGE:
// Load tasks from localStorage on component mount
// Save tasks to localStorage whenever the tasks array changes
// Use JSON.parse and JSON.stringify for serialisation

FOR DARK MODE:
// A theme toggle button that switches between 'light' and 'dark'
// Store theme in useState, apply as className to the root div
// CSS: body.dark { background: #1a1a2e; color: #e0e0e0; }

FOR ENTER KEY:
// Handle keyDown event on the task input
// If event.key === 'Enter', call handleAddTask

FOR PROGRESS BAR:
// Calculate percentage of tasks that are 'Done'
// Return a div with width set to that percentage
// Use inline styles: style={{ width: `${percentage}%` }}
```

**Speaker Notes (👥 Both — this slide stays up during the challenge):**
"These are starting points — not final answers. Copilot might generate different code than what you'd expect. That's fine. Read the suggestion, understand it, and modify it to fit your app. These prompts will get you unstuck. Now go build."

---

### SLIDE 27 — Challenge Underway (Timer Slide)

**Slide Objective:** Keep energy up during the challenge. This slide stays visible while students code.

**Slide Content:**
```
⚡ CHALLENGE IN PROGRESS ⚡

[LARGE COUNTDOWN TIMER]
30:00

TIPS WHILE YOU BUILD:
  → Comments first, code second
  → Read every Copilot suggestion before Tab
  → Stuck? Ask us — we're walking around
  → Got one feature working? Go for the next tier
  → Test in the browser after every change

POINTS REFERENCE (quick):
  Tier 1: 10-15 pts
  Tier 2: 15-20 pts
  Tier 3: 25 pts
  Creativity bonus: +15 pts

SPEAKERS: Walking the room. Ask us anything.

🔗 Starter repo (if you need it): [URL / QR CODE]
```

**Speaker Notes (👥 Both — walking the room):**
Do not stand at the front during the challenge. Walk every row. Look at screens. Ask "What are you working on?" and "Want me to look at that error?" Specifically identify and assist: students who aren't typing (intervention needed), students who are copy-pasting without reading (gently challenge them — "Can you walk me through what this code does?"), and students who finish a feature and don't know what to do next (point them at the next tier). At 15 minutes remaining, verbally announce it. At 5 minutes, tell everyone to stop adding new features and make sure their app runs.

---

### SLIDE 28 — Showcase: Demo Time

**Slide Objective:** Create a mini demo day atmosphere. Celebrate what was built. Make presenters feel like developers shipping a product.

**Slide Content:**
```
🚀 SHOWCASE TIME

3 teams. 3 minutes each.

PRESENTATION STRUCTURE:
  ⏱ 00:00–01:00  Show your running app live.
                  "Here's what it does."
                  Demo the features. Click the buttons.

  ⏱ 01:00–02:00  Show the code.
                  "Here's how I built [the most interesting feature]."
                  Open the file. Show the key function.

  ⏱ 02:00–03:00  Share your Copilot prompts.
                  "Here's the prompt that worked best for me."
                  Screen share the comment + the suggestion it generated.

JUDGING CRITERIA:
  🔢  Points scored (feature checklist)
  💡  Copilot usage quality (were prompts specific and effective?)
  🎤  Presentation clarity (did you explain what you built?)

AUDIENCE VOTE:
  🏆  Creativity Award — voted by the room (everyone votes)
      [QR code to voting form or raise hands]
```

**Suggested Visual/Layout:**
Showcase energy — rocket ship icon, leaderboard-style layout. Three presenter slots visible as cards. Judging criteria as clean icon+label pairs. QR code for the audience vote prominently displayed. Timer visible (3 minutes per presenter).

**Speaker Notes (👥 Both):**
Pre-select presenters during the challenge walkabout — approach 2–3 students whose work was impressive and ask them quietly if they'd like to present. Having pre-confirmed presenters avoids the silence of waiting for volunteers. Introduce each presenter warmly. Keep the 3-minute timer strict — it's better to have a crisp showcase than an overrun one. After each presenter: brief applause, one question from the room.

---

## SECTION 4 — CLOSING (Slides 29–32)

---

### SLIDE 29 — What You Built Today

**Slide Objective:** Restate the achievement concretely. Students often undervalue what they've just done — make it explicit.

**Slide Content:**
```
WHAT YOU BUILT TODAY

Starting from zero at 2:00 PM.

⚛️  React Application
    A fully functional Task Manager built from scratch.
    Components, Props, State — all working together.

🏗️  Component Architecture
    App  →  Header + TaskCard (×N)
    Parent-child data flow using props.
    State updates triggering automatic re-renders.

🤖  AI-Assisted Development
    Used GitHub Copilot to generate features,
    reviewed suggestions, steered the AI as the developer.

💡  Developer Mindset
    Wrote comments before code.
    Debugged errors systematically.
    Shipped working features under time pressure.

This is real full-stack development skills.
Not a tutorial. Not copy-paste. You built it.
```

**Suggested Visual/Layout:**
Four achievement cards in the existing hexagonal style. Each card has an icon, a title, and a brief description. A screenshot of the final Task Manager app in the background or corner. The last line ("Not a tutorial") in a prominent accent quote style.

**Speaker Notes (👥 Both):**
"I want to be direct with you. What you did today — going from zero React knowledge to a working application with AI-assisted features in 3 hours — is genuinely impressive. That's not workshop flattery. These are the same skills you'd use on a real project. Components, state, props — these are the same patterns used at every company that builds with React. You've got the foundation."

---

### SLIDE 30 — Key Concepts: Take-Home Reference

**Slide Objective:** Give students a clean mental model summary they can photograph and use as a reference after the workshop.

**Slide Content:**
```
REACT + COPILOT: TAKE-HOME REFERENCE

REACT CORE:
  JSX         = HTML-like syntax inside JavaScript
  Component   = A function that returns JSX
  Props       = Read-only data passed from parent → child
  State       = Mutable data that triggers re-renders
  useState    = const [value, setValue] = useState(initial)

THE RE-RENDER LOOP:
  State changes → Component re-runs → New JSX → DOM updates

DATA FLOW RULES:
  ↓  Data flows DOWN via props
  ↑  Events flow UP via callback functions as props
  ❌  Never mutate state directly (always use setter)
  ❌  Never modify props (read-only in child)

COPILOT GOLDEN RULES:
  📝  Comment first, code second
  👁️  Read every suggestion before you accept
  🎯  Specific prompts → useful suggestions
  🧠  You are the developer — Copilot is the tool

KEY HOOKS TO LEARN NEXT:
  useEffect   → side effects, data fetching, lifecycle
  useContext  → share state without prop drilling
  useRef      → access DOM elements directly
```

**Suggested Visual/Layout:**
Dense but clean reference card. Three sections with clear labels. Use the existing card/panel layout. This slide should be photograph-worthy — high contrast, readable font, all key terms visible. Include a "Take a photo of this!" callout.

**Speaker Notes (🎤 Speaker A):**
"Take a photo of this slide — this is your reference card. These concepts will come up every time you write React. When you're stuck on props vs state, come back to this. When you're wondering how re-renders work, come back to this. These are the fundamentals — everything else in React is built on top of these ideas."

---

### SLIDE 31 — What's Next: Your Learning Roadmap

**Slide Objective:** Give students a clear, non-overwhelming next step. The goal is action, not overwhelm.

**Slide Content:**
```
YOUR NEXT STEPS

WEEK 1 — Reinforce today's work
  ✦  Rebuild the Task Manager from scratch, without the slides.
     If you can build it from memory, you own it.
  ✦  Add one feature we didn't cover today.

WEEK 2-4 — Go deeper
  ✦  Learn useEffect (react.dev/learn)
  ✦  Try fetching real data from a public API
  ✦  Deploy your app with Vercel (vercel.com — free)

MONTH 2 — Level up
  ✦  React Router — add multiple pages
  ✦  A state management intro (Zustand or Context API)
  ✦  Build something for your portfolio

RESOURCES:
  📖  react.dev/learn          (official, excellent beginner path)
  🤖  docs.github.com/copilot  (Copilot documentation)
  🎓  gdsc.community/utp       (GDSC UTP — our next events)
  💬  [Discord/WhatsApp link]  (Workshop community chat)

"The developers who grow fastest are the ones who
 build things — not the ones who watch more tutorials."
```

**Suggested Visual/Layout:**
Timeline roadmap with four nodes: Week 1, Week 2-4, Month 2, and Resources. Each node has concrete, actionable items — not vague goals. Resources section with real URLs formatted as badge-pills. The closing quote in a large accent typestyle.

**Speaker Notes (🤖 Speaker B):**
"My honest advice: don't watch 10 more tutorials this week. Take the Task Manager you built today and rebuild it tomorrow from scratch without looking at the slides. If you can do that, you genuinely understand React. That's how you make it stick. Then add one new feature. Then build something for your portfolio. You have the foundation now — use it."

---

### SLIDE 32 — Thank You + Closing

**Slide Objective:** End on energy, gratitude, and community. Make people feel proud of what they did and connected to each other.

**Slide Content:**
```
THANK YOU 🎉

You showed up. You coded. You shipped.
That's what matters.

STAY CONNECTED:
  GDSC UTP          gdsc.community/utp
  Email             gdsc.utp@gmail.com
  [Community Chat]  [QR Code]

SHARE YOUR WORK:
  Share a screenshot in the group chat!
  Post it online and tag @GDSCUTP.
  Show people what you built — you earned it.

CERTIFICATE:
  Fill in the feedback form to receive your certificate.
  [QR Code → Google Form]

UPCOMING EVENTS:
  [Next workshop / event name + date]

⚛️ React atom logo          🤖 GitHub Copilot logo

"The best time to start building was yesterday.
 The second best time is right now."

Q&A | GROUP PHOTO | STAY CONNECTED
Learning Hub Block 1, UTP | 13 June 2026
```

**Suggested Visual/Layout:**
Keep the existing closing slide style. "Thank You!" in the large neon glow font. Two prominent QR codes: one for community chat, one for feedback/certificate form. Event logos. Speaker names at the bottom. The GitHub Copilot mascot and React atom as the flanking visuals — same as the current closing slide.

**Speaker Notes (👥 Both):**
"Quick last things. If you want a certificate, scan that QR code and fill in the two-minute feedback form — we read every response. Take a screenshot of your customized Task Manager app and share it in our Telegram/WhatsApp group chat so everyone can see what you designed today! Post it online and tag us as well. Group photo in 2 minutes. Thank you all for being here."

---

## PRODUCTION NOTES FOR CANVA

### Slide Count Summary
| Section | Slides | Count |
|---|---|---|
| Opening | 1–5 | 5 |
| React Foundations | 6–18 | 13 |
| GitHub Copilot | 19–23 | 5 |
| AI Challenge | 24–28 | 5 |
| Closing | 29–32 | 4 |
| **Total** | | **32** |

### Visual Consistency Checklist
- All code blocks: dark background, monospace font, syntax highlighting (cyan for JSX/tags, yellow for keywords, green for strings)
- Lab activity cards: distinct accent border (amber or bright green) to visually separate from content slides
- Checkpoint slides: full-width with trophy/achievement iconography
- Speaker transition indicators: `🎤` `🤖` `👥` icons visible in corner of slides where speaker handoff occurs
- Component diagrams: consistent box-and-arrow style throughout (neon outlines on dark)
- Progress tracker: small "JSX ✅ Components ✅ Props ✅ State..." bar visible on concept slides to show learning progress

### Code Font Recommendation
Use a monospace font family for all code blocks. Fira Code, JetBrains Mono, or Cascadia Code all render well in Canva and have ligature support. Set code text size to minimum 18pt — it must be readable from the back of a 30-person classroom.

### Accessibility Note
Ensure code block color contrast passes WCAG AA — green text on dark backgrounds can fail if the green is too desaturated. Test the actual hex values in a contrast checker.

### Speaker Handoff Points
- Slides 1–18: Speaker A leads (React)
- Slide 19–23: Speaker B leads (Copilot), Speaker A assists
- Slides 24–28: Both active, not presenting
- Slides 29–32: Both onstage

### Lab Timing Budget
| Lab | Activity | Time |
|---|---|---|
| 0 | Environment setup + verification | 12–15 min |
| 1 | First JSX render | 5 min |
| 2 | Header component | 7 min |
| 3 | TaskCard component | 6 min |
| 4 | Props on TaskCard | 8 min |
| 5 | useState dynamic rendering | 10 min |
| 6 | Add Task feature | 10 min |
| 7 | Delete Task feature | 8 min |
| 8 | Toggle + counter | 8 min |
| 9 | First Copilot interaction | 5 min |
| 10 | Copilot-assisted enhancement | 8 min |
| AI Challenge | 30 min |
| **Total active coding time** | **~118 min** |

### Fallback Resources (Must Prepare Before Event)
- CodeSandbox template: pre-built Vite + React environment (for Node install failures)
- ZIP starter folder: Challenge/Starter Project (for challenge entry point)
- ZIP solution folder: Instructor Solution (with completed advanced features for reference)
- PDF of this slide script: for speakers to reference during delivery
