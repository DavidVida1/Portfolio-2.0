import GlobalStyles from "../GlobalStyles";
import React from "react";
import { useEffect, useState } from "react";
import { skillsData } from "../data/myData";
import { interestsData } from "../data/myData";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const About = ({ reference }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <AboutSection
      id="about"
      ref={reference}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="container">
        <section>
          <h2 class="hr-lines">About</h2>
          <p className="learn">learn more about me</p>

          <aside className="infoSection">
            <img src="/assets/Crop-Iphone1Black2.png" alt="myPhoto" />
            <p>
              From microbiologist to web developer, I've shifted my focus from
              the microscopic world to the digital one, leveraging my analytical
              mindset and passion for crafting visually captivating
              user-friendly web experiences. My career shift represents a fusion
              of scientific rigor and digital creativity in the ever-evolving
              landscape of web development.
            </p>
          </aside>

          <h2 class="hr-lines">Skills</h2>

          <aside className="skillSection">
            {skillsData.map((skill) => (
              <div>
                <p className="skillName">{skill.skillName}</p>

                <div className="skillContainer">
                  <div
                    className="skills html"
                    skillwidth={skill.skillLength}
                  ></div>
                  {/*create component*/}
                </div>
              </div>
            ))}
          </aside>

          <h2 class="hr-lines">Interests</h2>
          <aside className="interestsSection">
            {interestsData.map((interest) => (
              <div>
                <p>{interest.interest}</p>
                <img src={interest.interestImg} />
              </div>
            ))}
          </aside>
        </section>
      </div>
    </AboutSection>
  );
};
const AboutSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 3;

  .container {
    position: absolute;
    height: 80%;
    width: 70%;
    inset: 0;
    margin: auto;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.8px);
    -webkit-backdrop-filter: blur(8.8px);
    overflow: auto;

    section {
      margin: 30px;

      & .hr-lines {
        font-weight: bold;
        position: relative;
        margin: 20px 0px;
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
      .learn {
        color: var(--color-white);
        font-size: 3rem;
        text-transform: uppercase;
        font-weight: bold;
        margin: 10px 0px;
      }
    }

    .infoSection {
      display: flex;

      img {
        height: 300px;
        width: 300px;
        border-radius: 5px;
        -webkit-mask-image: linear-gradient(#000, transparent);
        mask-image: linear-gradient(#000, transparent);
      }
      p {
        color: var(--color-white);
        font-weight: bold;
        /*font-family: var(--font-abril);*/
        font-size: 2.3rem;
        margin: 10px 20px;
      }
    }

    & .skillSection {
      /*display: flex;
      flex-direction: row;
      flex-wrap: wrap;*/

      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;

      div {
        display: flex;
        flex-direction: column;

        & .skillName {
          color: var(--color-danger);
          font-size: 1.3rem;
          font-weight: bold;
        }
        & .skillContainer {
          margin: 10px 0px;
          flex-grow: 2;
          width: 100%; /* Full width */
          background-color: #ddd; /* Grey background */

          & .skills {
            text-align: right; /* Right-align text */
            padding-top: 10px; /* Add top padding */
            padding-bottom: 10px; /* Add bottom padding */
            color: var(--color-danger); /* White text color */
          }

          & .html {
            /*width: ${(props) => props.skillwidth}%;*/
            content: ${(props) => props.skillwidth};
            background-color: var(--color-sepia);
          }
        }
      }
    }

    .interestsSection {
      display: flex;
      flex-direction: row;
      color: white;

      color: white;
      p {
        font-size: 2rem;
      }
      img {
        height: 50px;
        width: 50px;
      }
    }
  }
`;

export default About;
