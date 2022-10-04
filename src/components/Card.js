import React from "react";
import styled from "styled-components";

import { Draggable } from "react-beautiful-dnd";

const Card = ({ id, task, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <Wrapper
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="bar"></div>
          <h3>{task}</h3>
        </Wrapper>
      )}
    </Draggable>
  );
};

export default Card;

const Wrapper = styled.div`
  background-color: hsl(0 0% 12%);
  border-radius: 0.5rem;
  height: 4rem;

  .bar {
    position: absolute;
    width: 5rem;
    height: 0.5rem;
    margin: 8px;
    border-radius: 0.5rem;
  }

  h3 {
    margin-top: 2rem;
    margin-left: 0.5rem;
  }
`;
