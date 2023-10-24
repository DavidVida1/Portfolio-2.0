import GlobalStyles from "./GlobalStyles";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import "./cssReset.css";
import PortfolioContent from "./PortfolioContent";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Header />
      <Routes>
        <Route path="/" element={<PortfolioContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
