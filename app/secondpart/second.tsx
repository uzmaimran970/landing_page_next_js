import React from 'react';
import Image from 'next/image';
import styles from "./second.module.css"
import mypic from "../public/abc.jpeg"
import accomodation from "../public/accomodation.jpeg"
import adv from "../public/adv.jpg"

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.header}>
        <h1>About SafarTravelCo</h1>
        <p>Discover the world with our expertly curated travel experiences. Your adventure awaits!</p><hr/>
      </div>

      <div className={styles.features}>
        <div className={styles.feature}>
          <Image src={mypic} alt="Destination" width={300} height={200} />
          <h3>Amazing Destinations</h3>
          <p>Explore exotic locations around the globe with our personalized travel plans.</p>
        </div>

        <div className={styles.feature}>
          <Image src={accomodation} alt="Luxury Travel" width={300} height={200} />
          <h3>Luxury Accommodations</h3>
          <p>Stay in the best hotels and resorts that offer comfort and luxury.</p>
        </div>

        <div className={styles.feature}>
          <Image src={adv} alt="Adventure" width={300} height={200} />
          <h3>Adventures Await</h3>
          <p>Get ready for thrilling adventures and unforgettable experiences.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;