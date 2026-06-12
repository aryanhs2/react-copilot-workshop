import { useState } from 'react';
import Header from './components/Header';
import TaskCard from './components/TaskCard';
import AddTaskForm from './components/AddTaskForm';
import SummaryBar from './components/SummaryBar';
import { sampleTasks } from './data/sampleTasks';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(sampleTasks);
  const [newTask, setNewTask] = useState('');

  const pendingCount = tasks.filter((t) => t.status === 'Pending').length;
  const doneCount = tasks.filter((t) => t.status === 'Done').length;
  const totalCount = tasks.length;

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

  return (
    <div className="app">
      <Header
        pendingCount={pendingCount}
        doneCount={doneCount}
        totalCount={totalCount}
      />
      <main className="main">
        <SummaryBar
          totalCount={totalCount}
          pendingCount={pendingCount}
          doneCount={doneCount}
        />
        <AddTaskForm
          value={newTask}
          onChange={setNewTask}
          onAdd={handleAddTask}
        />
        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-state">No tasks yet. Add one above! 🎉</p>
          ) : (
            tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
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
