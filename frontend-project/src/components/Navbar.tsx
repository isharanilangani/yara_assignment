import { NavLink } from "react-router-dom";
import "../styles/global.css";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="custom-navbar fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <div>
            <span className="fw-bold fs-5">YARA</span>
            <br />
            <small className="text-muted">Application</small>
          </div>
        </div>

        {/* Desktop view navigation */}
        <ul className="nav d-none d-md-flex">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* Mobile view: hamburger + subscribe */}
        <div className="d-flex align-items-center">
          <div className="d-md-none me-3">
            <button
              className="btn btn-primary rounded-pill px-3 py-2 d-flex align-items-center"
              onClick={toggleDropdown}
              style={{ fontSize: "1.2rem" }}
            >
              <i className={`bi ${dropdownOpen ? "bi-x-lg" : "bi-list"}`}></i>
            </button>

            {dropdownOpen && (
              <div
                className="dropdown-menu d-block dropdown-fade"
                style={{ position: "absolute", top: "50px", right: "20px", zIndex: 1000 }}
              >
                <NavLink
                  to="/"
                  className="dropdown-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="dropdown-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  About
                </NavLink>
              </div>
            )}
          </div>

          <a
            className="btn btn-primary rounded-pill px-3 py-2 d-flex align-items-center"
            href="#subscribe"
          >
            <span className="d-none d-md-block">Subscribe</span>
            <i
              className="bi bi-envelope-fill d-block d-md-none"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
