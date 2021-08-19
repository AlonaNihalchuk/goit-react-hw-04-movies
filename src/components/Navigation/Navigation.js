import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

function Navigation() {
  return (
    <ul className={style.navList}>
      <NavLink
        exact
        to="/"
        className={style.navLink}
        activeClassName={style.activeNavLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={style.navLink}
        activeClassName={style.activeNavLink}
      >
        Movies
      </NavLink>
    </ul>
  );
}

export default Navigation;
