import TaskItem from "./TaskItem";

export default function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          date={task.date}
          time={task.time}
          completed={task.completed}
        />
      ))}
    </div>
  );
}