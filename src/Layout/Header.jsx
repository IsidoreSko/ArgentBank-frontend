import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../Assets/Images/argentBankLogo.png";

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
          // Ajout d'une info-bulle:
          title="Back to the homepage"
        />
      </Link>
      <div>
        {authenticated ? (
          <>
            <Link className="main-nav-item" to="/">
              <i className="fa fa-user-circle"> {username}</i>
            </Link>
            <Link className="main-nav-item" to="/" onClick={forLogout}>
              <i className="fa-solid fa-right-from-bracket"></i>
              Logout
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="./SignIn">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
