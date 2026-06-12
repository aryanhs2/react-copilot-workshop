// TaskCard.jsx
// Displays a single task with its title, status, and action buttons
function TaskCard({ task, onDelete, onToggle }) {
  const isDone = task.status === 'Done';
  return (
    <div className={`task-card ${isDone ? 'task-card--done' : ''}`}>
      <div className="task-card-content">
        <p className={`task-title ${isDone ? 'task-title--done' : ''}`}>
          {task.title}
        </p>
        <span className={`task-status ${isDone ? 'status--done' : 'status--pending'}`}>
          {task.status}
        </span>
      </div>

      <div className="task-card-actions">
        <button
          className={`btn btn-toggle ${isDone ? 'btn-toggle--undo' : 'btn-toggle--done'}`}
          onClick={() => onToggle(task.id)}
        >
          {isDone ? 'Undo' : 'Done'}
        </button>
        <button
          className="btn btn-delete"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
