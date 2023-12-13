import React from "react";
import style from "../Footer/Footer.module.css";
import Github from "./utils/Github/GitHub.jsx";
import Linkdin from "./utils/Linkedin/Linkedin.jsx";
import Information from "../Footer/utils/Information/Information.jsx";
import Behance from "../Footer/utils/Behance/Behance.jsx";

export default function MisLinks() {
  return (
    <>
      <div className={style.ContainerLogos}>
        <Github />
        <Linkdin />
        <Behance />
        <p className={style.tittle1}>Contact me!</p>
      </div>
      <div className={style.containerInfo}>
        <Information />
      </div>
    </>
  );
}
