import "./NavBar.css";
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from "react";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import About from "../Pages/About";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-logo">Website</div>
        <div className="menu" onClick={toggleMenu}>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
        </div>
        <ul className={isMenuOpen ? "navbar-links active" : "navbar-links"}>
          <li>
            <NavLink to={"/"} onClick={toggleMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to={"/about"} onClick={toggleMenu}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to={"/services"} onClick={toggleMenu}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to={"/contact"} onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default NavBar;
