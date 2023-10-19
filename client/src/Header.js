import GlobalStyles from "./GlobalStyles";
import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer class="navbar">
      <a href="#" class="logo">
        Your Logo
      </a>
      <div class="menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: absolute;
  width: 100%;
  background-color: transparent;
  color: var(--color-white);
  padding: 15px 0;
  text-align: center;
  font-size: 2rem;
  z-index: 3;

  & a {
    float: left;
    display: block;
    color: #fff;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    &:hover {
      background-color: #555;
    }
  }
  & .logo {
    display: inline-block;

    margin-left: 20px;
    text-decoration: none;
  }

  & .menu {
    width: 100%;
    height: 100%;

    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      list-style: none;

      & li a {
        text-decoration: none;
        margin: 0 15px;
      }
    }
  }
`;

export default Header;
