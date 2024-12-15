import React, { useState, useRef } from "react";

export const Tasks = ({ tasks, addTask, deleteTask }) => {
  const inputRef = useRef();
  const [taskDescription, setTaskDescription] = useState("");

  const addTaskHandler = () => {
    if (!taskDescription) {
      return;
    }
    addTask(taskDescription);
    inputRef.current.value = "";
  };

  return (
    <div>
      <div className="w-full flex gap-5 mb-6">
        <input
          type="text"
          ref={inputRef}
          className="w-1/2 p-2 border-2 border-stone-700"
          onChange={(e) => setTaskDescription(e.target.value)}
        ></input>
        <button
          className="px-2 py-2  rounded-md bg-stone-700 text-stone-200"
          onClick={addTaskHandler}
        >
          Add Task
        </button>
      </div>
      <ul>
        {tasks?.map((task) => (
          <li
            key={task.id}
            className=" my-2 p-2 px-5 mb-3 bg-stone-50 rounded-md flex justify-between "
          >
            <p className="text-stone-600"> {task.description}</p>
            <button onClick={() => deleteTask(task.id)}>clear</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
