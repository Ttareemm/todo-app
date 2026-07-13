import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title || !date || !time) {
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      date,
      time,
      completed: false,
    };

    onAddTask(newTask);

    setTitle("");
    setDate("");
    setTime("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2>My Tasks</h2>

        <button
          type="button"
          className="cancel-btn"
          onClick={() => {
            setTitle("");
            setDate("");
            setTime("");
          }}
        >
          × Cancel
        </button>
      </div>

      <label htmlFor="task-title">Task Title</label>

      <input
        id="task-title"
        type="text"
        placeholder="Type Your Task Here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="date-time-row">
        <div className="form-group">
          <label htmlFor="task-date">Day</label>

          <input
            id="task-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="task-time">Time</label>

          <input
            id="task-time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>

      <button className="submit-btn">
        + Add Task
      </button>
    </form>
  );
}