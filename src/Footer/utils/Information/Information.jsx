import React from "react";
import style from "../../Footer.module.css";

export default function Information() {
  return (
    <div className={style.containerInformation}>
      <div className={style.description}>
        <p>
          Developed using Visual Studio Code and powered by Vite.js, this
          project incorporates CSS modules for styling and is deployed
          seamlessly through Vercel. Typography is stylized with 'Syncopate' for
          titles, 'Inter' for text elements, and 'Gravitas' for buttons.
        </p>
      </div>
      <div className={style.sign}>
        <p>Developed and designed by Spano Matias, © Copyright 2023. </p>
      </div>
    </div>
  );
}
