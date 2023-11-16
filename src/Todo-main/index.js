import { useState } from "react";
import TodoHeader from "../components/TodoHeader";
import { FaPlus } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "../components/Modal";
let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", isCompleted: true },
  { id: 1, text: "Watch a puppet show", isCompleted: false },
  { id: 2, text: "Lennon Wall pic", isCompleted: false },
];
function MainTodoApp() {
  const [tasks, setTasks] = useState(initialTasks);
  const [editTaskId, setEditTaskId] = useState(null);
  const [newText, setNewText] = useState("");
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
  const handleChangeTask = (id) => {
    setTasks(
      tasks.map((taskId) =>
        taskId.id === id
          ? { ...taskId, isCompleted: !taskId.isCompleted }
          : taskId
      )
    );
  };
  const handleEditClick = (id) => {
    const task = tasks.find((task) => task.id === id);
    setEditTaskId(id);
    setNewText(task.text);
  };
  const handleSaveEdit = (id) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
    setEditTaskId(null);
    setNewText("");
  };
  const handleCancelClick = () => {
    setEditTaskId(null);
    setNewText("");
  };
  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((taskId) => taskId.id !== id);
    setTasks(newTasks);
  };
  return (
    <div className="w-[750px] h-screen flex flex-col mx-auto">
      <TodoHeader title="Todo List" />
      <main className="w-full relative h-full">
        <Modal onAddTask={handleAddTask} />
        {/* Display task list */}
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
                    onChange={() => handleChangeTask(task.id)}
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
                      <button onClick={() => handleSaveEdit(task.id)}>
                        Save
                      </button>
                      <button onClick={() => handleCancelClick()}>
                        Cancel
                      </button>
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
                  <button
                    className="btn-sm"
                    onClick={() => handleEditClick(task.id)}
                  >
                    <CiEdit />
                  </button>
                  <button
                    className="btn-sm"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    <MdDeleteOutline />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
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
