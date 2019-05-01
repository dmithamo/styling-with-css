import React from "react";
import styled from "styled-components";

const ButtonsContainer = ({ className }) => {
  return (
    <div className={className}>
      <ReverseOrderButton
        onClick={(e) => alert("Flip the positioning of the lists above: WIP")}
      >
        Reverse order
      </ReverseOrderButton>
      <AnnotateButton
        onClick={(e) => alert("Toggle the annotations on or off: WIP")}
      >
        Annotate
      </AnnotateButton>
    </div>
  );
};

const StyledButtonsContainer = styled(ButtonsContainer)`
  display: flex;
  justify-content: space-around;
`;

const StyledButton = styled.button`
  background-color: orange;
  outline: none;
  border: none;
  padding: 1em;
  font: inherit;
  color: white;
  margin: 10px 0;
  text-transform: uppercase;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  width: 170px;

  :hover {
    background-color: greenyellow;
    color: black;
  }
`;

const ReverseOrderButton = styled(StyledButton)`
`

const AnnotateButton = styled(StyledButton)`
  background-color: white;
  color: black;
  border: 1px solid white;
`;

export default StyledButtonsContainer;
