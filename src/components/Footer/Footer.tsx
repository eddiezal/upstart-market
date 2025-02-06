import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left: Logo & Tagline */}
        <div className={styles.brand}>
          <h2>Upstart Market</h2>
          <p>Connecting Growers, Makers, and Communities</p>
        </div>

        {/* Center: Quick Links */}
        <nav className={styles.links}>
          <a href="/">Home</a>
          <a href="/marketplace">Marketplace</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Right: Social Media Icons */}
        <div className={styles.social}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">🌐</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷</a>
        </div>
      </div>

      {/* Bottom Line & Copyright */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Upstart Market. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
