import React from "react";
import style from "../Projects/projects.module.css";
import EachProject from "../Projects/EachProject.jsx";
import EachProjectResponsive from "../Projects/EachProjectResponsive.jsx";
// import { useScroll, motion } from "framer-motion";
// import { useRef } from "react";

export default function Projects({ darkMode }) {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0 7", "1.33 1"],
  // });
  // to make appear skills section while you are scrolling

  return (
    <div className={style.conainerAlineacion}>
      {/* <motion.div
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
        ref={ref}
      > */}
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
        <EachProjectResponsive />
      </div>
      {/* </motion.div> */}
    </div>
  );
}
