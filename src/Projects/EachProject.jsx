import React, { useEffect, useRef, useState } from "react";
import style from "../Projects/eachProject.module.css";
import videos from "../Projects/videos.js";
import { motion } from "framer-motion";

export default function EachProject() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div>
      <motion.div
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        className={style.carousel}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: -width, right: 0 }}
          dragElastic={0.9}
          className={style.innerCarousel}
        >
          {videos.map((video, index) => (
            <motion.div className={style.item}>
              <iframe
                key={index}
                width="560"
                height="315"
                src={video.video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div>
                <p>{video.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
