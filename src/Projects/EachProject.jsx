import style from "../Projects/eachProject.module.css";
import videos from "../Projects/videos.js";

export default function EachProject() {
  return (
    <div>
      <div className={style.carousel}>
        <div className={style.innerCarousel}>
          {videos.map((video, index) => (
            <div className={style.item}>
              <iframe
                key={index}
                width="560"
                height="315"
                src={video.video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className={style.description}>
                <h2>{video.tittle}</h2>
                <p>{video.description}</p>
                <div className={style.links}>
                  <button>Github</button>
                  <button>Deploy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// import React, { useEffect, useRef, useState } from "react";
// import style from "../Projects/eachProject.module.css";
// import videos from "../Projects/videos.js";
// import { motion } from "framer-motion";

// export default function EachProject() {
//   const [width, setWidth] = useState(0);
//   const carousel = useRef();

//   useEffect(() => {
//     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
//   }, []);
//   return (
//     <div>
//       <motion.div
//         ref={carousel}
//         whileTap={{ cursor: "grabbing" }}
//         className={style.carousel}
//       >
//         <motion.div
//           drag="x"
//           dragConstraints={{ left: -width, right: 0 }}
//           dragElastic={0.9}
//           className={style.innerCarousel}
//         >
//           {videos.map((video, index) => (
//             <motion.div className={style.item}>
//               <iframe
//                 key={index}
//                 width="560"
//                 height="315"
//                 src={video.video}
//                 title="YouTube video player"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//               <div>
//                 <p>{video.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }
