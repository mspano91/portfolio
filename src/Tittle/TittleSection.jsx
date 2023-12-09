import React from "react";
import style from "../Tittle/tittle.module.css";
import { Link } from "react-scroll";

export default function TittleSection({ darkMode }) {
  return (
    <div>
      <div className={style.tittle}>
        <p className={style.presentation}>Hi everyone, my name is</p>
        {/* <p className={style.presentation}>working in progress..</p> */}
        <div className={style.colorName}>
          <h1 className={style.name}>Matias</h1>
          <h1
            style={{ color: darkMode ? "#0d2020" : "#9A6F9B" }}
            className={style.name}
          >
            Spano
          </h1>
          <h1 className={style.name}>.</h1>
        </div>
        <div className={style.Container}>
          <p
            className={style.headline}
            style={{ color: darkMode ? "#0d2020" : "#9A6F9B" }}
          >
            Front-End Developer
          </p>
          <p
            className={style.headline}
            style={{ color: darkMode ? "#0d2020" : "#9A6F9B" }}
          >
            UXUI Designer.
          </p>
        </div>
        <div className={style.containerBtns}>
          <Link smooth={true} duration={300} to="AboutMe" className={style.box}>
            About
          </Link>
          <Link smooth={true} duration={300} to="Skills" className={style.box}>
            Skills
          </Link>
          <Link
            smooth={true}
            duration={300}
            to="Projects"
            className={style.box}
          >
            Projects
          </Link>
          <Link smooth={true} duration={300} to="Contact" className={style.box}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
