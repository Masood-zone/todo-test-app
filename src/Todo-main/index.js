import { useReducer } from "react";
import TodoHeader from "../components/TodoHeader";
import { FaPlus } from "react-icons/fa6";
import Modal from "../components/Modal";
import TaskList from "../components/TaskList";
import { ACTIONS } from "./actions";
import TasksReducer from "./Reducer";

let nextId = 3;
const initialTasks = {
  tasks: [],
  editing: null,
  newText: "",
};

function MainTodoApp() {
  const [tasks, dispatch] = useReducer(TasksReducer, initialTasks);

  const handleAddTask = (text) => {
    dispatch({
      type: ACTIONS.task_added,
      payload: {
        id: nextId++,
        text: text,
        isCompleted: false,
      },
    });
  };
  const handleChangeTask = (id) => {
    dispatch({ type: ACTIONS.task_completed, payload: id });
  };
  const handleDeleteTask = (id) => {
    dispatch({ type: ACTIONS.task_deleted, id: id });
  };

  const handleEditClick = (id) => {
    dispatch({ type: ACTIONS.edited_task, id: id });
  };
  const handleSaveEdit = (id) => {
    dispatch({ type: ACTIONS.edit_saved });
  };
  const handleCancelClick = () => {
    dispatch({ type: ACTIONS.edit_canceled });
  };

  return (
    <div className="w-[750px] h-screen flex flex-col mx-auto">
      <TodoHeader title="Todo List" />
      <main className="w-full relative h-full">
        <Modal onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
          onEditTask={handleEditClick}
          onSaveEdit={handleSaveEdit}
          onCancelEdit={handleCancelClick}
          dispatch={dispatch}
        />
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
