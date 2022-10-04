import React from "react";
import styled from "styled-components";

const Card = ({ task }) => {
  return (
    <Wrapper>
      <div className="bar"></div>
      <h3>{task}</h3>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  background-color: hsl(0 0% 12%);
  border-radius: 0.5rem;
  height: 4rem;

  .bar {
    position: absolute;
    background-color: crimson;
    width: 5rem;
    height: 0.5rem;
    margin: 8px;
    border-radius: 5px;
  }

  h3 {
    margin: 2rem 0.5rem;
  }
`;
