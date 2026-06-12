// AddTaskForm.jsx
// Controlled input form for adding a new task
// Props:
//   value    — the current value of the input (controlled by App state)
//   onChange — function to update the input value in state
//   onAdd    — function to call when Add Task is clicked

function AddTaskForm({ value, onChange, onAdd }) {
  return (
    <div className="add-task-form">
      <input
        type="text"
        className="add-task-input"
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        // TODO (Tier 1 - Feature 3): Add onKeyDown handler to detect 'Enter' key and trigger onAdd()
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
