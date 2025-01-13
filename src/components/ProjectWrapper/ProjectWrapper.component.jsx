import { useState } from "react";

import SideBar from "../SideBar/SideBar.component";
import NoProjectList from "../NoProJectList/NoProjectList.component";
import AddProjectList from "../AddProJectList/AddProjectList.component";

import "./ProjectWrapper.component.css";

const ProjectWrapper = () => {
  const [inputValue, setInputValue] = useState({});
  const [sideListValue, setSideListValue] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const handleTrue = () => {
    setIsActive(true);
  };

  const handleValue = (identifier, value) => {
    setInputValue((prev) => ({
      ...prev,
      [identifier]: value,
    }));
    console.log("Updated inputValue:", inputValue);
  };

  const sideList = (newProject) => {
    if (newProject && newProject.title) {
      setSideListValue((prevSideList) => [...prevSideList, newProject]); // 상태 업데이트
      console.log("Updated sideListValue:", [...sideListValue, newProject]); // 디버깅 로그
    } else {
      console.error("Invalid project data:", newProject);
    }
  };

  return (
    <div className="project-wrapper">
      <SideBar
        onClick={handleTrue}
        inputValue={inputValue}
        sideListValue={sideListValue}
      />
      {isActive ? (
        <AddProjectList
          handleValue={handleValue}
          onListAdd={sideList}
          inputValue={inputValue}
        />
      ) : (
        <NoProjectList />
      )}
    </div>
  );
};

export default ProjectWrapper;
