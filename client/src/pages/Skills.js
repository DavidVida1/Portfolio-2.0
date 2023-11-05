import GlobalStyles from "../GlobalStyles";
import React from "react";
import styled from "styled-components";

import "aos/dist/aos.css";

const Skill = ({ skill }) => {
  return (
    <SkillWrapper className="skills html" skillwidth={skill.length}>
      <p className="skillName">{skill.name}</p>

      <article className="skillContainer">
        <aside className="skills language"></aside>
      </article>
    </SkillWrapper>
  );
};

const SkillWrapper = styled.section`
  & {
    display: flex;
    flex-direction: column;
    color: var(--color-danger);
    font-size: 1.3rem;
    font-weight: bold;

    & .skillContainer {
      margin: 10px 0px;
      flex-grow: 2;
      width: 80%; /* Full width */
      background-color: var(--color-gray); /* Grey background */
      border-radius: 4px;
      overflow: hidden;

      & .skills {
        position: relative;
        display: block;
        text-align: right; /* Right-align text */
        padding-top: 10px; /* Add top padding */
        padding-bottom: 10px; /* Add bottom padding */
        color: var(--color-danger); /* White text color */
        border-radius: 4px;

        &.language {
          width: ${(props) => props.skillwidth}%;
          background-color: var(--color-primary);
          box-shadow: 0 0 4px var(--color-black);
        }
      }
    }
    @media screen and (max-width: 800px) {
      align-items: center;
    }
  }
`;
export default Skill;
