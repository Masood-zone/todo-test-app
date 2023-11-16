import React from "react";
import { useState } from "react";

function Modal({ onAddTask }) {
  const [text, setText] = useState("");
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog" className="flex flex-col">
          <h1 className="text-2xl uppercase text-center font-bold mb-3 text-primary">
            New Note
          </h1>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="py-2 px-1 w-[440px] h-[38px] rounded-md border-2 bg-white"
            placeholder="Type your task here"
          />
          <div className="flex items-center justify-between mt-24 flex-row-reverse">
            <button
              className="btn rounded uppercase text-white bg-indigo-500"
              onClick={() => {
                onAddTask(text);
                setText("");
              }}
            >
              Add
            </button>
            <button className="btn rounded uppercase text-indigo-500 border-2 border-indigo-500 bg-white">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Modal;
