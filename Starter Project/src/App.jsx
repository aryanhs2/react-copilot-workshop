// App.jsx
// This is your starting point! Read through this file before you begin.
//
// The app currently supports:
//   ✅ Viewing tasks
//   ✅ Adding tasks
//   ✅ Deleting tasks
//   ✅ Marking tasks as Done / Pending
//
// Your challenge: improve it using React + GitHub Copilot!
// Check CHALLENGE_GUIDE.md for ideas and hints.

import { useState } from 'react';
import Header from './components/Header';
import TaskCard from './components/TaskCard';
import AddTaskForm from './components/AddTaskForm';
import { sampleTasks } from './data/sampleTasks';

function App() {
  // Load tasks state (default is sampleTasks)
  const [tasks, setTasks] = useState(sampleTasks);
  const [newTask, setNewTask] = useState('');

  // ─── TODO: ADD TIER 2 & 3 STATE HERE ───────────────────────────────────────
  // [Feature 5] Add state for search term (string, default: '')
  // [Feature 6] Add state for active filter tab ('All', 'Pending', or 'Done')
  // [Feature 7] Add state for task ID being edited (default: null)
  // [Feature 9] Add state for dark mode theme (boolean, default: false)
  // ───────────────────────────────────────────────────────────────────────────

  // Calculate task counts
  const pendingCount = tasks.filter((t) => t.status === 'Pending').length;
  const doneCount = tasks.filter((t) => t.status === 'Done').length;
  const totalCount = tasks.length;

  // ─── TODO: DERIVED FILTERED STATE (TIER 2) ─────────────────────────────────
  // [Feature 5 & 6] Filter your tasks list based on active filter and search term
  // Hint: const filteredTasks = tasks.filter(...)
  // ───────────────────────────────────────────────────────────────────────────

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: newTask.trim(),
        status: 'Pending',
        priority: 'medium',
      },
    ]);
    setNewTask('');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id
          ? { ...t, status: t.status === 'Done' ? 'Pending' : 'Done' }
          : t
      )
    );
  };

  // ─── TODO: EDIT HANDLER & SIDE EFFECTS (TIER 2 & 3) ────────────────────────
  // [Feature 7] Create handleEditTask(id, newTitle) function
  // [Feature 8] Create useEffect to save tasks to localStorage ('workshop-tasks')
  // [Feature 9] Create useEffect to save dark mode setting to localStorage ('workshop-dark-mode')
  // ───────────────────────────────────────────────────────────────────────────

  return (
    // TODO (Tier 3 - Feature 9): Apply the 'dark' className dynamically if dark mode is active
    <div className="app">
      <Header
        pendingCount={pendingCount}
        doneCount={doneCount}
        totalCount={totalCount}
        // TODO (Tier 3 - Feature 9): Pass darkMode and onToggleDark props to Header
      />
      <main className="main">
        {/* TODO (Tier 3 - Feature 10): Render the ProgressBar component here */}

        <AddTaskForm
          value={newTask}
          onChange={setNewTask}
          onAdd={handleAddTask}
        />

        {/* TODO (Tier 2 - Feature 5): Add Search Bar input element here */}

        {/* TODO (Tier 2 - Feature 6): Add Filter Tabs buttons/component here */}

        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-state">No tasks yet. Add one above! 🎉</p>
          ) : (
            // TODO (Tier 2 - Feature 5/6): Map over your filtered tasks array instead of 'tasks'
            tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDelete={handleDeleteTask}
                onToggle={handleToggleTask}
                // TODO (Tier 2 - Feature 7): Pass editing props to TaskCard (isEditing, onEdit, onStartEdit, onCancelEdit)
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
