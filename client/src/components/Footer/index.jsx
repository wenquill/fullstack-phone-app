import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaTwitter
} from 'react-icons/fa'
import styles from './Footer.module.scss';

function Footer () {
  return (
    <footer className={styles.container}>
      <div>&copy;2024 Phones App. All rights reserved</div>
      <div className={styles.iconsContainer}>
        <FaFacebookSquare fill='#fff' className={styles.icon} />
        <FaInstagram fill='#fff' className={styles.icon} />
        <FaYoutube fill='#fff' className={styles.icon} />
        <FaTwitter fill='#fff' className={styles.icon} />
      </div>
    </footer>
  );
}

export default Footer;
