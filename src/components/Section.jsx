import React from "react";
import styled from "styled-components";

// Le other components
import { ThePriorityList, TheUnPriorityList } from "./OrderedLists";
import StyledButtonsContainer from "./Buttons";
import StyledSubscript from "./Subscript";

// The lists
const listOfThings = [
  { text: "Good things", priority: true },
  { text: "Better things", priority: true },
  { text: "Other good things", priority: true },
  { text: "The best things", priority: true },
  { text: "Unbad things", priority: true },
  { text: "Ununungood things", priority: true },
  { text: "Game of Thrones", priority: false },
  { text: "Avengers: Endgame", priority: false },
  { text: "You should know", priority: false },
  { text: "I'm not serious", priority: false },
  { text: "GoT is definitely a priority", priority: false },
  { text: "As is Avengers: Endgame", priority: false },
];

const Section = ({ className }) => {
  return (
    <TheSection>
      <Title>Here are some things I care about</Title>
      <StyledSubscript
        text="3. Inside each li: using flex-box (with flex-direction set to 'column')
        to justify contents wrt the horizontal axis"
      />
      <MainDiv className={className}>
        <StyledListContainer>
          <StyledSubscript text="4. For each li: using flex-grow: 1 to make every nth item (in this case even numbered item) stretch to occupy the `rest` of the available space in a container *.
          Notice the flex-grow is in the direction of the flex-direction for the specific container" />
          <StyledSubscript
            text="5. Using flex-wrap to force horizontally aligned items
            (flex-direction = 'row') to flow to the next line when width is
            smaller than enough"
          />
          <ThePriorityList listItems={listOfThings} />
        </StyledListContainer>
        <StyledListContainer>
          <StyledSubscript text="4. Inside the lis: using flex-grow: 1 to make every nth item (in this case even numbered item) stretch to occupy the `rest` of the available space in a container *.
          Notice the flex-grow is in the direction of the flex-direction for the specific container" />
          <StyledSubscript
            text="5. Using flex-wrap to force vertically aligned items (flex-direction
            = 'column') to flow to the next column when height is smaller than
            enough"
          />
          <TheUnPriorityList listItems={listOfThings} />
        </StyledListContainer>
      </MainDiv>
      <StyledSubscript
        text="6. Using `justify-content = space-around` to position the two btns below
      "
      />
      <StyledSubscript
        text="7. This `REVERSE ORDER` btn toggles the flex-direction of teh div above
        from 'row' to 'row-reverse' on click."
      />
      <StyledButtonsContainer />
    </TheSection>
  );
};

const TheSection = styled.section`
  width: 90%;
  margin: auto;
`;

const Title = styled.h2`
  margin: 0;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-contents: center;
    margin: auto;
  }
`;

const StyledListContainer = styled.div`
  width: 50%;
  margin: 20px;
  border: 1px solid orange;
  padding: 0 2em;
  height: 500px;
  @media (max-width: 1200px) {
    height: auto;
    margin: 10px auto;
}
`;

export default Section;
