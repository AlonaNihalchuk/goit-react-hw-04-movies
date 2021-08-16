import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <ul>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </ul>
  );
}

export default Navigation;
