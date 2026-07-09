import TaskItem from "./TaskItem";

export default function TaskList() {
  return (
    <div className="task-list">
      <TaskItem
        title="Task 1"
        date="2026-07-07"
        time="14:57"
        completed={false}
      />

      <TaskItem
        title="Task 2"
        date="2026-07-06"
        time="14:58"
        completed={true}
      />
    </div>
  );
}