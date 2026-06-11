// TaskCard.jsx
// Displays a single task with its title, status, and action buttons
// Props:
//   task     — the task object { id, title, status, priority }
//   onDelete — function to call when Delete is clicked
//   onToggle — function to call when Done/Undo is clicked

// TODO (Tier 2 - Feature 7): Accept editing props (isEditing, onEdit, onStartEdit, onCancelEdit)
function TaskCard({ task, onDelete, onToggle }) {
  const isDone = task.status === 'Done';

  // TODO (Tier 2 - Feature 7): Add local state to control the edit text input (e.g. editValue, default: task.title)
  // and check when isEditing changes to focus the input field.

  return (
    <div className={`task-card ${isDone ? 'task-card--done' : ''}`}>
      <div className="task-card-content">
        {/* TODO (Tier 2 - Feature 7): If in edit mode, render an <input> here instead of the <p> title */}
        <p className={`task-title ${isDone ? 'task-title--done' : ''}`}>
          {task.title}
        </p>
        <span className={`task-status ${isDone ? 'status--done' : 'status--pending'}`}>
          {task.status}
        </span>
        {/* TODO (Tier 1 - Feature 2): Render the PriorityBadge component here, passing task.priority */}
      </div>

      <div className="task-card-actions">
        {/* TODO (Tier 2 - Feature 7): If editing, render "Save" and "Cancel" buttons here instead */}
        <button
          className={`btn btn-toggle ${isDone ? 'btn-toggle--undo' : 'btn-toggle--done'}`}
          onClick={() => onToggle(task.id)}
        >
          {isDone ? 'Undo' : 'Done'}
        </button>
        {/* TODO (Tier 2 - Feature 7): Add an "Edit" button here to trigger edit mode */}
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
