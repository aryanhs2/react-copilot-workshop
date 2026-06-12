// AddTaskForm.jsx
// Controlled input form for adding a new task
function AddTaskForm({ value, onChange, onAdd }) {
  return (
    <div className="add-task-form">
      <input
        type="text"
        className="add-task-input"
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        className="btn btn-add"
        onClick={onAdd}
      >
        + Add Task
      </button>
    </div>
  );
}

export default AddTaskForm;
