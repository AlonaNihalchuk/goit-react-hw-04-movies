import style from "./Button.module.css";

function Button({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={style.buttonBack}>
      Go back
    </button>
  );
}
export default Button;
