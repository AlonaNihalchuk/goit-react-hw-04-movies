import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ApiTrendingFetch } from "../../services/fetch";

function HomePage() {
  const [films, setFilm] = useState([]);
  useEffect(() => {
    ApiTrendingFetch()
      .then(({ results }) => setFilm([...results]))
      .catch((error) => console.log("error", error));
  }, []);

  // console.log(films);

  return (
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
  );
}
export default HomePage;
