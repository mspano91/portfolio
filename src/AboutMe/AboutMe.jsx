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
              I am a Full-Stack Developer with a clear inclination towards
              Front-End, where I am passionate about the fusion of design and
              technology.
            </p>
            <p className={style.text}>
              As a lifelong resident of Buenos Aires, before delving into the
              world of technology, I obtained a degree in auctions and
              commercial mediation. I also completed studies in marketing and
              relevant UX/UI design courses.
            </p>
            <p className={style.text}>
              In 2022, I lived in Italy, specifically in Rome, where I learned
              to speak Italian and significantly improved my English while
              working in tourism. This journey served me well both personally
              and professionally, encompassing everything that comes with
              stepping out of one's comfort zone.
            </p>
            <p className={style.text}>
              In 2023, I took a leap and trained in modern Fullstack application
              development at Soy Henry Academy. I quickly assimilated new
              concepts, generated ambitious ideas, and maintained a positive
              attitude towards every challenge.
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
