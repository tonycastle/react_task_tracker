const Button = ({ onClick }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: "green" }}
      onClick={onClick}
    >
      Add
    </button>
  );
};

export default Button;
