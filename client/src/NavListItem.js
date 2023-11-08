import GlobalStyles from "./GlobalStyles";
import React from "react";
import styled from "styled-components";
import { useNavigate, useParams, NavLink } from "react-router-dom";

const NavListItem = ({ item }) => {
  return (
    <Wrapper>
      <NavLink to={item.href} className="nav-link">
        {item.name}
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 2rem;

  & .nav-link {
    display: block;
    position: relative;
    color: var(--color-white);
    padding: 0.2em 0;
    /* text-decoration: underline 0.15em rgba(255, 255, 255, 0);
    transition: text-decoration-color 300ms;
    text-decoration-thickness: 3px;*/
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.1em;
      background-color: var(--color-white);
      transition: opacity 300ms, transform 300ms;

      opacity: 1;
      transform: translateX(-101%);
    }
    &:hover::after {
      transform: translateX(0);
    }

    &:active,
    &.active {
      text-decoration: underline;
      text-decoration-color: var(--color-white);
      text-decoration-thickness: 2px;
    }
  }
`;

export default NavListItem;
