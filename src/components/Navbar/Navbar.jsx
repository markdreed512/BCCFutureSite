<<<<<<< HEAD
// src/components/Navbar.jsx
import "./Navbar.css";
=======
// src/components/Navbar/Navbar.jsx
import "../BasicMenu/BasicMenu";
import BasicMenu from "../BasicMenu/BasicMenu";
<<<<<<< HEAD
import { navbar, navbar__menu, navbar__icon } from "./Navbar.module.css";
>>>>>>> 53a2f05 (Add MUI button menu with some updates to styling)
=======
import logo from "../../assets/rough_logo.png";
import "./Navbar.css";
>>>>>>> 146e048 (add logo and final fixes for nav menu)

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
