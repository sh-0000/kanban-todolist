import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

import Card from "./Card";
import { FaTrash } from "react-icons/fa";

const Toolbar = ({ task, setTask }) => {
  return (
    <Wrapper>
      <Droppable isDropDisabled droppableId="add">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <h2 className="column-title">Add or Delete Task</h2>
            <div className="column-content">
              <Card index={0} task={task} userSelect={true} setTask={setTask} />
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
      <Droppable droppableId="delete">
        {(provided, snapshot) => (
          <DeleteWrapper
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="delete-zone"
            isDraggingOver={snapshot.isDraggingOver}
          >
            {provided.placeholder}
            <FaTrash />
          </DeleteWrapper>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Toolbar;

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
    max-height: calc(100px - 0.5rem);
  }
`;

const DeleteWrapper = styled.ul`
  position: relative;
  padding: 0.5rem;
  min-height: 100px;
  transition: all 0.2s ease;
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? "hsl(0 90% 60%)" : "hsl(0 0% 25%)"};

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: inherit;
    font-size: 1.5rem;
  }
`;
