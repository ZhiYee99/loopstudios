import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/pages/Home";
import { Flex, Spacer } from "@chakra-ui/react";


function App() {
  return (
    <Router> 
      <Flex flexDir={'column'} justifyContent='space-between'>
      <Navbar/>
      
      <Home/>
      
      <Footer/></Flex>
    </Router>
  );
}

export default App;
