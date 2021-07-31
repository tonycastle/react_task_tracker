import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="Header">
      <h1>
        {title} <Button />
      </h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
