import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo" alt="Logo" title="First Project" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contect</li>
          <li>Cart Logo</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
