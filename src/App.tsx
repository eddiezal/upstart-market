import React from "react";
import { BrowserRouter } from "react-router-dom"; 
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Homegrown from "./components/Homegrown/HomeGrown";

const App: React.FC = () => {
  return (
    <BrowserRouter> 
      <>
        <Navbar />
        <Hero /> {/* ✅ Added Hero Section */}
        <ComingSoon />
        <Homegrown />
      </>
    </BrowserRouter>
  );
};

export default App;
