import React from "react";

function TaskList({ tasks, onChangeTask, onDeleteTask, onChange }) {
  return tasks.map((task) => {
    return (
      <div key={task.id}>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => onChangeTask({ ...task, done: e.target.checked })}
        />
        {task.text}
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      </div>
    );
  });
}

export default TaskList;
