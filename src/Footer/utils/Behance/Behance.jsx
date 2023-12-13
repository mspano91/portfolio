import React from "react";
import be from "../Behance/be.svg";
import style from "../Behance/behance.module.css";

export default function Behance() {
  const behanceLink = "https://www.behance.net/mspanopabl3a5d";
  return (
    <div>
      <a href={behanceLink} className={style.Btn}>
        <span className={style.svgContainer}>
          <img src={be} alt="Behance" className={style.BehanceLogo} />
        </span>
        <span className={style.BG}></span>
      </a>
    </div>
  );
}
