import { useEffect, useState } from 'react';
import PriorityBadge from './PriorityBadge';

function TaskCard({ task, isEditing, onEdit, onStartEdit, onCancelEdit, onDelete, onToggle }) {
  const [editValue, setEditValue] = useState(task.title);
  const isDone = task.status === 'Done';

  useEffect(() => {
    setEditValue(task.title);
  }, [task.title, isEditing]);

  function saveEdit() {
    if (editValue.trim()) onEdit(task.id, editValue);
  }

  return (
    <article className={`task-card ${isDone ? 'task-card--done' : 'task-card--pending'}`}>
      <div className="task-card-content">
        {isEditing ? (
          <input
            className="edit-input"
            value={editValue}
            autoFocus
            onChange={(event) => setEditValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') saveEdit();
              if (event.key === 'Escape') onCancelEdit();
            }}
          />
        ) : (
          <p className={`task-title ${isDone ? 'task-title--done' : ''}`}>{task.title}</p>
        )}
        <div className="task-meta">
          <span className={`task-status ${isDone ? 'status--done' : 'status--pending'}`}>{task.status}</span>
          <PriorityBadge priority={task.priority} />
        </div>
      </div>
      <div className="task-card-actions">
        {isEditing ? (
          <>
            <button className="btn btn-save" onClick={saveEdit}>Save</button>
            <button className="btn btn-cancel" onClick={onCancelEdit}>Cancel</button>
          </>
        ) : (
          <>
            <button className="btn btn-toggle" onClick={() => onToggle(task.id)}>{isDone ? 'Undo' : 'Done'}</button>
            <button className="btn btn-edit" onClick={onStartEdit}>Edit</button>
            <button className="btn btn-delete" onClick={() => onDelete(task.id)}>Delete</button>
          </>
        )}
      </div>
    </article>
  );
}

export default TaskCard;
