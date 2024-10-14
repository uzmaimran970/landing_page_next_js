import React from 'react';
import Link from 'next/link';
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>safarTravelCO</h1>
      </div>
      <ul className={styles.menu}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/services">Service</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;