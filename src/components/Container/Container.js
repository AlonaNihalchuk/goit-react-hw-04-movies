import style from "./Container.module.css";
function Container({ children }) {
  return <div className={style.mainContainer}>{children}</div>;
}
export default Container;
