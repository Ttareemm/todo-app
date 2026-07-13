import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TasksSummary from "./components/TasksSummary";
import TaskList from "./components/TaskList";
import initialTasks from "./data/tasks";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function addTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <main className="app">
      <Header />

      <section className="tasks-container">
        <TaskForm onAddTask={addTask} />

        <TasksSummary
          completedTasks={completedTasks}
          totalTasks={tasks.length}
        />

        <TaskList
          tasks={tasks}
          onToggleTask={toggleTask}
        />
      </section>
    </main>
  );
}