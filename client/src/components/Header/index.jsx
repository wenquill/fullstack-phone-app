import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './Header.module.scss';
import logo from './logo.svg';

function Header () {
  return (
    <header className={`container ${styles.header}`}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <div className={styles.imageContainer}>
            <img src={logo} alt='logo' className={styles.logo} />
          </div>
          <h3>Phones App</h3>
        </div>

        <ul className={styles.linksList}>
          <li>
            <Link className={styles.link} to='/'>Home</Link>
          </li>
          <li>
            <Link className={styles.link} to='/phones'>Phones</Link>
          </li>
          <li>
            <Link className={styles.link} to='/processors'>Processors</Link>
          </li>
          <li>
            <Link className={styles.link} to='/form'>Form</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
