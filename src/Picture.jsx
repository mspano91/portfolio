import React from "react";
import image from "./assets/img/mati8.png";
import style from "./tittle.module.css";

export default function Picture() {
  return (
    <div className={style.ContainerPicture}>
      <img className={style.picture} src={image} alt="" />
    </div>
  );
}
