import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    //console.log({ text, time, reminder });
    addTask({ text, time, reminder });

    setText("");
    setTime("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task:</label>
        <input
          type="text"
          placeholder="add task"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>Time:</label>
        <input
          type="text"
          placeholder="add time"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder:</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => {
            setReminder(e.target.checked);
          }}
        />
      </div>
      <input
        type="submit"
        value="Save Task"
        className="btn btn-block"
        style={{ backgroundColor: "green" }}
      />
    </form>
  );
};

export default AddTask;
