import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TasksSummary from "./components/TasksSummary";
import TaskList from "./components/TaskList";

import initialTasks from "./data/tasks";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");

      return savedTasks ? JSON.parse(savedTasks) : initialTasks;
    } catch (error) {
      console.error("Failed to load tasks from localStorage:", error);
      return initialTasks;
    }
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks to localStorage:", error);
    }
  }, [tasks]);

  function addTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setIsFormOpen(false);
    setEditingTask(null);
  }

  function updateTask(updatedTask) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );

    setEditingTask(null);
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

    if (editingTask?.id === id) {
      setEditingTask(null);
      setIsFormOpen(false);
    }
  }

  function startEditingTask(id) {
    const selectedTask = tasks.find((task) => task.id === id);

    if (!selectedTask) {
      return;
    }

    setEditingTask(selectedTask);
    setIsFormOpen(true);
  }

  function handleFormButton() {
    if (isFormOpen) {
      setIsFormOpen(false);
      setEditingTask(null);
    } else {
      setEditingTask(null);
      setIsFormOpen(true);
    }
  }

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <main className="app">
      <Header />

      <section className="tasks-container">
        <div className="form-header">
          <h2>My Tasks</h2>

          <button
            type="button"
            className={isFormOpen ? "cancel-btn" : "add-task-btn"}
            onClick={handleFormButton}
          >
            {isFormOpen ? "× Cancel" : "+ Add Task"}
          </button>
        </div>

        {isFormOpen && (
          <div className="form-wrapper">
            <TaskForm
              key={editingTask?.id ?? "new-task"}
              editingTask={editingTask}
              onAddTask={addTask}
              onUpdateTask={updateTask}
            />
          </div>
        )}

        <TasksSummary
          completedTasks={completedTasks}
          totalTasks={tasks.length}
        />

        <TaskList
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          onEditTask={startEditingTask}
        />
      </section>
    </main>
  );
}