import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/pages/Products";
import Home from "./components/pages/Home";
import { Flex,} from "@chakra-ui/react"; 


function App() {
  return (
    <Router> 
      <Flex flexDir={'column'} justifyContent='space-between'>
        <Navbar/>
        
      </Flex>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
