import React from "react";
import style from "../Tittle/tittle.module.css";
import { Link } from "react-scroll";

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
          <Link smooth={true} duration={300} to="AboutMe" className={style.box}>
            About
          </Link>
          <Link smooth={true} duration={300} to="" className={style.box}>
            Skills
          </Link>
          <Link smooth={true} duration={300} to="" className={style.box}>
            Projects
          </Link>
          <Link smooth={true} duration={300} to="" className={style.box}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
