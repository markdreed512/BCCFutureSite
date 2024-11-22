// src/components/Navbar/Navbar.jsx
import "../BasicMenu/BasicMenu";
import BasicMenu from "../BasicMenu/BasicMenu";
import logo from "../../assets/rough_logo.png";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function navigateToEventTypesPage() {
    navigate("/event-types");
  }

  function navigateToEventCalPage() {
    navigate("/event-calendar");
  }

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="BCC logo" className="navbar__icon" />
      </Link>
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <BasicMenu
            buttonId="navEventsButton"
            menuId="navEventsMenu"
            buttonTitle="Event"
            menuItems={[
              {
                name: "Type of Events",
                id: "type",
                handleClick: navigateToEventTypesPage,
              },
              {
                name: "Event Calendar",
                id: "calendar",
                handleClick: navigateToEventCalPage,
              },
            ]}
          />
        </li>
        <li className="navbar__menu-item">
          <Link className="navbar__link" to="/about-us">
            About Us
          </Link>
        </li>
        <li className="navbar__menu-item">
          <Link className="navbar__link" to="/blog">
            Blog
          </Link>
        </li>
        <li className="navbar__menu-item">
          <Link className="navbar__link" to="/sponsors">
            Sponsor
          </Link>
        </li>
        <li className="navbar__menu-item">
          <Link className="navbar__link" to="/volunteer">
            Volunteer
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
