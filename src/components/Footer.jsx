import React from "react";
import "../styles/Footer.css";
import { Link } from 'react-router-dom';
import { AiOutlineMail } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <>      
      <footer>
        <a
          href="/"
          className="footer__logo Ultrabold"
          style={{ color: "black" }}
        >
          Salaah.
        </a>
        <ul className="permalinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/company">Companies</Link>
          </li>
          <li>
            <Link to="/faq">Faq's</Link>
          </li>          
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="mailto: salaah@abes.ac.in">
            <AiOutlineMail />
          </a>
          <a href="https://www.instagram.com/salaah_abesec/">
            <FiInstagram />
          </a>          
        </div>

        <div className="footer__copyright">
          <small className="Regular">&copy; Salaah All rights reserved.</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
