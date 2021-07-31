import { FaTimes } from "react-icons/fa";

const Task = ({ task, onClick }) => {
  return (
    <div className="task">
      <h3>
        {" "}
        {task.description}{" "}
        <FaTimes style={{ color: "red" }} onClick={() => onClick(task.id)} />
      </h3>

      <p>{task.time}</p>
    </div>
  );
};

export default Task;
