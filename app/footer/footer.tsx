
import styles from './Footer.module.css'; 
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Travel Company. All rights reserved.</p>
        <ul className={styles.links}>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms">Terms & Conditions</a></li>
        </ul>
        <div className={styles.socialMedia}>
          <a href="https://facebook.com"><FaFacebook/>Facebook</a>
          <a href="https://twitter.com"><FaTwitter/>Twitter</a>
          <a href="https://instagram.com"><FaInstagram/>Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;