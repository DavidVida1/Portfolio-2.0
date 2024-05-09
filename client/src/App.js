import GlobalStyles from "./GlobalStyles";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import "./cssReset.css";
import styled from "styled-components";
import form from "./assets/form.svg";

import Home from "./Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <BrowserRouter basename="/portfolioV2/">
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

  background-position: top left;
  background-repeat: no-repeat;
  background-size: 100vh 100%;
  z-index: 0;
  -webkit-mask-image: url(${form}),
    linear-gradient(to bottom, #000, transparent 70%),
    linear-gradient(to bottom, transparent 98%, #000),
    linear-gradient(to top, transparent 55%, #000),
    linear-gradient(to left, transparent 75%, #000),
    linear-gradient(to right, transparent 100%, #000);
  mask-image: url(${form}), linear-gradient(to bottom, #000, transparent 70%),
    linear-gradient(to bottom, transparent 95%, #000),
    linear-gradient(to top, transparent 55%, #000),
    linear-gradient(to left, transparent 75%, #000),
    linear-gradient(to right, transparent 100%, #000);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100vh 100%;
  mask-size: 100vh 100%;

  -webkit-mask-position: 0 100%, 1%;
  mask-position: 0 100%, 1%;

  @media screen and not (aspect-ratio: 16/9) {
    background-size: 100vh 100%;
  }
`;

export default App;
