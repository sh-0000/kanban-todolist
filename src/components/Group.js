import React from "react";
import styled from "styled-components";

const Group = ({title, children}) => {
  return <div>
    <h2 className="group-title">{title}</h2>
    <div className="group-content">
      {children}
    </div>
  </div>
};

export default Group;

const GroupWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`