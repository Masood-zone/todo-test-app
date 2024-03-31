import React from "react";

function AddTask({ task, setTask, onSubmit }) {
  return (
    <form className="w-full py-5 flex my-3" onSubmit={onSubmit}>
      <label className="w-full relative">
        <input
          className="w-full p-2 border outline-none border-gray-300 dark:border-[#8B5CF6] focus:border-focus-purple rounded-md dark:text-[#E2E8E6] dark:bg-[#334155] "
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          placeholder="Add a task"
        />
        <button
          type="submit"
          className="bg-[#7C3AED] text-white py-2 px-4 rounded-tr-md rounded-br-md absolute right-0 bottom-0 top-0"
        >
          Add
        </button>
      </label>
    </form>
  );
}

export default AddTask;
