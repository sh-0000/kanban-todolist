import React from "react";
import Group from "./Group";
import { groups } from "../mockData.js";
import Card from "./Card";
import styled from "styled-components";

const Board = () => {
  return (
    <Wrapper>
      {groups.map(({ id, title, tasks } = groups) => (
        <Group
          key={id}
          title={title}
          children={tasks.map(({ id, task } = tasks) => (
            <Card key={id} task={task} />
          ))}
        />
      ))}
    </Wrapper>
  );
};

export default Board;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  gap: 1rem;
`;
