import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Header () {
  return (
    <header>
      <nav>
        <ul>
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
