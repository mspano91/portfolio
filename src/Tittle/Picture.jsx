import React from "react";
import image from "../assets/img/mati8.png";
import style from "./tittle.module.css";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

export default function Picture() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
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
      className={style.ContainerPicture}
    >
      <img className={style.picture} src={image} alt="" />
    </motion.div>
  );
}
