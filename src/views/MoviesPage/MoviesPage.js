import { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { ApiSearchFetch } from "../../services/fetch";
import style from "./MoviesPage.module.css";

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [films, setFilms] = useState([]);

  const history = useHistory();
  const location = useLocation();

  const getQuery = new URLSearchParams(location.search).get("query") ?? "";

  const handleFilmChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (getQuery === "") {
      return;
    }
    ApiSearchFetch(getQuery)
      .then(({ results }) => {
        setFilms([...results]);
      })
      .catch((error) => console.log("error", error));
  }, [getQuery]);

  const reset = () => {
    setQuery("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    reset();
    history.push({ ...location, search: `query=${query}` });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          // value={query}
          onChange={handleFilmChange}
          autoComplete="off"
          type="text"
          autoFocus
          placeholder="Search films"
        />
        <button type="submit" className={style.searchButton}>
          <span>search</span>
        </button>
      </form>
      <ul>
        {films &&
          films.map((film) => (
            <li key={film.id}>
              <Link to={{ pathname: `/movies/${film.id}` }}>
                {film.original_title}
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
export default MoviesPage;
