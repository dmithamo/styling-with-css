import React from "react";
import styled from "styled-components";

const ButtonsContainer = ({
  className,
  onClickAnnotate,
  onClickReverse,
  annotateButtonText,
}) => {
  return (
    <div className={className}>
      <ReverseOrderButton onClick={onClickReverse}>
        Reverse order
      </ReverseOrderButton>
      <AnnotateButton onClick={onClickAnnotate}>
        {annotateButtonText}
      </AnnotateButton>
    </div>
  );
};

const StyledButtonsContainer = styled(ButtonsContainer)`
  display: flex;
  justify-content: space-around;
  margin: 0 0 0 1em;
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
  width: 200px;

  :hover {
    background-color: greenyellow;
    color: black;
  }
`;

const ReverseOrderButton = styled(StyledButton)``;

const AnnotateButton = styled(StyledButton)`
  background-color: white;
  color: black;
  border: 1px solid white;
`;

export default StyledButtonsContainer;
