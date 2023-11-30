import React from "react";
import style from "../AboutMe/aboutMe.module.css";
import Picture from "../Tittle/Picture";

export default function AboutMe() {
  return (
    <div className={style.conainerAbout}>
      <div className={style.conainerAlineacion}>
        <h1 className={style.tittle}>About me</h1>
        <div className={style.imageAndText}>
          <div className={style.alineacionText}>
            <p className={style.text}>
              How do I describe myself? I'm a multitasking individual who can
              contribute various types of knowledge acquired through my
              curiosity in different subjects. I'm a social and empathetic
              person who loves making friends and working in a team, regardless
              of the language. I'd love to work and communicate in English,
              Italian, or Spanish, and I'm even open to learning another
              language if needed.
            </p>
            <p className={style.text}>
              Lately, I've been learning and working on various tech projects as
              a Full Stack developer. To be honest, I prefer the Front End,
              which is what I'm currently looking for, but I’m always open to
              learning new technologies.
            </p>
            <p className={style.text}>
              I can also contribute design and marketing insights and
              experiences because I've been interested in those areas for some
              time and have taken relevant courses. I hope my experience and
              skills will be useful for you.
            </p>
          </div>
          <div>
            <Picture />
          </div>
        </div>
      </div>
    </div>
  );
}
