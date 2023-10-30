import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//, useSelector
import Header from "../Layout/Header";
import iconError from "../Assets/Images/icon-error-form.jpg";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const authenticated = useSelector((state) => state.user.authenticated);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const forLogin = async () => {
    if (!email) {
      setErrorMessage("Please enter your email");
      return;
    }
    if (!password) {
      setErrorMessage("Please enter your password");
      return;
    }
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      dispatch({
        type: "LOGIN",
        payload: { token: data.body.token },
      });
      // console.log(data.body.token);
      navigate("/User");
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Connection error please try again");
    }
  };

  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="button" className="sign-in-button" onClick={forLogin}>
              Sign In
            </button>
          </form>
          {errorMessage && (
            <div>
              <img
                className="icon-error"
                src={iconError}
                alt="Logo Argent Bank"
              />
              <div className="form-error-message">{errorMessage}</div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Signin;
