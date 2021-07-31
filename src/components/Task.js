import { FaTimes } from "react-icons/fa";

const Task = ({ task, onClick, onDoubleClick }) => {
  return (
    <div
      onDoubleClick={() => onDoubleClick(task.id)}
      className={`task ${task.reminder ? "reminder" : ""}`}
    >
      <h3>
        {task.text}
        <FaTimes style={{ color: "red" }} onClick={() => onClick(task.id)} />
      </h3>

      <p>{task.time}</p>
    </div>
  );
};

export default Task;
