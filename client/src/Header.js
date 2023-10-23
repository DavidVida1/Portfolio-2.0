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
  const openNav = () => {
    let element = document.getElementById("mqNav");
    element.classList.add("open");
  };

  const closeNav = (e) => {
    e.preventDefault();

    let element = document.getElementById("mqNav");
    element.classList.remove("open");
  };

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
        <div className="burger">
          <a href="#"> &#9776;</a>
        </div>

        <ul className="menu">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

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
      </nav>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header`
  color: var(--color-white);

  .navbar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    font-size: 2rem;
    right: 0;
    width: 75px;
    height: 100vh;
    padding-top: 15px;
    padding-bottom: 30px;

    .burger {
      font-size: 3rem;
      align-self: center;
      a {
        color: var(--color-white);
      }
    }
    .menu {
      display: none;
      list-style: none;
      text-align: right;
      li {
        margin: 10px 0;
        a {
          color: #fff;
          text-decoration: none;
          margin: 0 15px;
        }
      }
    }

    .contact {
      display: flex;
      flex-direction: column;
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
  }
`;

export default Header;
