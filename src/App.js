import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import User from "./Pages/User";
import Footer from "./Layout/Footer";

import "./Style/main.css";

function App() {
  const token = useSelector((state) => state.token);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/User"
          element={token ? <User /> : <Navigate to="/Login" />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
