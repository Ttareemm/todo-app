import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TasksSummary from "./components/TasksSummary";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <main className="app">
      <Header />

      <section className="tasks-container">
        <TaskForm />

        <TasksSummary completedTasks={1} totalTasks={2} />

        <TaskList />
      </section>
    </main>
  );
}