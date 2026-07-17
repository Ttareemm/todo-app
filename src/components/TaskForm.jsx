import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !date || !time) {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      date,
      time,
      completed: false,
    };

    onAddTask(newTask);
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-title">Task Title</label>

      <input
        id="task-title"
        type="text"
        placeholder="Type Your Task Here..."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <div className="date-time-row">
        <div className="form-group">
          <label htmlFor="task-date">Day</label>
          <input
            id="task-date"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="task-time">Time</label>
          <input
            id="task-time"
            type="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </div>
      </div>

      <button type="submit" className="submit-btn">
        + Add Task
      </button>
    </form>
  );
}