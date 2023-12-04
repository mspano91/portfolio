import React from "react";
import style from "../Skills/skills.module.css";
import logoJs from "../assets/img/icons/JS.png";
import logoReact from "../assets/img/icons/REACT.png";
import logoHTML from "../assets/img/icons/HTML.png";
import logoCSS from "../assets/img/icons/CSS.png";
import logoRedux from "../assets/img/icons/REDUX.png";
import logoNode from "../assets/img/icons/NODE.png";
import logoEX from "../assets/img/icons/EX.png";
import logoPostSql from "../assets/img/icons/POSTGRESQL.png";
import logoFigma from "../assets/img/icons/FIGMA.png";
import logoGithub from "../assets/img/icons/GITHUB.png";
import logoXd from "../assets/img/icons/XD.png";
import logoSass from "../assets/img/icons/SASS.png";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

const logosA = [logoJs, logoReact, logoHTML, logoCSS, logoRedux, logoNode];
const logosB = [logoEX, logoPostSql, logoFigma, logoGithub, logoXd, logoSass];

export default function Skills({ darkMode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <motion.div
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      ref={ref}
      className={style.containerFather}
    >
      <div className={style.conainerAlineacion}>
        <div className={style.alignTittle}>
          <h1
            className={style.tittle}
            style={{ color: darkMode ? "#0d2020" : "#9A6F9B" }}
          >
            Skills
          </h1>
        </div>
        <div className={style.images}>
          {logosA.map((logo, index) => (
            <span key={index}>
              <img className={style.picture} src={logo} alt="" />
            </span>
          ))}
        </div>
        <div className={style.conainerAlineacion}>
          <div className={style.images}>
            {logosB.map((logo, index) => (
              <span key={index} className={style.logo}>
                <img className={style.picture} src={logo} alt="" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
