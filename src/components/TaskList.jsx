import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function TaskList({ tasks, deleteTask, toggleCompletion }) {
  return (
    <ul className="task-list">
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.li
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <span
              onClick={() => toggleCompletion(task.id)}
              className={`task-title ${task.completed ? "completed" : ""}`}
            >
              {task.title}
            </span>
            <span
              style={{ margin: "0px 200px", color: "#05210b" }}
              className={`priority-${task.priority.toLowerCase()}`}
            >
              {task.priority}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="delete-button"
            >
              Delete
            </button>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}

export default TaskList;
