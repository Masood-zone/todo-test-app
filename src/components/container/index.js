import React, { useState } from "react";
import Header from "../header";
import AddTask from "../addTask";
import TaskList from "../taskList";

function Container() {
  // Main Todo state
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task === "") {
      return task;
    } else {
      setTasks([...tasks, { id: tasks.length + 1, task, isDone: false }]);
      setTask("");
    }
  };

  // Theme controller state
  const [theme, setTheme] = useState("light");
  // Toggle Dark mode
  function toggleDarkMode() {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
      setTheme("light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("darkMode", "true");
      setTheme("dark");
    }
  }

  return (
    <main className="dark:bg-[#1E293B] bg-white dark:text-white max-w-md h-[450px] flex flex-col mx-auto px-1 py-1 rounded-lg ">
      <Header toggleTheme={toggleDarkMode} theme={theme} />
      <AddTask task={task} setTask={setTask} onSubmit={handleAddTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </main>
  );
}

export default Container;
