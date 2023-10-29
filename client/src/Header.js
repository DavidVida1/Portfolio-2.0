import GlobalStyles from "./GlobalStyles";
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import navListData from "./data/NavListData";
import NavListItem from "./NavListItem";

const Header = ({ reference }) => {
  const [navList, setNavList] = useState(navListData);

  const handleNavOnClick = (id, e) => {
    const newNavList = navList.map((nav) => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    setNavList(newNavList);
    e.preventDefault();
    console.log(id);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <HeaderContainer data-aos="fade-down" data-aos-delay="100" ref={reference}>
      <nav class="navbar">
        <a href="/">
          <img className="logo" src="/assets/DVlogo.png" />
        </a>
        <ul class="menu">
          <li>
            <p className="whiteLine"></p>
          </li>
          {navList.map((item) => (
            <NavListItem
              key={item._id}
              item={item}
              navOnClick={handleNavOnClick}
            />
          ))}
        </ul>
      </nav>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header`
  width: 100%;
  height: auto;
  color: var(--color-white);
  position: absolute;
  font-weight: bold;
  z-index: 3;

  & .navbar {
    position: relative;
    display: flex;
    font-size: 2rem;
    padding: 0rem 2rem;
    align-items: flex-start;
    justify-content: space-between;

    & .logo {
      position: relative;
      width: 20%;
      height: 20%;
      font-size: 2.4rem;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
      -moz-box-shadow: 5px 5px 10px rgba (0, 0, 0, 0.6);
      -webkit-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
      -o-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
      border-radius: 200px;
      transition: all 0.3s ease-in-out;
      &:hover {
        box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.6);
        -moz-box-shadow: 5px 5px 10px rgb (255, 255, 255, 0.6);
        -webkit-box-shadow: 5px 5px 10px (255, 255, 255, 0.6);
        -o-box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.6);
      }
    }

    & .whiteLine {
      display: block;
      content: "";
      height: 0.2rem;
      width: 10rem;
      background: var(--color-white);
    }

    & .menu {
      display: flex;
      align-items: center;
      list-style: none;
      font-size: 1.8rem;
      padding: 1.5% 0%;
    }
  }
`;

export default Header;
