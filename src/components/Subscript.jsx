import React from "react";
import styled from "styled-components";

const Subscript = ({ className, text }) => {
  return <p className={className}>{text}</p>;
};

const StyledSubscript = styled(Subscript)`
  color: grey;
  font-size: 0.6em;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  opacity: 0.8;
  width: 90%;
  margin: 10px auto;
`;

export default StyledSubscript;
