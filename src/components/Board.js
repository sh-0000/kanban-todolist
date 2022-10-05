import React, { useState } from "react";
import Group from "./Group";
import { groups } from "../mockData.js";
import Card from "./Card";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";

const Board = () => {
  const [data, setData] = useState(groups);

  const onDragEnd = ({ draggableId, destination, source }) => {
    const target = data[source.droppableId].tasks.filter(
      (task) => task.id == draggableId
    );
    setData(
      data.map((data) =>
        data.id === Number(destination.droppableId)
          ? { ...data, tasks: [...data.tasks, ...target] }
          : data
      )
    );
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
