import React, { useRef } from "react";
import { Tasks } from "./Tasks";
import { ConfirmModal } from "./Modal";

export const ViewProject = ({
  project,
  deleteProjectHandler,
  addTask,
  deleteTask,
  selectedProjectId,
  tasks,
}) => {
  console.log(
    "deleteProjectHandler ",
    deleteProjectHandler,
    "tasks",
    tasks,
    "selectedProjectId ",
    selectedProjectId
  );

  const confirmModalRef = useRef();

  function deleteButtonClicked(projectId) {
    confirmModalRef.current.open();
  }

  function onConfirmClick() {
    deleteProjectHandler(selectedProjectId);
  }

  let formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <section className="ml-10 mt-16 w-1/3">
      <header className="flex justify-between">
        <h1 className="mb-2 text-3xl font-bold text-stone-700 capitalize">
          {project.title}
        </h1>
        <button onClick={() => deleteButtonClicked(project.id)}>Delete</button>
      </header>
      <p className="mb-4 text-stone-500">{formattedDate}</p>
      <p className="mb-4 ">{project.description}</p>
      <section>
        <h2 className="mb-2 font-normal text-xl font-bold text-stone-700 capitalize">
          Tasks
        </h2>
        <Tasks
          tasks={tasks?.filter((task) => task?.projectId === selectedProjectId)}
          addTask={addTask}
          deleteTask={deleteTask}
        ></Tasks>
      </section>
      <ConfirmModal
        ref={confirmModalRef}
        title={"Delete Project"}
        message={"Are you sure, You want to delete Project"}
        onConfirmClick={onConfirmClick}
      ></ConfirmModal>
    </section>
  );
};
