import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import JohnLogo from "../assets/john.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <NavLink
          className="navbar-brand d-flex align-items-center justify-content-center"
          style={{ width: "50px", height: "50px" }}
          to="/"
        >
          <h1 style={{ font: "24px" }}>John</h1>
        </NavLink>

        {/* Custom toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item d-block d-md-none">
              <NavLink
                className="nav-link"
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/works"
                onClick={() => setIsOpen(false)}
              >
                Work
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/blog"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
