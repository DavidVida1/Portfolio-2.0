import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import SplashScreen from "./SplashScreen";

const PortfolioContent = () => {
  const [portfolioVisibility, setPortfolioVisibility] = useState(false);

  const handleMouseOver = () => {
    const currentLogo = document.getElementById("logo");
    currentLogo.classList.add("hoverEffect");
  };

  const handleMouseOut = () => {
    const currentLogo = document.getElementById("logo");
    currentLogo.classList.remove("hoverEffect");
  };

  useEffect(() => {
    SplashScreen();
  }, []);

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
  }, []);

  return (
    <>
      {portfolioVisibility ? (
        <Home />
      ) : (
        <Container>
          <div id="tiles"></div>

          <MouseTracker className="mouseTracker" />

          <article>
            <Logo id="logo" />

            <button
              onClick={() => setPortfolioVisibility(true)}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              data-text="Start"
            >
              Start
            </button>
          </article>
        </Container>
      )}
    </>
  );
};

const Container = styled.main`
  position: relative;
  z-index: 5;
  #tiles {
    height: calc(100vh - 1px);
    width: calc(100vw - 1px);
    position: relative;
    z-index: 0;

    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    grid-template-rows: repeat(var(--rows), 1fr);
  }

  .tile {
    cursor: pointer;
    position: relative;
  }

  .tile:hover:before {
    background-color: rgb(30, 30, 30);
  }

  .tile:before {
    background-color: rgb(15, 15, 15);
    content: "";
    inset: 0.5px;
    position: absolute;
  }

  article {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  button {
    position: relative;
    color: var(--color-light);
    border-color: var(--color-light);
    background-color: transparent;
    font-size: 30px;
    transform: scale(2);
    width: 200px;
    letter-spacing: 10px;
    font-family: var(--font-bold);
    transition: all linear 0.5s;
    z-index: 3;

    &:hover {
      color: var(--color-white);
      transform: scale(2.1);
    }
    &:hover:before,
    &:hover:after {
      position: absolute;
      content: attr(data-text);
      color: var(--color-white);
      width: 100%;
      height: 100%;
      top: 0;
    }

    &:before {
      left: 3px;
      text-shadow: -2px 0 red;
      animation: glitch-1 2s linear reverse infinite;
    }
    &:after {
      left: -3px;
      text-shadow: -2px 0 blue;
      animation: glitch-2 2s linear reverse infinite;
    }
  }
`;

const Logo = styled.div`
  position: relative;
  align-self: center;
  background: url("assets/owlLogo1.png");
  background-size: 100%;
  background-repeat: no-repeat;
  height: 500px;
  width: 250px;
  z-index: 3;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("assets/owlLogo1.png");
    background-repeat: no-repeat;
    background-size: 100%;
    opacity: 0.5;
    mix-blend-mode: hard-light;
  }

  &.hoverEffect {
    animation: animate 0.8s linear infinite;
  }
`;
const MouseTracker = styled.div`
  position: absolute;
  width: 100vw;
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
  &:before {
    content: "";
    right: 0;
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

export default PortfolioContent;
