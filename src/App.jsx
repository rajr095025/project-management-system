import { useEffect, useRef, useState } from "react";
import "./App.css";
import { SideBar } from "./Components/SideBar";
import { NewProject } from "./Components/NewProject";
import { NoProject } from "./Components/NoProject";
import { ViewProject } from "./Components/ViewProject";
import Modal from "./Components/Modal";

function App() {
  const modalRef = useRef();
  const [projectDetails, setProjectDetails] = useState({
    selectedProject: undefined,
    projects: [],
  });

  useEffect(() => {
    let storedProjectDetails = localStorage.getItem("project-details");
    storedProjectDetails = JSON.parse(storedProjectDetails);
    console.log(" storedProjectDetails ", storedProjectDetails);
    if (storedProjectDetails?.projects?.length > 0) {
      setProjectDetails(storedProjectDetails);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("project-details", JSON.stringify(projectDetails));
  }, [projectDetails]);

  let mainComponent;
  let selectedProject = projectDetails.projects.find(
    (project) => project.id === projectDetails?.selectedProject
  );
  console.log(
    "projectDetails ",
    projectDetails,
    "selectedProject ",
    selectedProject,
    "deleteProjectHandler",
    deleteProjectHandler
  );

  if (projectDetails?.selectedProject === undefined) {
    mainComponent = (
      <NoProject
        addNewProjectButtonHandler={addNewProjectButtonHandler}
      ></NoProject>
    );
  } else if (projectDetails?.selectedProject === null) {
    mainComponent = (
      <NewProject
        addNewProjectCancelHandler={addNewProjectCancelHandler}
        addNewProjectSubmitHandler={addNewProjectSubmitHandler}
      ></NewProject>
    );
  } else {
    mainComponent = (
      <ViewProject
        project={selectedProject}
        deleteProjectHandler={deleteProjectHandler}
        addTask={addTask}
        deleteTask={deleteTask}
        selectedProjectId={projectDetails?.selectedProject}
        tasks={projectDetails.tasks}
      />
    );
  }

  function addNewProjectButtonHandler() {
    setProjectDetails((prev) => {
      return { ...prev, selectedProject: null };
    });
  }

  function addNewProjectCancelHandler() {
    setProjectDetails((prev) => {
      return { ...prev, selectedProject: undefined };
    });
  }

  function addNewProjectSubmitHandler({ title, description, dueDate }) {
    setProjectDetails((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
        projects: [
          ...prev.projects,
          {
            id: Math.random(),
            title,
            description,
            dueDate,
          },
        ],
      };
    });
  }

  function selectProjectHandler(projectId) {
    setProjectDetails((prev) => {
      return { ...prev, selectedProject: projectId };
    });
  }

  function deleteProjectHandler(projectId) {
    setProjectDetails((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
        projects: [...prev.projects]?.filter(
          (project) => project.id !== projectId
        ),
      };
    });
  }

  // Tasks handling
  function addTask(taskDescription) {
    setProjectDetails((prevState) => {
      let newTask = {
        id: Math.random(),
        description: taskDescription,
        projectId: prevState.selectedProject,
      };
      return {
        ...prevState,
        tasks: prevState?.tasks ? [...prevState.tasks, newTask] : [newTask],
      };
    });
  }

  function deleteTask(taskId) {
    setProjectDetails((prevState) => {
      return {
        ...prevState,
        tasks: prevState?.tasks
          ? prevState?.tasks?.filter?.((task) => task.id != taskId)
          : [],
      };
    });
  }

  return (
    <>
      <main className="h-screen my-8 flex">
        <SideBar
          addNewProjectButtonHandler={addNewProjectButtonHandler}
          projects={projectDetails.projects}
          selectProjectHandler={selectProjectHandler}
        ></SideBar>
        {mainComponent}
      </main>
      {/* <Modal ref={modalRef} title={""} message={}></Modal> */}
    </>
  );
}

export default App;
