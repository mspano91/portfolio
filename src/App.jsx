import { useState } from "react";
import style from "../src/app.module.css";
import TittleSection from "./Tittle/TittleSection.jsx";
import AboutMe from "./AboutMe/AboutMe.jsx";
import Skills from "./Skills/Skills.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  console.log(darkMode);

  return (
    <>
      <div className={`${style.App} ${darkMode ? style["dark-mode"] : ""}`}>
        {darkMode !== false ? (
          <button className={style.btnMode} onClick={handleDarkMode}>
            🌚 Dark Mode
          </button>
        ) : (
          <button className={style.btnMode} onClick={handleDarkMode}>
            🌞Light mode
          </button>
        )}
        <div className={style.containerFather}>
          <div className={style.container1}>
            <TittleSection darkMode={darkMode} />
          </div>
          <div id="AboutMe" className={style.container2}>
            <AboutMe darkMode={darkMode} />
          </div>
          <div id="skills" className={style.container3}>
            <Skills darkMode={darkMode} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
