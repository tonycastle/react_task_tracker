import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onClick }) => {
  return (
    <header className="Header">
      <h1>
        {title} <Button onClick={onClick} />
      </h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
