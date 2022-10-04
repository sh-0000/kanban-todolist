import React from "react";
import styled from "styled-components";

const Group = ({ title, children }) => {
  return (
    <Wrapper>
      <div className="group-main">
        <h2 className="group-title">{title}</h2>
        <div className="group-content">{children}</div>
      </div>
    </Wrapper>
  );
};

export default Group;

const Wrapper = styled.div`
  position: relative;
  background-color: hsl(0 0% 25%);
  border-radius: 0.5rem;

  .group-main {
    width: 100%;
    padding: 1rem;
  }

  .group-title {
    margin-bottom: 1rem;
  }

  .group-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
