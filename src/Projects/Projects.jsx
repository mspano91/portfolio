import style from "../Projects/projects.module.css";
import EachProject from "../Projects/EachProject.jsx";
import EachProjectResponsive from "../Projects/EachProjectResponsive.jsx";
import React, { useState, useEffect } from "react";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

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
      <div className={style.videoContainer}>{projectComponent}</div>
      {/* </motion.div> */}
    </div>
  );
}
