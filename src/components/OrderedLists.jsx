import React from "react";
import styled from "styled-components";

export const ThePriorityList = ({ className, listItems }) => (
  <React.Fragment>
    <p>Priorities</p>
    <PriorityList className={className}>
      {listItems
        .filter((item) => item.priority)
        .map((li) => (
          <StyledLi className={className} key={li.text}>
            {li.text}
          </StyledLi>
        ))}
    </PriorityList>
  </React.Fragment>
);

export const TheUnPriorityList = ({ className, listItems }) => (
  <React.Fragment>
    <p>Less than priority</p>
    <UnPriorityList className={className}>
      {listItems
        .filter((item) => !item.priority === true)
        .map((li) => (
          <StyledLi className={className} key={li.text}>
            {li.text}
          </StyledLi>
        ))}
    </UnPriorityList>
  </React.Fragment>
);

const StyledGenericOL = styled.ol`
  display: flex;
  flex-wrap: wrap;
  list-style: circle;
  list-style-type: lower-roman;
  padding: 0;
`;

const PriorityList = styled(StyledGenericOL)`
  flex-direction: row;
`;

const UnPriorityList = styled(StyledGenericOL)`
  flex-direction: column;
  height: 380px;
  @media (max-width: 1200px) {
    flex-direction: column;
    height: auto;
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  width: 150px;
  border: 1px solid orange;
  margin: 12px;
  padding: 0.8em;
  height: 30px;
  justify-content: center;
  :nth-child(even) {
    flex-grow: 1;
    width: auto;
  }
`;
