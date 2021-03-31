import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

const FunctionalContext = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
    width: "70px",
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle theme</button>
      <div style={themeStyles}>Functional Context</div>;
    </>
  );
};

export default FunctionalContext;
