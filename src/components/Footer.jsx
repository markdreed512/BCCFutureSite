import React from "react";
import ".styles/FooterStyles.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";


 function Footer() {

    return (
            <footer style={{ backgroundColor: "#240D57", color: "white", padding: "1rem" }}>
                <p>© 2024 Baltimore Code and Coffee All rights reserved.</p>
                <ul className="social-list">
                    <li> <FontAwesomeIcon icon={faGithub}/></li>
                    <li> <FontAwesomeIcon icon={faFacebook} /></li>
                    <li> <FontAwesomeIcon icon={faLinkedin} /></li>
                    <li> <FontAwesomeIcon icon={faXTwitter} /></li>
                </ul>
                <ul className="footer-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/contact">Sponsors</Link></li>
                    <li><Link to="/events">Volunteers</Link></li>
                </ul>
            </footer>
    );
}

export default Footer;