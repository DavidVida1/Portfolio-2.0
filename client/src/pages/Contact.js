import GlobalStyles from "../GlobalStyles";
import React from "react";
import styled from "styled-components";

const Contact = ({ reference }) => {
  return (
    <ContactContainer id="contact" ref={reference}>
      <p>hi</p>
    </ContactContainer>
  );
};
const ContactContainer = styled.header``;

export default Contact;
