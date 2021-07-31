import "./index.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: "Do something at some time", time: "14:00" },
    { id: 2, description: "dinnertime", time: "14:00" },
    { id: 3, description: "Do something else", time: "14:00" },
    { id: 4, description: "Watch TV", time: "17:00" },
  ]);

  return (
    <div className="container">
      <Header title="Task Tracker"></Header>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
