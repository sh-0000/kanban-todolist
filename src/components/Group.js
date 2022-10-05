import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const Group = ({ id, title, cards }) => {
  return (
    <Droppable key={id} droppableId={String(id)}>
      {(provided) => (
        <Wrapper>
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="group-main"
          >
            <h2 className="group-title">{title}</h2>
            <div data-group={title} className="group-content">
              {cards}
            </div>
          </div>
          {provided.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
};

export default Group;

const Wrapper = styled.div`
  position: relative;
  background-color: hsl(0 0% 25%);
  border-radius: 0.5rem;

  .group-main {
    width: 100%;
  }

  .group-title {
    margin: 1rem;
  }

  .group-content {
    display: flex;
    flex-direction: column;
  }

  .group-content[data-group="To do"] {
    .bar {
      background-color: crimson;
    }
  }

  .group-content[data-group="In progress"] {
    .bar {
      background-color: blueviolet;
    }
  }

  .group-content[data-group="Completed"] {
    .bar {
      background-color: lime;
    }
  }
`;
