import { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { ApiSearchFetch } from "../../services/fetch";
import style from "./MoviesPage.module.css";
// import Button from "../../components/Button/Button";

// import HomePage from "../HomePage/HomePage";

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [films, setFilms] = useState([]);

  const history = useHistory();
  const location = useLocation();

  const getQuery = new URLSearchParams(location.search).get("query") ?? "";

  const handleFilmChange = (e) => {
    // setQuery(e.target.value.toLowerCase());
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

  // if (pictureName.trim() === "") {
  //   alert("введите слово");
  //   return;
  // }
  // onSubmit(pictureName);
  // setPictureName("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (query === "") {
  //     return;
  //   }
  //   setPage(1);
  //   setFilms([]);
  //   history.push({
  //     ...location,
  //     search: `query=${query}`,
  //   });
  //   // console.log(`location`, location);
  // };
  const reset = () => {
    setQuery("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    reset();
    history.push({ ...location, search: `query=${query}` });
  };

  // const onGoBack = () => {
  //   history.push(location?.state?.from ?? "/");
  // };

  return (
    <section>
      {/* <Button onClick={onGoBack} /> */}
      <form onSubmit={handleSubmit}>
        <input
          // value={query}
          onChange={handleFilmChange}
          // autoComplete="off"
          // type="text"
          // autoFocus
          placeholder="Search films"
        />
        <button type="submit" className={style.searchButton}>
          <span>search</span>
        </button>
      </form>
      {/* тут может или должен быть переиспользуемый компонент списка фильмов HomePage */}
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
      {/* не получается */}
      {/* {query && <HomePage />} */}
    </section>
  );
}
export default MoviesPage;
