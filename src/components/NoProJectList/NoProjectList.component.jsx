import logo from "../../assets/no-projects.png";

import "./NoProjectList.component.css";

const NoProjectList = () => {
  return (
    <section className="cm-project-list-style NoProject-list-container">
      <figure>
        <img src={logo} alt={logo} />
      </figure>
      <h1>선택된 프로젝트가 없습니다.</h1>
      <p>프로젝트를 선택하거나 새 프로젝트를 시작하세요</p>
      <button>
        <i className="xi-plus-min"></i>새 프로젝트 추가
      </button>
    </section>
  );
};

export default NoProjectList;
