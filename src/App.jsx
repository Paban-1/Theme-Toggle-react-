import React, { useEffect, useState } from "react";
// import './App.css'
import { ThemeProvider } from "./Context/Theme";
import ThemeButton from "./Components/ThemeButton";
import Card from "./Components/Card";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  // Actual change Theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center ">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/*thembtn*/}
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto ">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
