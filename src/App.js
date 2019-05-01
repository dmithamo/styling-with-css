import React from "react";
import styled from "styled-components";

// Le other components
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import StyledSubscript from "./components/Subscript";

const Body = ({ className }) => {
  return (
    <StyledBody className={className}>
      <NavBar />
      <StyledSubscript
        text="1. TOP: Using flex-wrap with default flex direction (flex-direction =
        row) to create a ltr nav bar"
      />
      <StyledSubscript
        text="2. ALSO TOP: Using justify-contents = space-between to place the logo on
        one end of a nav and other links on the other end of a nav
      "
      />
      <Section className={className} />
    </StyledBody>
  );
};

const StyledBody = styled.div`
  background-color: black;
  color: white;
  margin: 0;
  width: 100%;
  font-size: 15px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

export default Body;
