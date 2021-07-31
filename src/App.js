import "./index.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Do something at some time",
      time: "14:00",
      reminder: true,
    },
    { id: 2, text: "dinnertime", time: "14:00", reminder: false },
    { id: 3, text: "Do something else", time: "14:00", reminder: true },
    { id: 4, text: "Watch TV", time: "17:00", reminder: true },
  ]);

  const [addTaskVisibility, setAddTaskVisibility] = useState(false);

  const showAddTask = () => {
    setAddTaskVisibility(!addTaskVisibility);
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000);
    task.id = id;
    console.log(task);
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);
  };

  const setReminder = (id) => {
    const newTasks = tasks.map((task) => {
      return task.id === id ? { ...task, reminder: !task.reminder } : task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Header title="Task Tracker" onClick={showAddTask}></Header>
      {addTaskVisibility ? <AddTask addTask={addTask} /> : null}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onClick={deleteTask} onDoubleClick={setReminder} />
      ) : (
        "No tasks to show."
      )}
    </div>
  );
}

export default App;
