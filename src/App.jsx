import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TasksSummary from "./components/TasksSummary";
import TaskList from "./components/TaskList";
import tasks from "./data/tasks";

export default function App() {
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <main className="app">
      <Header />

      <section className="tasks-container">
        <TaskForm />

        <TasksSummary
          completedTasks={completedTasks}
          totalTasks={tasks.length}
        />

        <TaskList tasks={tasks} />
      </section>
    </main>
  );
}