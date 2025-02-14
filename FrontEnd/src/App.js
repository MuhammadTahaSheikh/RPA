import React from "react";

import ContactUs from "./Components/Contact/ContactUs";
import Component from "./Components/AllComponent/Component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/About/AboutUs";
import TeamMember from "./Components/About/TeamMember";
import Dashboard from "./Components/Sign/Dashboard";
import SignIn from "./Components/Sign/SignIn";
import Category from "./Components/Sign/Category";
import Blog from "./Components/Sign/Blog";
import Calculator from "./Components/RpaCalculator/Calculator";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Component />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/team" element={<TeamMember />} />
          <Route exact path="/blogs" element={<Blog />} />
          <Route exact path="/rpa-calculator" element={<Calculator />} />

          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/admin-sign-in" element={<SignIn />} />
          <Route exact path="/category" element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
