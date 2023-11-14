import { useState } from "react";
import TaskList from "./components/TaskList";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(initialTasks);

  const handleOnAddTask = (e) => {
    e.preventDefault();
  };
  const handleChangeTask = (task) => {
    setTasks(
      tasks.map((checked) => {
        if (checked.id === task.id) {
          return task;
        } else {
          return checked;
        }
      })
    );
  };
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((idx) => idx.id !== id));
  };
  return (
    <div>
      <h1>Prague itenerary</h1>
      <form onSubmit={handleOnAddTask}>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button type="submit">Add</button>
      </form>
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
