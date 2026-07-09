export default function TasksSummary({ completedTasks, totalTasks }) {
  return (
    <div className="tasks-summary">
      <h3>Tasks Completed</h3>
      <p>
        {completedTasks} From {totalTasks}
      </p>
    </div>
  );
}