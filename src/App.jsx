import { useState, useRef } from "react";
import style from "../src/app.module.css";
import TittleSection from "./Tittle/TittleSection.jsx";
import AboutMe from "./AboutMe/AboutMe.jsx";
import Skills from "./Skills/Skills.jsx";
import Projects from "./Projects/Projects.jsx";
import Footer from "./Footer/Footer.jsx";
import Dark from "../src/DarkMood/Dark.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Desplazar suavemente hacia la parte superior
  };

  return (
    <>
      <div className={`${style.App} ${darkMode ? style["dark-mode"] : ""}`}>
        <div className={style.containerNav}>
          <button className={style.btnHome} onClick={handleGoToTop}>
            Home
          </button>
          <Dark darkMode={darkMode} onChangeDarkMode={handleDarkMode} />
        </div>
        <div className={style.containerFather}>
          <div className={style.container1}>
            <TittleSection darkMode={darkMode} />
          </div>

          <div id="AboutMe" className={style.container2}>
            <AboutMe darkMode={darkMode} />
          </div>

          <div id="Skills" className={style.container3}>
            <Skills darkMode={darkMode} />
          </div>
          <div id="Projects" className={style.container4}>
            <Projects darkMode={darkMode} />
          </div>
          <div id="Contact" className={style.container5}>
            <Footer darkMode={darkMode} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
