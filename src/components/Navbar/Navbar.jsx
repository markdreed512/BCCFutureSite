// src/components/Navbar/Navbar.jsx
import "../BasicMenu/BasicMenu";
import BasicMenu from "../BasicMenu/BasicMenu";
import logo from "../../assets/rough_logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="BCC logo" className="navbar__icon" />
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <BasicMenu
            buttonId="navEventsButton"
            menuId="navEventsMenu"
            buttonTitle="Event"
            menuItems={[
              { name: "Type of Events", id: "type" },
              { name: "Event Calendar", id: "calendar" },
            ]}
          />
        </li>
        <li className="navbar__menu-item">About Us</li>
        <li className="navbar__menu-item">Blog</li>
        <li className="navbar__menu-item">Sponsor</li>
        <li className="navbar__menu-item">Volunteer</li>
      </ul>
    </nav>
  );
}

export default Navbar;
