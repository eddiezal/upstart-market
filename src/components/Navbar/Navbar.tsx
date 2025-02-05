import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Upstart Market</div>
      <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>Home</NavLink></li>
        <li><NavLink to="/marketplace" className={({ isActive }) => isActive ? styles.active : ""}>Marketplace</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ""}>About Us</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ""}>Contact</NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) => isActive ? styles.active : ""}>Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
