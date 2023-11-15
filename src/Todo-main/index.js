import { useState } from "react";
import TodoHeader from "../components/TodoHeader";
import { FaPlus } from "react-icons/fa6";
import Modal from "../components/Modal";
let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
function MainTodoApp() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        isCompleted: false,
      },
    ]);
  };
  return (
    <div className="w-[750px] h-screen flex flex-col mx-auto">
      <TodoHeader title="Todo List" />
      <main className="w-full relative h-full">
        <Modal onAddTask={handleAddTask} />
        {/* Display task list */}
        <section className="w-[520px] h-[545px]"></section>
        <span className="absolute bottom-0 right-0 my-4">
          <button
            className="btn btn-circle bg-indigo-500 text-white"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <FaPlus fontSize={24} />
          </button>
        </span>
      </main>
    </div>
  );
}

export default MainTodoApp;
