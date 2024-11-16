import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Load tasks from local storage on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (savedTasks.length > 0) {
      setTasks(savedTasks);
    }
  }, []); // Empty array ensures this only runs once on mount

  // Save tasks to local storage whenever the tasks state changes
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    // Filter out the task from the UI
    const updatedTasks = tasks.filter((task) => task.id !== id);

    // Update the tasks in state
    setTasks(updatedTasks);

    // Save the updated tasks to localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const sortTasks = (criteria) => {
    const sortedTasks = [...tasks];
    if (criteria === "Title") {
      sortedTasks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (criteria === "Priority") {
      sortedTasks.sort(
        (a, b) =>
          ["High", "Medium", "Low"].indexOf(a.priority) -
          ["High", "Medium", "Low"].indexOf(b.priority)
      );
    } else if (criteria === "Completed") {
      sortedTasks.sort((a, b) => a.completed - b.completed);
    }
    setTasks(sortedTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm
        addTask={addTask}
        setSearchTerm={setSearchTerm}
        sortTasks={sortTasks}
      />
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleCompletion={toggleCompletion}
      />
    </div>
  );
}

export default App;
