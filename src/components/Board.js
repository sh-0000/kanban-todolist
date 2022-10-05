import React, { useState } from "react";
import { columnList } from "../mockData.js";
import Card from "./Card";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

const Board = () => {
  const [columns, setColumns] = useState(columnList);

  const reorderList = (source, destination) => {
    //References https://codesandbox.io/s/jovial-leakey-i0ex5?file=/src/App.js
    const targetColumn = columns[source.droppableId];
    const targetTasks = [...targetColumn.tasks];
    const [removed] = targetTasks.splice(source.index, 1);
    targetTasks.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...targetColumn,
        tasks: targetTasks,
      },
    });
  };

  const moveTarget = () => {
    
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    // eslint-disable-next-line
    source.droppableId == destination.droppableId
      ? reorderList(source, destination)
      : moveTarget();
  };

  return (
    <Wrapper>
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        {Object.entries(columns).map(([columnId, column]) => {
          return (
            <Column
              key={columnId}
              name={column.name}
              id={columnId}
              children={column.tasks.map(({ id, task }, index) => (
                <Card key={id} id={id} index={index} task={task} />
              ))}
            />
          );
        })}
      </DragDropContext>
    </Wrapper>
  );
};

export default Board;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  align-items: start;
`;
