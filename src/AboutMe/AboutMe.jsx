import React from "react";
import { useRef } from "react";
import style from "../AboutMe/aboutMe.module.css";
import Picture from "../Tittle/Picture";
import { useScroll, motion } from "framer-motion";

export default function AboutMe({ darkMode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 7", "0.8 1"],
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.8, scale: scrollYProgress }}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
        x: window.innerWidth > 0 ? 0 : 0,
      }}
      ref={ref}
      className={style.conainerAbout}
    >
      <div className={style.conainerAlineacion}>
        <div className={style.alignTittle}>
          <h1
            className={style.tittle}
            style={{ color: darkMode ? "#0d2020" : "#9A6F9B" }}
          >
            About me
          </h1>
        </div>
        <div className={style.imageAndText}>
          <div className={style.alineacionText}>
            <p className={style.text}>
              As a lifelong student hailing from Buenos Aires, prior to delving
              into the world of technology, I earned a degree in auctions and
              commercial brokerage.
            </p>
            <p className={style.text}>
              {" "}
              I also pursued studies in marketing and relevant UX/UI and design
              courses. Throughout the years, I've consistently worked on
              improving my English and Italian.{" "}
            </p>
            <p className={style.text}>
              In 2023, I took a leap and underwent training in modern
              application development at Fullstack Soy Henry Academy. I quickly
              assimilated new concepts, bringing forth ambitious ideas and a
              positive attitude to every challenge.
            </p>
            <p className={style.text}>
              When I'm not coding, I usually engage in exercise, cook with
              friends, perhaps draw, or simply read and enhance my language
              skills.
            </p>
          </div>
          <div>
            <Picture />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
