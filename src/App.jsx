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
        <div className={style.container}>
          <TittleSection />
          {darkMode !== false ? (
            <button onClick={handleDarkMode}>🌞</button>
          ) : (
            <button onClick={handleDarkMode}>🌚</button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
