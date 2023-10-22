import GlobalStyles from "./GlobalStyles";
import React from "react";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <Spline scene="https://prod.spline.design/35StieVM0Nm4Nc5E/scene.splinecode" />

      <HeroText>
        <div className="text">
          {/*<h2>Transforming Ideas into Reality With Code And Design.</h2>*/}
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

  & canvas {
    position: absolute;
    background: cover;
    z-index: 1;
  }
`;

const HeroText = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  top: 300px;
  padding-left: 5rem;
  z-index: 3;

  .text {
    max-width: 600px;
    color: var(--color-gray);
  }

  h2 {
    font-size: 40px;
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
`;
export default Home;
