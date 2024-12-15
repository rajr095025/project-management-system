import React, { useRef } from "react";
import Button from "./Button";
import Input from "./Input";

export const NewProject = ({
  addNewProjectCancelHandler,
  addNewProjectSubmitHandler,
}) => {
  let titleRef = useRef();
  let descriptionRef = useRef();
  let dueDateRef = useRef();

  function submitHandler() {
    let title = titleRef.current.value;
    let description = descriptionRef.current.value;
    let dueDate = dueDateRef.current.value;

    addNewProjectSubmitHandler({ title, description, dueDate });
  }

  return (
    <section className="w-1/3 m-10 ">
      <div className="flex justify-end gap-5">
        <button onClick={addNewProjectCancelHandler}>Cancel</button>
        <button
          onClick={submitHandler}
          className="bg-stone-800 text-stone-200 px-5 py-1 rounded-lg"
        >
          Save
        </button>
      </div>
      <div>
        <p className="mb-4">
          <Input label="title" type="text" ref={titleRef} />
        </p>

        <p className="mb-4">
          <Input label="desription" isTextArea ref={descriptionRef} />
        </p>

        <p className="mb-4">
          <Input label="Due date" type="date" ref={dueDateRef} />
        </p>
      </div>
    </section>
  );
};
