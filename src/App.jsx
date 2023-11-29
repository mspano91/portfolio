import { useState } from "react";
import style from "../src/app.module.css";
import TittleSection from "./Tittle/TittleSection.jsx";
import Picture from "./Tittle/Picture.jsx";
import AboutMe from "./AboutMe/AboutMe.jsx";

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
        <div>
          <div className={style.container1}>
            <TittleSection darkMode={darkMode} />
            <Picture />
          </div>
          <div className={style.container2}>
            <AboutMe />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
