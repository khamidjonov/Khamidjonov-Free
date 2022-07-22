import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="left brand-logo">
          <h5>Meals on Category</h5>
        </Link>
        <ul id="nav-mobile" className="right hide-on-small-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
