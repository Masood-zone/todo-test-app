import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask,
  onEditTask,
  onSaveEdit,
  onCancelEdit,
  editTaskId,
  newText,
  setNewText,
}) {
  return (
    <section className="w-[520px] h-[545px] mx-auto">
      <ul>
        {tasks.map((task) => (
          <li
            className="list-none flex items-center justify-between gap-2 py-3 border-b-2 border-b-indigo-200 hover:cursor-pointer"
            key={task.id}
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => onChangeTask(task.id)}
                className="w-[20px] h-[20px] checkbox checkbox-primary "
              />
              {editTaskId === task.id ? (
                <>
                  <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className="border-primary"
                  />
                  <button onClick={() => onSaveEdit(task.id)}>Save</button>
                  <button onClick={() => onCancelEdit()}>Cancel</button>
                </>
              ) : (
                <p
                  className={`text-lg font-medium uppercase text-base-content ${
                    task.isCompleted ? "line-through" : ""
                  }`}
                >
                  {task.text}
                </p>
              )}
            </div>
            <div className="flex items-center gap-1">
              <button className="btn-sm" onClick={() => onEditTask(task.id)}>
                <CiEdit />
              </button>
              <button className="btn-sm" onClick={() => onDeleteTask(task.id)}>
                <MdDeleteOutline />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
