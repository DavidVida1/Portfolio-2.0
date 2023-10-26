import GlobalStyles from "./GlobalStyles";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import Header from "./Header";
import "./cssReset.css";

import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
