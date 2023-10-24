import GlobalStyles from "./GlobalStyles";
import React from "react";
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
  return (
    <HomeContainer id="home">
      <MouseTracker className="mouseTracker" />
      <HeroBackground />
      <div className="redLine"></div>
      <img className="grayStroke" src="/assets/grayStrokeS.png" />
      <p className="craft">
        <span>C</span>rafting
      </p>
      <section className="heroText">
        <div className="text" id="letterEffect">
          <h1 className="name">
            Davi<span>d</span> <span>{letterEffect}</span> <span>V</span>
            idal
          </h1>
          <h2>
            Crafting visually captivating experiences with Code and Creativity
          </h2>
          <p>
            I'm a junior Front-End web developer with a passion for design with
            an<span> eager desire to stand out!</span>
          </p>
        </div>
      </section>

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
    </HomeContainer>
  );
};
const HomeContainer = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  & .redLine {
    content: "";
    position: absolute;
    height: 100vh;
    width: 0.5rem;
    top: 0;
    left: 0;
    background: var(--color-red);
    z-index: 2;
  }

  & .grayStroke {
    position: absolute;
    top: 5rem;
    left: -10.5rem;
    height: 40rem;
  }
  & .craft {
    position: absolute;
    color: rgba(71, 71, 71, 0.7);
    font-size: 12rem;
    top: 20rem;
    left: 24rem;
    font-weight: bold;
    letter-spacing: 3rem;
    text-transform: uppercase;
    span {
      color: var(--color-red);
    }
  }
  & .heroText {
    position: relative;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    top: 39rem;
    width: 45%;
    padding-left: 7rem;
    &:hover span {
      color: var(--color-danger);
    }
    & .text {
      max-width: 750px;
      color: var(--color-gray);
      & h1 {
        font-size: 1.8rem;
        letter-spacing: 1rem;
        text-transform: uppercase;
      }
      & h2 {
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
  }
  & .contact {
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 20rem;
    width: 5rem;
    bottom: 0;
    left: 2rem;
    gap: 1rem;

    & li {
      position: relative;
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
      background-color: rgba(231, 60, 55, 0.4);
      border: 1px solid rgb(231, 60, 55);
      & a {
        display: grid;
        place-items: center;
        width: 100%;
        height: 100%;
        color: var(--color-white);
        font-size: 2rem;
        &:hover {
          color: var(--color-gray);
        }
      }
    }
  }
`;
const HeroBackground = styled.section`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-image: url("/assets/heroSbg2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1920px 990px;
  z-index: 0;
`;

const MouseTracker = styled.div`
  position: absolute;
  &:after {
    content: "";
    height: 7rem;
    width: 0.4rem;
    position: absolute;
    transition: top, opacity;
    transition-duration: 600ms;
    transition-timing-function: ease;
    background: linear-gradient(transparent, var(--color-white), transparent);
    opacity: 1;
    z-index: 4;
  }
`;
export default Home;
