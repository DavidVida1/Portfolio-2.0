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

  const openNav = () => {
    let element = document.getElementById("burgNav");
    element.classList.add("open");
  };

  const closeNav = (e) => {
    e.preventDefault();

    let element = document.getElementById("burgNav");
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
    <HeaderWrapper data-aos="fade-up" data-aos-delay="100" ref={reference}>
      <nav className="navbar">
        <NavLink to={"/"}>
          <img className="logo" src="/assets/DVlogo.png" />
        </NavLink>

        <div className="overlay" id="burgNav">
          <span className="closebtn" onClick={closeNav}>
            &times;
          </span>

          <p className="whiteLine"></p>

          {navList.map((item) => (
            <NavListItem
              className="overlay-Content"
              key={item._id}
              item={item}
            />
          ))}
        </div>
      </nav>

      <span className="burger" onClick={openNav}>
        &#9776;
      </span>
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

    & .overlay {
      display: flex;
      align-items: center;
      list-style: none;
      font-size: 1.8rem;
      padding: 1.5% 0%;
      justify-content: flex-end;

      &.open {
        width: 100%;
      }

      @media screen and (max-width: 1200px) {
        flex-direction: column;
        justify-content: center;
        gap: 60px;
      }
    }

    & .closebtn {
      position: absolute;

      color: var(--color-white);
      top: 17px;
      right: 50px;
      font-size: 4rem;
      z-index: 2;

      &:hover {
        color: var(--color-gray);
      }
    }
  }
  .burger {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    & .burger {
      display: block;
      position: absolute;
      top: 20px;
      right: 45px;
      font-size: 35px;
    }

    & .overlay {
      height: 100vh;
      width: 0;
      position: fixed; /* Stay in place */
      z-index: 4; /* Sit on top */
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.9); /* Black w/opacity */
      overflow-x: hidden; /* Disable horizontal scroll */
      transition: 0.5s;

      & .closebtn {
        position: absolute;
        top: 20px;
        right: 45px;
      }

      & .overlay-content {
        position: relative;
        display: flex;
        flex-direction: row;
        top: 25%; /* 25% from the top */
        width: 100%; /* 100% width */
        justify-content: flex-start;
        margin-top: 30px;
        text-align: left;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .closebtn {
      display: none;
    }
  }
`;

export default Header;
