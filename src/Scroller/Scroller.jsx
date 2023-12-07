import React from "react";
import style from "../Scroller/scroller.module.css";

export default function Scroller() {
  return (
    <div className={style.containerScroll}>
      <div className={style.scrolldown}>
        <div className={style.chevrons}>
          <div className={style.chevrondown}></div>
          <div className={style.chevrondown}></div>
        </div>
      </div>
    </div>
  );
}
