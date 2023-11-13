import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../Assets/Images/argentBankLogo.webp";

function Header() {
  const authenticated = useSelector((state) => state.authenticated);
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();

  const forLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Logo Argent Bank"
        />
      </Link>
      <div>
        {authenticated ? (
          <>
            <Link className="main-nav-item" to="/User">
              <i className="fa fa-user-circle"> {username}</i>
            </Link>
            <Link className="main-nav-item" to="/" onClick={forLogout}>
              <i className="fa-solid fa-right-from-bracket"></i>
              Logout
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="./Login">
            <i className="fa fa-user-circle"></i>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
