import {
  FiEdit2,
  FiTrash2,
  FiCalendar,
  FiClock,
  FiCircle,
  FiCheckCircle,
} from "react-icons/fi";

export default function TaskItem({ title, date, time, completed }) {
  return (
    <article className={`task-item ${completed ? "completed" : ""}`}>
      <button className="check-btn" type="button">
        {completed ? <FiCheckCircle /> : <FiCircle />}
      </button>

      <div className="task-info">
        <p className="task-title">{title}</p>

        <div className="task-meta">
          <span>
            <FiCalendar />
            {date}
          </span>

          <span>
            <FiClock />
            {time}
          </span>
        </div>
      </div>

      <button className="action-btn edit-btn" type="button">
        <FiEdit2 />
      </button>

      <button className="action-btn delete-btn" type="button">
        <FiTrash2 />
      </button>
    </article>
  );
}