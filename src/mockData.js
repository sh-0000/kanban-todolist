const taskList = [
  {
    id: "1",
    task: "Learn JS",
  },
  {
    id: "2",
    task: "Learn React",
  },
];
//
export const columnList = {
  [0]: {
    name: "Todo",
    tasks: taskList,
  },
  [1]: {
    name: "In Progress",
    tasks: [],
  },
  [2]: {
    name: "Done",
    tasks: [],
  },
};
