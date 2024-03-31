import React from "react";
import { MdSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";

function Header({ toggleTheme, theme }) {
  return (
    <header className="flex items-center justify-between py-1 ">
      <h1 className="text-lg font-semibold text-center">Todo App</h1>
      <button onClick={toggleTheme} className="p-2 rounded-full">
        {theme === "dark" ? (
          <MdSunny className="w-8 h-8" />
        ) : (
          <IoIosMoon className="w-8 h-8" />
        )}
      </button>
    </header>
  );
}

export default Header;
