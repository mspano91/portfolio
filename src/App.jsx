import { useState } from "react";
import style from "../src/app.module.css";
import TittleSection from "./TittleSection";

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
            🌞Light mode
          </button>
        ) : (
          <button className={style.btnMode} onClick={handleDarkMode}>
            🌚 Dark Mode
          </button>
        )}
        <div className={style.container}>
          <TittleSection darkMode={darkMode} />
        </div>
      </div>
    </>
  );
}

export default App;
