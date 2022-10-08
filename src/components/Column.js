import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const Column = ({ id, name, children }) => {
  return (
    <Droppable key={id} droppableId={id}>
      {(provided, snapshot) => (
        <Wrapper
          columnName={name}
          draggingOverWith={snapshot.draggingOverWith}
          isDragging={snapshot.isDraggingOver}
        >
          <h2 className="column-title">{name}</h2>
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="column-content"
          >
            {children}
            {provided.placeholder}
          </div>
        </Wrapper>
      )}
    </Droppable>
  );
};

export default Column;

const Wrapper = styled.ul`
  background-color: hsl(0 0% 25%);
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  min-width: 25%;

  .column-title {
    padding: 1rem;
    border-bottom: 1px solid;
    user-select: none;
  }

  .column-content {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    min-height: 100px;
  }

  .column-content {
    transition: background-color 0.2s ease;
    background-color: ${({ isDragging }) => isDragging && "hsl(0 0% 30%)"};
  }

  .card-bar {
    background-color: ${({ columnName }) =>
      (columnName === "Todo" && "crimson") ||
      (columnName === "In Progress" && "blueviolet") ||
      (columnName === "Done" && "lime")};
  }
`;
