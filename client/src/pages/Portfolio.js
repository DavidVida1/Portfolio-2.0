import GlobalStyles from "../GlobalStyles";
import React from "react";
import styled from "styled-components";

const Portoflio = ({ reference }) => {
  return (
    <PortoflioContainer id="portfolio" ref={reference}>
      <p>hi</p>
    </PortoflioContainer>
  );
};
const PortoflioContainer = styled.header``;

export default Portoflio;
