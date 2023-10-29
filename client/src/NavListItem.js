import GlobalStyles from "./GlobalStyles";
import React from "react";
import styled from "styled-components";
import navListData from "./data/NavListData";

const NavListItem = ({ item, navOnClick }) => {
  return (
    <Container>
      <a href="" className="nav-link" onClick={(e) => navOnClick(item._id, e)}>
        {item.name}
      </a>
    </Container>
  );
};

const Container = styled.li`
  margin: 0 2rem;
  transition: all 0.3s ease-in-out;

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
      transform: translateX(-100%);
    }
    &:hover::after,
    &:focus::after {
      transform: translateX(0);
    }
  }
`;

export default NavListItem;
