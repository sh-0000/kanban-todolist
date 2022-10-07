import { useEffect, useState } from "react";
import Board from "./components/Board";
import { columnList } from "./mockData";

function App() {
  const [columns, setColumns] = useState(columnList);

  useEffect(() => {
    const data = localStorage.getItem("column-data");
    if (data) {
      setColumns(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("column-data", JSON.stringify(columns));
  });

  return (
    <div className="container margin-down">
      <h4 className="title"> Kanban Style To-do List</h4>
      <Board columns={columns} setColumns={setColumns} />
    </div>
  );
}

export default App;
