import GlobalStyles from "./GlobalStyles";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { LuGithub } from "react-icons/lu";
import { AiOutlineInstagram } from "react-icons/ai";
import styled from "styled-components";

const Home = () => {
  const [letterEffect, setLetterEffect] = useState("A");
  let letterChange = true;

  useEffect(() => {}, [letterEffect]);

  useEffect(() => {
    const mouseTracker = document.querySelector(".mouseTracker");

    document.addEventListener("mousemove", (e) => {
      let y = e.pageY;
      mouseTracker.style.top = y + "px";

      mouseTracker.style.display = "block";
    });

    document.addEventListener("mouseout", () => {
      mouseTracker.style.display = "none";
    });

    const hackerEffect = () => {
      const letters = "abcdefghijklmnopqrstuvwxyz";
      let count = 0;
      let interval = setInterval(() => {
        if (letterChange) {
          setLetterEffect(
            letters.split("")[Math.floor(Math.random() * 26)].toUpperCase()
          );
        }
        count++;
        if (count > 15) {
          clearInterval(interval);
          if (letterChange) {
            setLetterEffect("E");
          }
        }
      }, 30);
    };
    const hackerLetter = document.querySelector("#letterEffect");
    hackerLetter.addEventListener("mouseover", () => {
      letterChange = true;
      hackerEffect();
    });
    hackerLetter.addEventListener("mouseout", () => {
      letterChange = false;
      setLetterEffect("A");
    });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <HomeSection id="home">
      <MouseTracker className="mouseTracker" />

      {/*<div className="redLine"></div>*/}

      <div className="craft" data-aos="fade-left" data-aos-delay="100">
        <h1>
          <span>C</span>rafting
        </h1>
        <p className="craftLine"></p>
      </div>

      <section className="heroSection" data-aos="fade-up" data-aos-delay="100">
        <aside className="heroText">
          <div className="text" id="letterEffect">
            <h2 className="name">
              Davi<span>d</span> <span>{letterEffect}</span> <span>V</span>
              idal
            </h2>
            <h3>
              Crafting visually captivating experiences with Code and Creativity
            </h3>
            <p>
              I'm a junior Front-End web developer with a passion for design
              with an<span> eager desire to stand out!</span>
            </p>
          </div>

          <ul className="contact">
            <li>
              <p></p>
            </li>
            <li className="link">
              <a href="#">
                <BiLogoLinkedin />
              </a>
            </li>
            <li className="link">
              <a href="#">
                <LuGithub />
              </a>
            </li>
            <li className="link">
              <a href="#">
                <AiOutlineInstagram />
              </a>
            </li>
            <li>
              <p></p>
            </li>
          </ul>
        </aside>
      </section>
    </HomeSection>
  );
};
const HomeSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;

  /*& .redLine {
    content: "";
    position: absolute;
    height: 100vh;
    width: 0.5rem;
    top: 0;
    left: 0;
    background: var(--color-black);
    z-index: 2;
  }*/

  & .craft {
    position: absolute;
    display: flex;
    align-items: center;
    color: rgba(71, 71, 71, 0.7);
    font-size: 6rem;
    top: 20rem;
    right: 8rem;
    font-weight: bold;
    letter-spacing: 2rem;
    text-transform: uppercase;
    span {
      color: var(--color-danger);
    }

    & .craftLine {
      content: "";
      height: 0.3rem;
      width: 25rem;
      background: var(--color-white);
    }
  }

  & .heroSection {
    position: absolute;
    top: 40%;
    right: -50%;
    width: 100%;
    & .heroText {
      display: flex;
      flex-direction: column;
      font-family: var(--font-abril);
      width: 100%;

      &:hover span {
        color: var(--color-danger);
      }
      & .text {
        max-width: 37%;
        color: var(--color-gray);
        & h2 {
          font-size: 1.8rem;
          letter-spacing: 1rem;
          text-transform: uppercase;
        }
        & h3 {
          font-size: 5rem;
          letter-spacing: 0.5rem;
          color: var(--color-sepia);
        }
        & p {
          font-size: 2.7rem;
          color: white;
          & span {
            font-size: 2.7rem;
            text-shadow: rgba(216, 179, 144, 0.5) 1px 0 10px;
            color: var(--color-danger);
          }
        }
      }
      & .contact {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        height: 100%;
        width: 35%;
        gap: 2rem;

        & li p {
          content: "";
          height: 0.2rem;
          width: 8rem;
          background: var(--color-white);
        }
        & .link {
          position: relative;
          height: 4rem;
          width: 4rem;
          border-radius: 50%;
          background-color: rgba(0, 0, 0);
          border: 1px solid rgb(55, 55, 55);
          & a {
            display: grid;
            place-items: center;
            width: 100%;
            height: 100%;
            color: var(--color-white);
            font-size: 2rem;
            transition: all 0.3s ease-in-out;
            &:hover {
              color: var(--color-danger);
            }
          }
        }
      }
    }
  }
`;

const MouseTracker = styled.div`
  position: absolute;
  &:after {
    content: "";
    height: 7rem;
    width: 0.5rem;
    position: absolute;
    transition: top, opacity;
    transition-duration: 600ms;
    transition-timing-function: ease;
    background: linear-gradient(transparent, var(--color-danger), transparent);
    opacity: 1;
    z-index: 8;
  }
`;
export default Home;
