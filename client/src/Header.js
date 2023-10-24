import GlobalStyles from "./GlobalStyles";
import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { LuGithub } from "react-icons/lu";
import { AiOutlineInstagram } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <HeaderContainer data-aos="fade-down" data-aos-delay="100">
      <nav class="navbar">
        <a href="#" class="logo">
          Your Logo
        </a>
        <ul class="menu">
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
      </nav>

      <ul className="contact">
        <li>
          <a href="#">
            <BiLogoLinkedin />
          </a>
        </li>
        <li>
          <a href="#">
            <LuGithub />
          </a>
        </li>
        <li>
          <a href="#">
            <AiOutlineInstagram />
          </a>
        </li>
      </ul>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header`
  height: 100%;
  width: 100%;
  color: var(--color-white);
  position: absolute;
  z-index: 3;

  .navbar {
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }

  .logo {
    color: #fff;
    font-size: 24px;
    text-decoration: none;
  }

  .menu {
    list-style: none;
    padding: 0;
    display: flex;
  }

  .menu li {
    margin: 0 10px;
  }

  .menu a {
    color: #fff;
    text-decoration: none;
  }

  .contact {
    display: none;
    flex-direction: column;
    align-items: center;
    align-content: center;
    list-style: none;
    align-self: center;

    li {
      margin: 10px 0;

      a {
        color: #fff;
        border: 1px solid rgb(231, 60, 55);
        border-radius: 50%;
        background-color: rgba(231, 60, 55, 0.5);
        padding: 6px;
        text-align: center;
        /* From https://css.glass */
        background: rgba(231, 60, 55, 0.4);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(4.6px);
        -webkit-backdrop-filter: blur(4.6px);
        border: 1px solid rgba(231, 60, 55, 0.53);
        /* From https://css.glass */
        svg {
          position: relative;
          top: calc(50% - 10px); /* 50% - 3/4 of icon height */
        }
      }
    }
  }
`;

export default Header;
