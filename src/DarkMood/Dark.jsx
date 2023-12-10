import React from "react";
import style from "../DarkMood/dark.module.css";

export default function Dark({ darkMode, onChangeDarkMode }) {
  const handleCheckboxChange = () => {
    onChangeDarkMode();
  };

  return (
    <div className={style.conainerSwitch}>
      <label className={style.switch}>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={handleCheckboxChange}
        />
        <span className={style.slider}></span>
      </label>
    </div>
  );
}
