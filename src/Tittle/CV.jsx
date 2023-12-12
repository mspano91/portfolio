import React from "react";
import style from "../Tittle/Cv.module.css";
import cv from "../Tittle/cv/SpanoCV.pdf";

export default function CV() {
  const handleDownload = () => {
    // Crea un elemento "a" para simular un clic en un enlace de descarga
    const link = document.createElement("a");
    link.href = cv; // Asigna la ruta de tu currículum
    link.download = "miCV.pdf"; // Puedes cambiar el nombre del archivo aquí
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <button onClick={handleDownload} className={style.Btn}>
        <svg
          className={style.svgIcon}
          viewBox="0 0 384 512"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
        </svg>
        <span className={style.icon2}></span>
        <span className={style.tooltip}>Download</span>
      </button>
    </div>
  );
}
