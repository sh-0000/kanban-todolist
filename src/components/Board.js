import React from "react";

import Card from "./Card";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import DeleteZone from "./DeleteZone";

const Board = ({ columns, setColumns }) => {
  const deleteTask = (source) => {
    const targetColumn = columns[source.droppableId];
    const targetTasks = [...targetColumn.tasks];
    targetTasks.splice(source.index, 1);

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...targetColumn,
        tasks: targetTasks,
      },
    });
  };

  const reorderList = (source, destination) => {
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

  const moveTarget = (source, destination) => {
    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];

    const sourceTasks = [...sourceCol.tasks];
    const destTasks = [...destCol.tasks];

    const [removed] = sourceTasks.splice(source.index, 1);
    destTasks.splice(destination.index, 0, removed);

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceCol,
        tasks: sourceTasks,
      },
      [destination.droppableId]: {
        ...destCol,
        tasks: destTasks,
      },
    });
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    // eslint-disable-next-line
    if (source.droppableId === destination.droppableId)
      reorderList(source, destination);
    if (source.droppableId !== destination.droppableId)
      destination.droppableId === "delete"
        ? deleteTask(source)
        : moveTarget(source, destination);
  };
  //References https://codesandbox.io/s/jovial-leakey-i0ex5?file=/src/App.js
  return (
    <Wrapper>
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        {Object.entries(columns).map(([columnId, column]) => {
          return (
            <Column
              key={columnId}
              id={columnId}
              name={column.name}
              children={column.tasks.map((task, index) => (
                <Card key={task.id} index={index} task={task} />
              ))}
            />
          );
        })}
        <DeleteZone />
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
