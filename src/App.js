import React from "react";
import styled from "styled-components";

// Le other components
import NavBar from "./components/NavBar";
import Section from "./components/Section";

const Body = ({ className }) => {
  return (
    <StyledBody className={className}>
      <NavBar />
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
