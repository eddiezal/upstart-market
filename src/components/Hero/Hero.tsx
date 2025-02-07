import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useScrollAnimation from "../../hooks/useScrollAnimation";


const Hero = () => {
  useScrollAnimation();

  // Typing Effect Logic (for Desktop)
  const text = "Fresh, Local, and Just for You.";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex(index + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <HeroWrapper className="fade-in">  
      {/* ✅ Animated Background + Floating Leaves */}
      <HeroBackground />
 

      <HeroContent>
        {/* ✅ Typing Effect with Mobile-Friendly Fade-in Alternative */}
        <Headline className="fadeIn">
          <TypingText>{displayText}</TypingText>
        </Headline>
        <Subheadline>
          A marketplace built for growers, makers, and food lovers like you.
        </Subheadline>
        <Description>
          Upstart Market is where home growers, small-batch artisans, and community connectors 
          come together to reshape how we eat. We make it easy to find fresh, handcrafted 
          products directly from the people who create them—no middleman, just real connections.
        </Description>

        {/* ✅ Animated CTA Button */}
        <CTAButton>Join the Movement</CTAButton>
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero;

/* Styled Components */
const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px); /* ✅ Adjusted for navbar height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  background: ${(props) => props.theme.colors.background};
  margin-top: 60px; /* ✅ Push Hero section below fixed navbar */
`;



const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #ff9800, #ff7300);
  z-index: -1;
  border: 2px solid red; /* TEMP DEBUG - REMOVE LATER */
`;


const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;

  border: 2px solid red; /* ✅ Temporary Debug Border */
`;

const Headline = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: black;
  margin: 0; /* ✅ Ensure no extra space */
`;

const TypingText = styled.span`
  border-right: 2px solid white;
  padding-right: 5px;
  animation: blink 0.7s step-end infinite;

  @keyframes blink {
    from, to { border-color: transparent; }
    50% { border-color: white; }
  }
`;

const Subheadline = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin: 0.5rem 0; /* ✅ Reduce margin */
`;


const Description = styled.p`
  font-size: 1rem;
  color: #444;
  margin: 0.5rem 0;
  line-height: 1.6;
`;

const CTAButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  background: #ff7300;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;