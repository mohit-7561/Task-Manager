import React, { useState } from "react";

function TaskForm({ addTask, setSearchTerm, sortTasks }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };

    addTask(newTask);
    setTitle("");
  };

  return (
    <div className="task-form">
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          style={{ margin: "8px 0px" }}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button style={{ margin: "10px 0px" }} type="submit">
          Add Task
        </button>
      </form>
      <div className="search-sort-container">
        <input
          type="text"
          placeholder="Search tasks..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => sortTasks(e.target.value)}>
          <option value="Title">Sort by Title</option>
          <option value="Priority">Sort by Priority</option>
          <option value="Completed">Sort by Completion</option>
        </select>
      </div>
    </div>
  );
}

export default TaskForm;
