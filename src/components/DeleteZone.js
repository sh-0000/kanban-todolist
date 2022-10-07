import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const DeleteZone = ({ onDrop }) => {
  return (
    <Droppable droppableId="delete">
      {(provided) => (
        <Wrapper
          {...provided.droppableProps}
          ref={provided.innerRef}
          onDrop={onDrop}
        >
          DeleteZone
          {provided.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
};

export default DeleteZone;

const Wrapper = styled.ul`
  height: 10rem;
  width: 10rem;
  border: 1px solid red;
`;
