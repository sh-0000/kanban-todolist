import React from "react";
import styled from "styled-components";

import { Draggable } from "react-beautiful-dnd";

const Card = ({ index, task }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Wrapper
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          draggingOver={snapshot.draggingOver}
        >
          <div className="card-bar"></div>
          <h3>{task.name}</h3>
        </Wrapper>
      )}
    </Draggable>
  );
};

export default Card;

const Wrapper = styled.li`
  position: relative;
  background-color: hsl(0 0% 19%);
  user-select: none;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem;

  .card-bar {
    position: absolute;
    top: 0.5rem;
    width: 5rem;
    height: 0.5rem;
    border-radius: 0.5rem;
  }

  .card-bar {
    transition: background-color 0.2s ease;
    background-color: ${({ draggingOver }) =>
      (draggingOver == 0 && "crimson") ||
      (draggingOver == 1 && "blueviolet") ||
      (draggingOver == 2 && "lime")} !important;
  }

  h3 {
    margin-top: 2rem;
  }
`;
