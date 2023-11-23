import "./App.css";
import { useState } from "react";
import style from "../src/app.module.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  console.log(darkMode);

  return (
    <>
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        <div className={style.container}>
          <h1>este va ser mi portfolio JEJE</h1>
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
