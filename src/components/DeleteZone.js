import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const DeleteZone = () => {
  return (
    <Droppable droppableId="delete">
      {(provided, snapshot) => (
        <Wrapper isDraggingOver={snapshot.isDraggingOver}>
          <h3>Drop to delete</h3>
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="droppable-container"
          >
            {provided.placeholder}
          </div>
        </Wrapper>
      )}
    </Droppable>
  );
};

export default DeleteZone;

const Wrapper = styled.ul`
  text-align: center;
  .droppable-container {
    padding: 0.5rem;
    transition: background-color 0.2s ease;
    background-color: ${({ isDraggingOver }) =>
      isDraggingOver && "hsl(0 0% 30%)"};
  }
`;
