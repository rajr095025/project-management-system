import React from "react";

export const ProjectsList = ({ projects, selectProjectHandler }) => {
  return (
    <ul>
      {projects?.map((project, index) => (
        <li key={index} className="w-full">
          <button
            onClick={() => selectProjectHandler(project?.id)}
            className="text-lg mb-4 font-semibold text-stone-300"
          >
            {project?.title}
          </button>
        </li>
      ))}
    </ul>
  );
};
