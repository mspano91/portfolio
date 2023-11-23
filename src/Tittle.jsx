import React from "react";
import style from "../src/tittle.module.css";

export default function Tittle() {
  return (
    <div className={style.tittle}>
      <p className={style.presentation}>Hi everyone, my name is</p>
      <h1 className={style.name}>Matias P Spano</h1>
      <p className={style.headline}>Front End Developer / UXUI Designer</p>
    </div>
  );
}
