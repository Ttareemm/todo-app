import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TasksSummary from "./components/TasksSummary";
import TaskList from "./components/TaskList";
import initialTasks from "./data/tasks";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [isFormOpen, setIsFormOpen] = useState(false);

  function addTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setIsFormOpen(false);
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

  function deleteTask(id) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  }

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <main className="app">
      <Header />

      <section className="tasks-container">
        <div className="form-header">
          <h2>My Tasks</h2>

          <button
            type="button"
            className={isFormOpen ? "cancel-btn" : "add-task-btn"}
            onClick={() => setIsFormOpen((prevValue) => !prevValue)}
          >
            {isFormOpen ? "× Cancel" : "+ Add Task"}
          </button>
        </div>

        {isFormOpen && <TaskForm onAddTask={addTask} />}

        <TasksSummary
          completedTasks={completedTasks}
          totalTasks={tasks.length}
        />

        <TaskList
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </section>
    </main>
  );
}