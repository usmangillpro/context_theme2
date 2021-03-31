import React from "react";
import FunctionalContext from "./FunctionalContext";
// import ClassContext from "./ClassContext";
import { ThemeProvider } from "./ThemeContext";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <FunctionalContext />
        {/* <ClassContext /> */}
      </ThemeProvider>
    </>
  );
};

export default App;
