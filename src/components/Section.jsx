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

class Section extends React.Component {
  state = {
    showSubscript: true,
    annotateButtonText: "HIDE ANNOTATIONS",
    reverseOrder: false,
  };

  /**
   * @description Reverse the order in which the lists
   * are displayed onClicking `Reverse Order` btn
   * @param {void}
   * @returns {void}
   */
  onClickReverse = () => {
    const { reverseOrder } = this.state;
    this.setState({
      reverseOrder: !reverseOrder,
    });
    console.log("Current flex-direction", reverseOrder);
  };

  /**
   * @description Toggle annotations when the `Annotate` btn is clicked
   * @param {void}
   * @returns {void}
   */
  onClickAnnotate = () => {
    const { showSubscript, annotateButtonText } = this.state;
    this.setState({
      showSubscript: !showSubscript,
      annotateButtonText:
        annotateButtonText === "ANNOTATE" ? "HIDE ANNOTATIONS" : "ANNOTATE",
    });
  };

  render() {
    const { showSubscript, annotateButtonText, reverseOrder } = this.state;
    const { className } = this.props;
    return (
      <React.Fragment>
        <StyledSubscript
          showSubscript={showSubscript}
          text="1. TOP: Using flex-wrap with default flex direction (flex-direction =
        row) to create a ltr nav bar"
        />
        <StyledSubscript
          showSubscript={showSubscript}
          text="2. ALSO TOP: Using justify-contents = space-between to place the logo on
        one end of a nav and other links on the other end of a nav
      "
        />
        <TheSection>
          <Title>Here are some things I care about</Title>
          <StyledSubscript
            showSubscript={showSubscript}
            text="3. Inside each li: using flex-box (with flex-direction set to 'column')
        to justify contents wrt the horizontal axis"
          />
          <MainDiv reverseOrder={reverseOrder} className={className}>
            <StyledListContainer>
              <StyledSubscript
                showSubscript={showSubscript}
                text="4. For each li: using flex-grow: 1 to make every nth item (in this case even numbered item) stretch to occupy the `rest` of the available space in a container *.
          Notice the flex-grow is in the direction of the flex-direction for the ol's container"
              />
              <StyledSubscript
                showSubscript={showSubscript}
                text="5. Using flex-wrap to force horizontally aligned items
            (flex-direction = 'row') to flow to the next line when width is
            smaller than enough"
              />
              <ThePriorityList listItems={listOfThings} />
            </StyledListContainer>
            <StyledListContainer>
              <StyledSubscript
                showSubscript={showSubscript}
                text="4. For each li: using flex-grow: 1 to make every nth item (in this case even numbered item) stretch to occupy the `rest` of the available space in a container *.
          Notice the flex-grow is in the direction of the flex-direction for the ol's container"
              />
              <StyledSubscript
                showSubscript={showSubscript}
                text="5. Using flex-wrap to force vertically aligned items (flex-direction
            = 'column') to flow to the next column when height is smaller than
            enough"
              />
              <TheUnPriorityList listItems={listOfThings} />
            </StyledListContainer>
          </MainDiv>
          <StyledSubscript
            showSubscript={showSubscript}
            text="6. Using `justify-content = space-around` to position the two btns below
      "
          />
          <StyledSubscript
            showSubscript={showSubscript}
            text="7. This `REVERSE ORDER` btn toggles the flex-direction of teh div above
        from 'row' to 'row-reverse' on click."
          />
          <StyledButtonsContainer
            annotateButtonText={annotateButtonText}
            onClickAnnotate={this.onClickAnnotate}
            onClickReverse={this.onClickReverse}
          />
        </TheSection>
      </React.Fragment>
    );
  }
}

const TheSection = styled.section`
  width: 90%;
  margin: auto;
  min-height: 100vh;
`;

const Title = styled.h2`
  margin: 0;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverseOrder ? "row-reverse" : "row")};
  @media (max-width: 1200px) {
    flex-direction: ${(props) =>
      props.reverseOrder ? "column-reverse" : "column"};
    justify-contents: center;
    margin: auto;
  }
`;

const StyledListContainer = styled.div`
  width: 50%;
  margin: 10px;
  border: 1px solid orange;
  padding: 0 2em;
  height: 500px;
  @media (max-width: 1200px) {
    height: auto;
    margin: 10px auto;
  }
`;

export default Section;
