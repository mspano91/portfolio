import React from "react";
import style from "../Projects/EachProjectResponsive.module.css";
import videos from "../Projects/videos.js";

export default function EachProjectResponsive() {
  return (
    <div>
      <div className={style.carousel}>
        <div className={style.innerCarousel}>
          {videos.map((video, index) => (
            <div className={style.item}>
              <img className={style.picture} src={video.imagen} alt="" />
              <div className={style.description}>
                <h2>{video.tittle}</h2>
                <p>{video.description}</p>
                <div className={style.links}>
                  <span className={style.box}>Github</span>
                  <span className={style.box}>Deploy</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
