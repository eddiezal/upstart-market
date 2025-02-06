import React from "react";
import { BrowserRouter } from "react-router-dom"; 
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Homegrown from "./components/Homegrown/HomeGrown";
import Footer from "./components/Footer/Footer"; 

import "./styles/global.css"; // ✅ Import global styles

const App: React.FC = () => {
  return (
    <BrowserRouter> 
      <>
        <Navbar />
        
        {/* ✅ Hero Section */}
        <Hero />  
        <div className="section-divider"></div>  {/* ✅ One divider after Hero */}

        {/* ✅ ComingSoon Section */}
        <ComingSoon />  
        <div className="section-transition"></div>  {/* ✅ Smooth transition before next section */}

        {/* ✅ Homegrown Section (inside .page-container) */}
        <div className="page-container">
          <Homegrown />
        </div>

        {/* ✅ Footer */}
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
