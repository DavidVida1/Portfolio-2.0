import GlobalStyles from "../GlobalStyles";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { navPortfolio, projects } from "../data/myData";
import styled from "styled-components";

const Portoflio = ({ reference }) => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <PortoflioContainer
      id="portfolio"
      ref={reference}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="wrapper">
        <div className="container">
          <h2 class="hr-lines">About</h2>
          <p className="subtitle">my projects</p>
          <aside className="navSection">
            {navPortfolio.map((nav) => {
              return <NavLink className={"nav"}> {nav.category}</NavLink>;
            })}
          </aside>

          <aside className="projectSection">
            {projects.map((project) => {
              return <img className="a" src={project.projectImg} />;
            })}
          </aside>
        </div>
      </div>
    </PortoflioContainer>
  );
};
const PortoflioContainer = styled.header`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 3;

  .wrapper {
    position: absolute;
    height: 80%;
    margin-top: 20%;
    width: 70%;
    inset: 0;
    margin: auto;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.8px);
    -webkit-backdrop-filter: blur(8.8px);
    overflow: auto;
    .container {
      margin: 30px;

      & .hr-lines {
        font-weight: bold;
        position: relative;
        margin: 40px 0px 10px 0px;
        font-size: 1.8rem;
        letter-spacing: 0.3rem;
        text-transform: uppercase;
        color: var(--color-white);

        &.hr-lines:after {
          content: " ";
          display: block;
          height: 2px;
          width: 120px;
          transform: translate3d(100%, -0.9rem, 0);
          background: var(--color-danger);
        }
      }
      & .subtitle {
        color: var(--color-white);
        font-size: 3rem;
        text-transform: uppercase;
        font-weight: bold;
        margin: 15px 0px 25px 0px;
      }
      & .navSection {
        display: flex;
        flex-direction: row;
        justify-content: center;
        & .nav {
          font-size: 1.3rem;
          font-weight: bold;
          padding: 5px 10px;
          margin: 10px 3px;
          border-radius: 2px;
          color: var(--color-white);
          background: rgba(0, 0, 0, 0.3);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.6);
          transition: all 0.3s ease-in-out;

          &:hover {
            color: var(--color-sepia);
            box-shadow: 0 4px 30px rgba(216, 179, 144, 0.2);
          }
        }
      }

      .projectSection {
        display: grid;
        grid-gap: 10px;
        margin-top: 30px;
        grid-template-columns: repeat(4, 20%) /* 100px 100px 100px 100px*/;
        grid-template-rows: repeat(4, auto);
        justify-content: center;
        position: relative;
        .box {
          background-color: #444;
          color: #fff;
          border-radius: 5px;
          padding: 20px;
          font-size: 150%;
        }
        & img:first-child {
          width: 100%;
          height: 100%;
          grid-column: 1/3;
          grid-row: 1/3;
          border-radius: 5px;
          /* background-color: red;*/
        }

        & img:nth-child(2) {
          width: 100%;
          height: 100%;
          grid-column: 3;
          grid-row: 1;
          border-radius: 5px;
          /*background-color: blue;*/
        }
        & img:nth-child(3) {
          width: 100%;
          height: 100%;
          grid-column: 3;
          grid-row: 2;
          border-radius: 5px;
          /*  background-color: green;*/
        }
        & :nth-child(4) {
          width: 100%;
          height: 100%;
          grid-column: 4;
          grid-row: 1/3;
          border-radius: 5px;
          /*background-color: pink;*/
        }
        & :nth-child(5) {
          width: 100%;
          height: 100%;
          grid-column: 1/5;
          grid-row: 3/5;
          border-radius: 5px;
        }
      }
    }
  }
`;

export default Portoflio;
