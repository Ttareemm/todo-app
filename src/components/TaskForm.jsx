import { useState } from "react";

export default function TaskForm({
  editingTask,
  onAddTask,
  onUpdateTask,
}) {
  const [title, setTitle] = useState(editingTask?.title || "");
  const [date, setDate] = useState(editingTask?.date || "");
  const [time, setTime] = useState(editingTask?.time || "");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !date || !time) {
      return;
    }

    if (editingTask) {
      const updatedTask = {
        ...editingTask,
        title: title.trim(),
        date,
        time,
      };

      onUpdateTask(updatedTask);
    } else {
      const newTask = {
        id: Date.now(),
        title: title.trim(),
        date,
        time,
        completed: false,
      };

      onAddTask(newTask);
    }
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
        {editingTask ? "Save Changes" : "+ Add Task"}
      </button>
    </form>
  );
}