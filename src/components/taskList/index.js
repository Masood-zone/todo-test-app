import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { AiFillEdit } from "react-icons/ai";

function TaskList({ tasks, setTasks }) {
  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };
  return (
    <section className="w-full h-full">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div
            key={task.id}
            className="w-full py-2 px-3 flex justify-between items-center border-b border-gray-200 dark:border-gray-700"
          >
            <div className="flex gap-4">
              <input
                type="checkbox"
                onChange={() => {
                  setTasks((prevTasks) =>
                    prevTasks.map((prevTask) => {
                      if (prevTask.id === task.id) {
                        return { ...prevTask, isDone: !prevTask.isDone };
                      }
                      return prevTask;
                    })
                  );
                }}
                checked={task.isDone}
              />
              <p className="text-lg">{task.task}</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-[#7C3AED] text-white py-1 px-2 rounded-full">
                <AiFillEdit />
              </button>
              <button
                className="bg-[#c61414] text-white py-1 px-1 rounded-full"
                onClick={() => handleDelete(task.id)}
              >
                <TiDelete fontSize={24} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">
          <p>There seems to be no tasks that has been added!</p>
        </div>
      )}
    </section>
  );
}

export default TaskList;
