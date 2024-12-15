import React from "react";
import NoProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export const NoProject = ({ addNewProjectButtonHandler }) => {
  return (
    <section className="w-2/3 mx-10 my-40 text-center ">
      <h2 className="text-xl mb-4 font-semibold">No Project Selected</h2>
      <p className="flex my-11 ">
        <img src={NoProjectImage} className="w-32 mx-auto" />
      </p>
      <p className="mb-8">No Project Selected to View</p>
      <Button onClick={addNewProjectButtonHandler}>+ Add Project</Button>
    </section>
  );
};
