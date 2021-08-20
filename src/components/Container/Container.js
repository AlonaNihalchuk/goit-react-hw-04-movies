import PropTypes from "prop-types";
import style from "./Container.module.css";

function Container({ children }) {
  return <div className={style.mainContainer}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
