import React from "react";
import style from "../Projects/projects.module.css";
import EachProject from "../Projects/EachProject.jsx";

export default function Projects({ darkMode }) {
  return (
    <div className={style.conainerAlineacion}>
      <div className={style.alignTittle}>
        <h1
          className={style.tittle}
          style={{ color: darkMode ? "#0d2020" : "#9A6F9B" }}
        >
          Projects
        </h1>
      </div>
      <div className={style.videoContainer}>
        <EachProject />
      </div>
    </div>
  );
}
