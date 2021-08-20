import PropTypes from "prop-types";
import style from "./Button.module.css";

function Button({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={style.buttonBack}>
      Go back
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
