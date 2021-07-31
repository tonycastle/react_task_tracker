import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="Header">
      <h1>{title}</h1>
      <Button />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
