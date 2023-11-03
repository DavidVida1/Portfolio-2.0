import GlobalStyles from "../GlobalStyles";
import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { LuGithub } from "react-icons/lu";
import { AiOutlineInstagram } from "react-icons/ai";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <ContactSection id="contact">
      <div className="wrapper" data-aos="fade-up" data-aos-delay="200">
        <div className="container">
          <aside className="side">
            <form className="formContainer">
              <h2 className="hr-lines">Message Me!</h2>
              <div className="nameWrapper">
                <div className="nameContainer">
                  <label for="fname">First Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                  />
                </div>
                <div className="nameContainer">
                  <label for="lname">Last Name</label>
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Your last name.."
                  />
                </div>
              </div>
              <label for="email">
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                id="email"
                required
              ></input>

              <label for="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                className="subject"
              ></textarea>

              <label for="subject">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write something.."
                className="message"
              ></textarea>

              <input type="submit" value="Submit" />
            </form>

            <div className="contact">
              <p>Contact me easily through.</p>
              <div className="socials">
                <p></p>

                <div className="link">
                  <a href="#">
                    <BiLogoLinkedin />
                  </a>
                </div>
                <div className="link">
                  <a href="#">
                    <LuGithub />
                  </a>
                </div>
                <div className="link">
                  <a href="#">
                    <AiOutlineInstagram />
                  </a>
                </div>

                <div>
                  <p></p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </ContactSection>
  );
};
const ContactSection = styled.section`
  height: 100vh;
  width: 100%;

  .wrapper {
    position: absolute;
    height: 80%;
    margin-top: 20%;
    width: 100%;
    inset: 0;
    margin: auto;

    .container {
      display: grid;
      grid-template-rows: 75% 25%;
      justify-content: center;

      & .side {
        display: grid;
        place-items: center;
        position: relative;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 10px;

        color: var(--color-white);

        & .formContainer {
          height: 100%;
          border-radius: 5px;
          padding: 40px;

          & label {
            font-size: 1.5rem;
          }

          input[type="text"],
          select,
          textarea {
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            margin-top: 6px;
            margin-bottom: 16px;
            resize: vertical;
          }
          & .subject {
            height: 50px;
          }
          & .message {
            width: 100%;
            height: 170px;
          }
          & input[type="submit"] {
            background-color: var(--color-danger);
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            &:hover {
              background-color: #45a049;
            }
          }
          & .nameWrapper {
            display: flex;
            gap: 10px;

            & .nameContainer {
              width: 100%;
            }
          }

          & .hr-lines {
            font-weight: bold;
            position: relative;
            top: 0;
            left: 0;
            margin: 0px 0px 10px 0px;
            font-size: 1.8rem;
            letter-spacing: 0.3rem;
            text-transform: uppercase;
            color: var(--color-white);

            &.hr-lines:after {
              content: " ";
              display: block;
              height: 2px;
              width: 160px;
              transform: translate3d(100%, -0.9rem, 0);
              background: var(--color-danger);
            }
          }
        }
        & .contact {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 150px;
          width: 600px;
          margin-top: 50px;
          color: var(--color-white);

          & p {
            text-align: center;
            margin-bottom: 10px;
            font-size: 3rem;
            font-family: var(--font-abril);
          }
          & .socials {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 2rem;

            & p {
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
    }
  }
`;

export default Contact;
