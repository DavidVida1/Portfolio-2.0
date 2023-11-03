import GlobalStyles from "./GlobalStyles";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import navListData from "./data/myData";
import NavListItem from "./NavListItem";

const Header = ({ reference }) => {
  const navigate = useNavigate();
  const [navList, setNavList] = useState(navListData);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <HeaderWrapper data-aos="fade-up" data-aos-delay="100" ref={reference}>
      <nav class="navbar">
        <NavLink to={"/"}>
          <img className="logo" src="/assets/DVlogo.png" />
        </NavLink>

        <div class="menu">
          <p className="whiteLine"></p>

          {navList.map((item) => (
            <NavListItem key={item._id} item={item} />
          ))}
        </div>
      </nav>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.header`
  width: 100%;
  height: 65px;
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
      margin-top: 3px;
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
      width: 25rem;
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
