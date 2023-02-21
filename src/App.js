import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navigation/Navbar";
import Search from "./Pages/Search";
import HowItWorks from "./Pages/HowItWorks";
import IAAdvertising from "./Pages/IAAdvertising";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <main className=" ml-8 mr-8 max-w-[1200px] flex sm:ml-24  sm:mr-24 mt-[-320px] sm:mt-[-285px]  ">
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/advertizing" element={<IAAdvertising />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
