import { useEffect, useState } from 'react';
import Header from './components/Header';
import TaskCard from './components/TaskCard';
import AddTaskForm from './components/AddTaskForm';
import ProgressBar from './components/ProgressBar';
import { sampleTasks } from './data/sampleTasks';

function loadTasks() {
  try {
    const stored = localStorage.getItem('workshop-tasks');
    return stored ? JSON.parse(stored) : sampleTasks;
  } catch {
    return sampleTasks;
  }
}

function App() {
  const [tasks, setTasks] = useState(loadTasks);
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [editingId, setEditingId] = useState(null);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('workshop-dark-mode') === 'true'
  );

  const pendingCount = tasks.filter((task) => task.status === 'Pending').length;
  const doneCount = tasks.filter((task) => task.status === 'Done').length;
  const totalCount = tasks.length;

  const displayedTasks = tasks.filter((task) => {
    const matchesFilter = filter === 'All' || task.status === filter;
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    localStorage.setItem('workshop-tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('workshop-dark-mode', String(darkMode));
  }, [darkMode]);

  function handleAddTask() {
    if (!newTask.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), title: newTask.trim(), status: 'Pending', priority: 'medium' },
    ]);
    setNewTask('');
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleToggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === 'Done' ? 'Pending' : 'Done' }
          : task
      )
    );
  }

  function handleEditTask(id, newTitle) {
    if (!newTitle.trim()) return;
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle.trim() } : task
      )
    );
    setEditingId(null);
  }

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <Header
        pendingCount={pendingCount}
        doneCount={doneCount}
        totalCount={totalCount}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode((current) => !current)}
      />
      <main className="main">
        <ProgressBar doneCount={doneCount} totalCount={totalCount} />
        <AddTaskForm value={newTask} onChange={setNewTask} onAdd={handleAddTask} />

        <div className="challenge-controls">
          <input
            className="search-input"
            type="search"
            value={searchTerm}
            placeholder="Search tasks..."
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <div className="filter-tabs" aria-label="Task filters">
            {['All', 'Pending', 'Done'].map((label) => (
              <button
                key={label}
                className={`tab-btn ${filter === label ? 'tab--active' : ''}`}
                onClick={() => setFilter(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <p className="results-count">Showing {displayedTasks.length} tasks</p>
        <div className="task-list">
          {displayedTasks.length === 0 ? (
            <p className="empty-state">No matching tasks.</p>
          ) : (
            displayedTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                isEditing={editingId === task.id}
                onStartEdit={() => setEditingId(task.id)}
                onCancelEdit={() => setEditingId(null)}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
                onToggle={handleToggleTask}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
