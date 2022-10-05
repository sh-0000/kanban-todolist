import React from "react";
import styled from "styled-components";

import { Draggable } from "react-beautiful-dnd";

const Card = ({ id, index, task }) => {
  return (
    <Wrapper>
      <Draggable draggableId={id} index={index}>
        {(provided, snapshot) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="card-main"
            data-isdragging={snapshot.isDragging}
          >
            <div className="card-bar"></div>
            <h3>{task}</h3>
          </div>
        )}
      </Draggable>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  .card-main {
    position: relative;
    background-color: hsl(0 0% 19%);
    user-select: none;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    padding: 0.5rem;
  }

  .card-main[data-isdragging="true"] {
    background-color: hsl(0 0% 15%);
  }

  .card-bar {
    position: absolute;
    top: 0.5rem;
    width: 5rem;
    height: 0.5rem;
    border-radius: 0.5rem;
  }

  h3 {
    margin-top: 2rem;
  }
`;
