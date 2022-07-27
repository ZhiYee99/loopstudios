import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Swiper from "./components/Swiper";



function App() {
  return (
    <Router>
      <Navbar/>
      <Swiper/>
      <Footer/>
    </Router>
  );
}

export default App;
