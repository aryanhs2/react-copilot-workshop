function AddTaskForm({ value, onChange, onAdd }) {
  return (
    <div className="add-task-form">
      <input
        type="text"
        className="add-task-input"
        placeholder="What needs to be done?"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') onAdd();
        }}
      />
      <button className="btn btn-add" onClick={onAdd}>+ Add Task</button>
    </div>
  );
}

export default AddTaskForm;
