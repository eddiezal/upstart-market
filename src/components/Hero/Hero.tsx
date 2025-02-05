import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.headline}>Fresh, Local, and Just for You.</h1>
        <p className={styles.subheadline}>
          A marketplace built for growers, makers, and food lovers like you.
        </p>
        <p className={styles.description}>
          Upstart Market is where home growers, small-batch artisans, and community connectors 
          come together to reshape how we eat. We make it easy to find fresh, handcrafted 
          products directly from the people who create them—no middleman, just real connections.
        </p>
        <button className={styles.cta}>Join the Movement</button>
      </div>
    </section>
  );
};

export default Hero;
