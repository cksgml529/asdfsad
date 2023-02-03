import { Link } from "react-router-dom";

import "../style/header.scss";

import logo from "../assets/images/image/logo.png";
function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
