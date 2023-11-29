import React from "react";
import style from "../Tittle/tittle.module.css";

export default function TittleSection({ darkMode }) {
  return (
    <div>
      <div className={style.tittle}>
        <p
          className={style.presentation}
          style={{ color: darkMode ? "#ffff" : "#000000" }}
        >
          Hi everyone, my name is
        </p>
        <h1
          className={style.name}
          style={{ color: darkMode ? "#ffff" : "#192336" }}
        >
          Matias Spano
        </h1>
        <div className={style.Container}>
          <p
            className={style.headline}
            style={{ color: darkMode ? "#9A6F9B" : "#4BAFAF" }}
          >
            Front-End Developer
          </p>
          <p
            className={style.headline}
            style={{ color: darkMode ? "#9A6F9B" : "#4BAFAF" }}
          >
            UXUI Designer.
          </p>
        </div>
      </div>
    </div>
  );
}
