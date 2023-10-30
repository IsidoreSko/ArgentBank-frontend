// import "./Style/main.css";

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import HomePage from "./Pages/HomePage";
// import SignIn from "./Pages/SignIn";
// import Error from "./Pages/Error";
// import User from "./Pages/User";
// import Footer from "./Layout/Footer";
// import { useSelector } from "react-redux";

// function App() {
//   const token = useSelector((state) => state.user.token);
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route
//           path="/User"
//           element={token ? <User /> : <Navigate to="/SignIn" />}
//         />
//         <Route path="*" element={<Error />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import "./Style/main.css";

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignIn from "./Pages/SignIn";
import Error from "./Pages/Error";
import User from "./Pages/User";
import Footer from "./Layout/Footer";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.token);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/User"
          element={token ? <User /> : <Navigate to="/SignIn" />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
