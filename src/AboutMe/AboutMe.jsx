import React from "react";
import { useRef } from "react";
import style from "../AboutMe/aboutMe.module.css";
import Picture from "../Tittle/Picture";
import { useScroll, motion } from "framer-motion";

export default function AboutMe({ darkMode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <motion.div
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      ref={ref}
      className={style.conainerAbout}
    >
      <div className={style.conainerAlineacion}>
        <div className={style.alignTittle}>
          <h1
            className={style.tittle}
            style={{ color: darkMode ? "#9A6F9B" : "#0d2020" }}
          >
            About me
          </h1>
        </div>
        <div className={style.imageAndText}>
          <div className={style.alineacionText}>
            <p className={style.text}>
              I'm a Full-Stack Developer with a clear inclination towards the
              Front-End, where the fusion of design and technology excites me.
              My journey began two years ago, and since then, I've fallen in
              love with the creativity and problem-solving that web development
              offers.
            </p>
            <p className={style.text}>
              My focus is on creating visually appealing and functional
              experiences. The aesthetics of the Front-End are not just a
              technical preference for me; it's a way to add a unique touch to
              each project. My two years of experience have been not only a
              technical learning but a creative journey that drives me to
              approach challenges with innovation.
            </p>
            <p className={style.text}>
              I am thrilled about the opportunity to bring my energy and
              expertise to a dynamic team and contribute to the success of
              exciting projects. My goal is to add value with every line of code
              and personal experience gained. I am ready to embark on this
              professional journey with enthusiasm and dedication! I'm looking
              forward to what the future holds as a Full-Stack Developer!
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
