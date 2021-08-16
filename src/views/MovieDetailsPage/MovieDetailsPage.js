import { useState, useEffect } from "react";
import { useRouteMatch, useParams, NavLink } from "react-router-dom";
import { ApiMovieFetch } from "../../services/fetch";
import { Route } from "react-router-dom";

import Cast from "../../views/MovieDetailsPage/Cast/Cast";
import Reviews from "../../views/MovieDetailsPage/Reviews/Reviews";

function MovieDetailsPage() {
  const [film, setFilm] = useState([]);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    ApiMovieFetch(movieId)
      .then(setFilm)
      .catch((error) => console.log("error", error));
  }, [movieId]);
  //   console.log(film);

  return (
    <>
      {film && (
        <>
          <section>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                alt={film.title}
              />
            </div>
            <div>
              <h2>
                {film.title}({film.release_date})
              </h2>
              <h3>Overview</h3>
              <p>{film.overview}</p>
              <h3>Genres</h3>
              <ul>
                {film.genres &&
                  film.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
              </ul>
            </div>
          </section>
          <h3>Additional Information</h3>
          <nav>
            <NavLink exact to={`${url}/cast`}>
              Cast
            </NavLink>
            <NavLink exact to={`${url}/reviews`}>
              Reviews
            </NavLink>
          </nav>
          {/*  */}
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </>
      )}
    </>
  );
}
export default MovieDetailsPage;
