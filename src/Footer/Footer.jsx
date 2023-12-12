import React from "react";
import MisLinks from "../Footer/MisLinks.jsx";
import style from "../Footer/Footer.module.css";

export default function Footer() {
  return (
    <div className={style.containerFooter}>
      <MisLinks />
    </div>
  );
}
