// src/components/Navbar/Navbar.jsx
import React from "react";
import "../BasicMenu/BasicMenu";
import BasicMenu from "../BasicMenu/BasicMenu";
import { navbar, navbar__menu, navbar__icon } from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={navbar}>
      <img src="" alt="" className={navbar__icon} />
      <ul className={navbar__menu}>
        <li className="navbar__menu-item">
          <BasicMenu
            buttonTitle="Events"
            menuItems={[
              { name: "Type of Events", id: "type" },
              { name: "Event Calendar", id: "calendar" },
            ]}
          />
        </li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Sponsor</li>
        <li>Volunteer</li>
      </ul>
    </nav>
  );
}

export default Navbar;
