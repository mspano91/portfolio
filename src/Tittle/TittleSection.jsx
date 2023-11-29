import React from "react";
import style from "../Tittle/tittle.module.css";

export default function TittleSection({ darkMode }) {
  return (
    <div>
      <div className={style.tittle}>
        <p className={style.presentation}>Hi everyone, my name is</p>
        <h1 className={style.name}>Matias Spano</h1>
        <div className={style.Container}>
          <p
            className={style.headline}
            style={{ color: darkMode ? "#9A6F9B" : "#0d2020" }}
          >
            Front-End Developer
          </p>
          <p
            className={style.headline}
            style={{ color: darkMode ? "#9A6F9B" : "#0d2020" }}
          >
            UXUI Designer.
          </p>
        </div>
        <div className={style.containerBtns}>
          <div className={style.box}>About</div>
          <div className={style.box}>Skills</div>
          <div className={style.box}>Projects</div>
          <div className={style.box}>Contact</div>
        </div>
      </div>
    </div>
  );
}
