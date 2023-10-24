import GlobalStyles from "./GlobalStyles";
import React from "react";
import { useEffect, useState } from "react";
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
      <HeroText>
        <div className="text">
          <h1 id="letterEffect" className="name">
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
          <article>
            <button>Open To Work</button>
            <button>Resume </button>
          </article>
        </div>
      </HeroText>
    </HomeContainer>
  );
};
const HomeContainer = styled.section`
  width: 100%;
  height: 100%;
`;
const HeroBackground = styled.section`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-image: url("/assets/reheroBg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1920px 990px;
  z-index: 0;
`;

const HeroText = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  top: 300px;
  padding-left: 5rem;

  .text {
    max-width: 600px;
    color: var(--color-gray);
    h1 {
      font-size: 2rem;
      letter-spacing: 10px;
      text-transform: uppercase;
      &:hover span {
        color: var(--color-danger);
      }
    }
    h2 {
      font-size: 4rem;
      letter-spacing: 5px;
      color: var(--color-sepia);
    }
    p {
      font-size: 25px;
      color: white;
      span {
        font-size: 27px;
        text-shadow: rgba(216, 179, 144, 0.5) 1px 0 10px;
        color: var(--color-danger);
      }
    }
    article {
      display: flex;
      flex-direction: row;
      column-gap: 60px;
      padding-top: 18px;
      button {
        background-color: rgb(231, 60, 55);
        color: white;
        padding: 15px 40px;
        border-radius: 5px;
        width: 180px;
      }

      :last-child {
        background-color: transparent;
        border: 1px solid rgb(231, 60, 55);
      }

      button:hover {
        background-color: transparent;
        border: 1px solid rgb(231, 60, 55);
        transform: scale(1.05);
      }
      :last-child:hover {
        background-color: rgb(231, 60, 55);
        transform: scale(1.05);
      }
    }
  }
`;

const MouseTracker = styled.div`
  position: absolute;
  &:after {
    content: "";
    height: 70px;
    width: 2px;
    position: absolute;
    transition: top, opacity;
    transition-duration: 600ms;
    transition-timing-function: ease;
    background: linear-gradient(transparent, var(--color-danger), transparent);
    opacity: 1;
    z-index: 3;
  }
`;
export default Home;
