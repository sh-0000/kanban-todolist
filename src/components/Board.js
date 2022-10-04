import React, { useState } from "react";
import Group from "./Group";
import { groups } from "../mockData.js";
import Card from "./Card";
import styled from "styled-components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Board = () => {
  const [data, setData] = useState(groups);

  const onDragEnd = (e) => {
    console.log(e);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        {data.map(({ id, title, tasks }) => (
          <Group
            key={id}
            id={id}
            title={title}
            cards={tasks.map(({ id, task }, index) => (
              <Card key={id} id={id} index={index} task={task} />
            ))}
          />
        ))}
      </Wrapper>
    </DragDropContext>
  );
};

export default Board;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  gap: 1rem;
`;
