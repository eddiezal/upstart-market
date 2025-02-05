import React from "react";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Homegrown from "./components/Homegrown/Homegrown";

const App: React.FC = () => {
  return (
    <>
      <ComingSoon />
      <Homegrown
        title="Locally Grown Goodness"
        description="Discover fresh, locally sourced products."
        ctaLabel="Learn More"
        onCtaClick={() => alert("CTA Clicked!")}
      />
    </>
  );
};

export default App;
