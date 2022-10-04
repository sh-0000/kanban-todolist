import Board from "./components/Board";
import Groups from "./components/Group";

function App() {
  return (
    <div className="container margin-down">
      <h4 className="title"> Kanban Style To-do List</h4>
      <Board />
    </div>
  );
}

export default App;
