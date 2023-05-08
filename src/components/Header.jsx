import React from "react";
import "../styles/header.css";
import logo from "../Header_logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <React.Fragment>
      <div className="header">
        <Link to="/">
          <div className="header_info">
            <div className="logo_img">
              <img src={logo} alt="logo" />
            </div>
            <p className="logo_title">
              Minimal <span className="logo_title_slice">Shop</span>ping
            </p>
          </div>
        </Link>

        <div className="login">
          <Link to="/login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#5B6871;"
              className="bi bi-person-fill login-icon"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Header;
