export default function TaskForm() {
  return (
    <form className="task-form">
      <div className="form-header">
        <h2>My Tasks</h2>
        <button type="button" className="cancel-btn">
          × Cancel
        </button>
      </div>

      <label htmlFor="task-title">Task Title</label>
      <input
        id="task-title"
        type="text"
        placeholder="Type Your Task Here..."
      />

      <div className="date-time-row">
        <div className="form-group">
          <label htmlFor="task-date">Day</label>
          <input id="task-date" type="date" />
        </div>

        <div className="form-group">
          <label htmlFor="task-time">Time</label>
          <input id="task-time" type="time" />
        </div>
      </div>

      <button type="button" className="submit-btn">
        + Add Task
      </button>
    </form>
  );
}