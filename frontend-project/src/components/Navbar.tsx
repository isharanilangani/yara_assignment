// Navbar.tsx
import { NavLink } from "react-router-dom";
import "../styles/global.css";

const Navbar: React.FC = () => {
  return (
    <nav className="custom-navbar shadow-sm fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <div>
            <span className="fw-bold fs-5">YARA</span>
            <br />
            <small className="text-muted">Application</small>
          </div>
        </div>

        <ul className="nav">
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
              to="/details"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Details
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

        <a className="btn custom-btn rounded-pill px-4" href="#consultation">
          Free Consultation
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
