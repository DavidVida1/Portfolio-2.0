import GlobalStyles from "./GlobalStyles";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Header from "./Header";
import "./cssReset.css";
import styled from "styled-components";
import form from "./assets/form.svg";

import Home from "./Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact.js";

function App() {
  /* const homeRef = useRef();
  const aboutRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  const sections = [
    { name: "header", ref: homeRef, active: true },
    { name: "about", ref: aboutRef, active: false },
    { name: "portfolio", ref: portfolioRef, active: false },
    { name: "contact", ref: contactRef, active: false },
  ];

  const handleSectionActive = (target) => {
    sections.map((section) => {
      console.log(section.ref.current);
    });
  };*/

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <PageWrapper />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
const PageWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("/assets/bgMontreal.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1920px 990px;
  z-index: 0;
  -webkit-mask-image: url(${form});
  mask-image: url(${form});
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100vh 100%;
  mask-size: 100vh 100%;
  -webkit-mask-position: left;
  mask-position: left;
`;

export default App;
