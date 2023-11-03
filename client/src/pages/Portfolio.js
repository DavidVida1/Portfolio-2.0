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
  const [navSelected, setNavSelected] = useState(
    navPortfolio[0].category
  ); /*valeur par defaut dans useState donc [0]*/
  const [selectedProjectsByCategory, setSelectedProjectsByCategory] =
    useState(projects);

  useEffect(() => {
    setSelectedProjectsByCategory(
      projects.filter((navItem) => {
        return (
          navItem.category == navSelected ||
          navSelected == navPortfolio[0].category
        );
      })
    );

    let btn = document.getElementsByClassName("nav");

    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove("active");

      if (btn[i].textContent == navSelected) btn[i].classList.add("active");
    }
  }, [navSelected]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <PortoflioSection
      id="portfolio"
      ref={reference}
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="wrapper">
        <div className="container">
          <h2 class="hr-lines">Portfolio</h2>
          <p className="subtitle">my projects</p>
          <aside className="navSection">
            {navPortfolio.map((nav) => {
              return (
                <button
                  className="nav active"
                  onClick={() => {
                    setNavSelected(nav.category);
                  }}
                >
                  {nav.category}
                </button>
              );
            })}
          </aside>

          <aside
            className="projectSection"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            {/*selectedCategory est definie a linterieure ddu useEffect et a donc acces a Navportfolio*/}
            {selectedProjectsByCategory.map((project) => {
              return (
                <a href={project.link}>
                  <img className="a" src={project.projectImg} />
                  <p className="overlay">{project.description}</p>
                </a>
              );
            })}
          </aside>
        </div>
      </div>
    </PortoflioSection>
  );
};
const PortoflioSection = styled.section`
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
          width: 130px;
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
          border-radius: 4px;
          color: var(--color-white);
          background: rgba(0, 0, 0, 0.3);

          transition: all 0.3s ease-in-out;
          box-shadow: 0 0px 4px rgba(255, 255, 255, 0.75);
          &:hover {
            color: var(--color-sepia);
            box-shadow: 0 4px 30px rgba(216, 179, 144, 0.2);
          }
          &.active {
            color: var(--color-primary);
          }
        }
      }

      & .projectSection {
        display: grid;
        grid-template-columns: 370px 370px;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 30px;
        & a {
          position: relative;
          & img {
            border-radius: 5px;
            height: 300px;
            width: 370px;
          }
          &:hover ::after {
            content: " ";
            position: absolute;
            height: 50px;
            width: 50px;
            top: 0;
            left: 0;
            border-top: 3px solid white;
            border-left: 3px solid white;
            margin: 15px;
          }

          &:hover ::before {
            content: " ";
            position: absolute;
            height: 50px;
            width: 50px;
            bottom: 0;
            right: 0;
            border-bottom: 3px solid white;
            border-right: 3px solid white;
            margin: 15px 15px;
          }

          .overlay {
          }
        }
      }
    }
  }
`;

export default Portoflio;
