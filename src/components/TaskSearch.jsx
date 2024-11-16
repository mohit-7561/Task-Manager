import React from "react";

const TaskSearch = ({ setSearchTerm }) => {
  return (
    <div className="task-search">
      <input
        type="text"
        placeholder="Search tasks"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default TaskSearch;
