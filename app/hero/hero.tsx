import React from 'react';
import styles from "./hero.module.css"
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div>
       <h1 className={styles.abc}>Welcome to SafarTravelCo</h1>
        <p className={styles.xyz}>Explore the world with us</p>
      </div>
    </section>
  );
};

export default Hero;
