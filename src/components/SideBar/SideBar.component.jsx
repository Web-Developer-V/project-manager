import { useEffect } from "react";

import classes from "./SideBar.component.module.css";

const SideBar = ({ onClick, sideListValue }) => {
  useEffect(() => {
    window.Scrollbar.initAll();
  }, []);

  return (
    <aside>
      <h1 className={classes["aside-tit"]}>내 프로젝트</h1>
      <ul className={classes["project-list-box"]} data-scrollbar>
        <div>
          {sideListValue.length > 0 ? (
            sideListValue.map((project, index) => (
              <li key={index}>
                <button>{project.title}</button>
              </li>
            ))
          ) : (
            <li>프로젝트가 없습니다.</li>
          )}
        </div>
      </ul>
      <button onClick={onClick} className={classes["aside-btn"]}>
        <i className="xi-plus-min"></i>프로젝트 추가
      </button>
    </aside>
  );
};

export default SideBar;
