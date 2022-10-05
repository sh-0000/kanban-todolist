import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const Column = ({ id, name, children }) => {
  return (
    <Wrapper>
      <h2 className="column-title">{name}</h2>
      <Droppable key={name} droppableId={id}>
        {(provided, snapshot) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            <li
              data-group={name}
              className="column-content"
              data-isdragging={snapshot.isDraggingOver}
            >
              {children}
              {provided.placeholder}
            </li>
          </ul>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Column;

const Wrapper = styled.div`
  background-color: hsl(0 0% 25%);
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  .column-title {
    padding: 1rem;
    border-bottom: 1px solid;
  }

  .column-content {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
  }

  .column-content[data-isdragging="true"] {
    background-color: hsl(0 0% 29%);
  }

  .column-content[data-group="Todo"] {
    .card-bar {
      background-color: crimson;
    }
  }

  .column-content[data-group="In Progress"] {
    .card-bar {
      background-color: blueviolet;
    }
  }

  .column-content[data-group="Done"] {
    .card-bar {
      background-color: lime;
    }
  }
`;
