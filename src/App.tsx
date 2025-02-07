import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Homegrown from "./components/Homegrown/HomeGrown";
import Footer from "./components/Footer/Footer";

import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {/* 1. Apply global styles here */}
      <GlobalStyle />

      {/* 2. Add the button for toggling themes */}
      <button
        onClick={toggleTheme}
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          zIndex: 9999,
          padding: "0.5rem 1rem",
          backgroundColor: "white",
          color: "black",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>

      <BrowserRouter>
        {/* Main Navbar */}
        <Navbar />

        {/* Hero Section */}
        {/* <Hero />
        <div className="section-divider" /> Divider after Hero */}

        {/* Coming Soon Section */}
        {/* <ComingSoon />
        <div className="section-transition" /> Transition before next section */}

        {/* Homegrown Section (inside .page-container) */}
        <div className="page-container">
          <Homegrown />
        </div>

        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
