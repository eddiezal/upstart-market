import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import FloatingLeaves from "./FloatingLeaves"; // ✅ Floating leaves component

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
    <section className={`${styles.heroWrapper} fade-in`}>  
      {/* ✅ Animated Background + Floating Leaves */}
      <div className={styles.heroBackground}></div>
      <FloatingLeaves />  

      <div className={styles.hero}>
        <div className={styles.content}>
          {/* ✅ Typing Effect with Mobile-Friendly Fade-in Alternative */}
          <h1 className={`${styles.headline} ${styles.fadeIn}`}>
            <span className={styles.typingText}>{displayText}</span>
          </h1>
          <p className={styles.subheadline}>
            A marketplace built for growers, makers, and food lovers like you.
          </p>
          <p className={styles.description}>
            Upstart Market is where home growers, small-batch artisans, and community connectors 
            come together to reshape how we eat. We make it easy to find fresh, handcrafted 
            products directly from the people who create them—no middleman, just real connections.
          </p>

          {/* ✅ Animated CTA Button */}
          <button className={styles.ctaButton}>Join the Movement</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
