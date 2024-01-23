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
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/phones'>Phones</Link>
          </li>
          <li>
            <Link to='/processors'>Processors</Link>
          </li>
          <li>
            <Link to='/form'>Form</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
