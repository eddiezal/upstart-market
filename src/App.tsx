import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Homegrown from "./components/Homegrown/HomeGrown";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <ComingSoon />
      <Homegrown
        //title="Locally Grown Goodness"
        //description="Discover fresh, locally sourced products."
        //ctaLabel="Learn More"
        //onCtaClick={() => alert("CTA Clicked!")}
      />
    </>
  );
};

export default App;
