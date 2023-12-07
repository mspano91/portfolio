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
import { Tooltip } from "@nextui-org/react";

const logosA = [
  { name: "javascript", icon: logoJs },
  { name: "react", icon: logoReact },
  { name: "Html", icon: logoHTML },
  { name: "Css", icon: logoCSS },
  { name: "Redux js", icon: logoRedux },
  { name: "Nodejs", icon: logoNode },
];
const logosB = [
  { name: "Express js", icon: logoEX },
  { name: "PostgreSQL", icon: logoPostSql },
  { name: "Figma", icon: logoFigma },
  { name: "GitHub", icon: logoGithub },
  { name: "XD adobe", icon: logoXd },
  { name: "Sass", icon: logoSass },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
//function to make icons animated

export default function Skills({ darkMode }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  }); // to make appear skills section while you are scrolling

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
            style={{ color: darkMode ? "#0d2020" : "#9A6F9B" }} //change color font depends of the state dark or light
          >
            Skills
          </h1>
        </div>
        <div className={style.images}>
          {logosA.map((logo, index) => (
            <>
              <Tooltip // resource that hovers over icon skills
                color="success"
                placement="top"
                content={
                  <p
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      padding: "5px",
                      color: "black",
                    }}
                  >
                    {logo.name}
                  </p>
                }
                key={index}
              >
                <motion.span
                  ref={ref}
                  target="_blank"
                  href={logo}
                  whileHover={{ scale: 1.1 }}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={Math.random()}
                  key={index}
                  className={style.logo}
                >
                  <img className={style.picture} src={logo.icon} alt="" />
                </motion.span>
              </Tooltip>
            </>
          ))}
        </div>
        <div className={style.conainerAlineacion}>
          <div className={style.images}>
            {logosB.map((logo, index) => (
              <Tooltip
                color="success"
                placement="bottom"
                content={
                  <p
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      padding: "5px",
                      color: "black",
                    }}
                  >
                    {logo.name}
                  </p>
                }
                key={index}
              >
                <motion.span
                  ref={ref}
                  target="_blank"
                  href={logo}
                  whileHover={{ scale: 1.1 }}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={Math.random()}
                  key={index}
                  className={style.logo}
                >
                  <img className={style.picture} src={logo.icon} alt="" />
                </motion.span>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
