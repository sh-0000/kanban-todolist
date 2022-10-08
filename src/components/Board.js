import React, { useState } from "react";
import Card from "./Card";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import Toolbar from "./Toolbar";
import { v4 as uuid } from "uuid";

const Board = ({ columns, setColumns }) => {
  const [task, setTask] = useState({
    id: uuid(),
    name: "You can edit this line",
  });

  const addTask = (destination) => {
    const targetColumn = columns[destination.droppableId];
    const targetTasks = [...targetColumn.tasks];
    targetTasks.splice(destination.index, 0, task);
    setColumns({
      ...columns,
      [destination.droppableId]: {
        ...targetColumn,
        tasks: targetTasks,
      },
    });
    setTask({ id: uuid(), name: "You can edit this line" });  
  };
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
    if (source.droppableId !== destination.droppableId) {
      if (source.droppableId !== "add" && destination.droppableId !== "delete")
        moveTarget(source, destination);
      if (source.droppableId === "add" && destination.droppableId !== "delete")
        addTask(destination);
      if (source.droppableId !== "add" && destination.droppableId === "delete")
        deleteTask(source);
    }
  };
  //References https://codesandbox.io/s/jovial-leakey-i0ex5?file=/src/App.js
  return (
    <Wrapper>
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        <Toolbar task={task} setTask={setTask} />
        {Object.entries(columns).map(([columnId, column]) => {
          return (
            <Column
              key={columnId}
              id={columnId}
              name={column.name}
              children={column.tasks.map((task, index) => (
                <Card
                  key={task.id}
                  index={index}
                  task={task}
                  userSelect={false}
                />
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
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;
