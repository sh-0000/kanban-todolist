import React from "react";
import Group from "./Group";
import { groups } from "../mockData.js";
import Card from "./Card";

const Board = () => {
  return (
    <>
      {groups.map(({ id, title, tasks } = groups) => (
        <Group
          key={id}
          title={title}
          children={tasks.map(({ id, task } = tasks) => (
            <Card key={id} task={task} />
          ))}
        />
      ))}
    </>
  );
};

export default Board;
