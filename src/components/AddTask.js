import React from "react";
import { useState } from "react";

function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            onAddTask(text);
            setText("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTask;
