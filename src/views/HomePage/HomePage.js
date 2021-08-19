import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { ApiTrendingFetch } from "../../services/fetch";

function HomePage() {
  const location = useLocation();
  // console.log("hi");
  // return <h1>ItS HomePage</h1>;
  const [films, setFilm] = useState([]);
  useEffect(() => {
    ApiTrendingFetch()
      .then(({ results }) =>
        // console.log(results)
        // setFilm((prevFilms) => [...prevFilms, ...results])
        setFilm([...results])
      )
      .catch((error) => console.log("error", error));
  }, []);

  console.log(films);
  return (
    <ul>
      {films &&
        films.map((film) => (
          <li key={film.id}>
            {/* <Link to={{ pathname: `/movies/${film.id}` }}> */}
            {/* <Link to={`/movies/${film.id}`}>{film.original_title}</Link> */}
            <Link
              to={{ pathname: `/movies/${film.id}`, state: { from: location } }}
            >
              {film.original_title}
            </Link>
          </li>
        ))}
    </ul>
  );
}
export default HomePage;
