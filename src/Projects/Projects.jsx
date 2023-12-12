import style from "../Projects/projects.module.css";
import EachProjectResponsive from "./ResponsiveProjects/EachProjectResponsive.jsx";
import EachProject from "../Projects/EachProject/EachProject.jsx";
import React, { useState, useEffect } from "react";

export default function Projects({ darkMode }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const projectComponent =
    windowWidth >= 750 ? <EachProject /> : <EachProjectResponsive />;

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
      <div className={style.videoContainer}>{projectComponent}</div>
    </div>
  );
}
