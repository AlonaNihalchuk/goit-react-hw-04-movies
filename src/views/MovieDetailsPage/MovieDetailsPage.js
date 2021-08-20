import { useState, useEffect, lazy, Suspense } from "react";
import { useRouteMatch, useParams, NavLink } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";

import style from "./MovieDetailsPage.module.css";
import { ApiMovieFetch } from "../../services/fetch";
import Button from "../../components/Button/Button";

const Cast = lazy(() =>
  import(
    "../../views/MovieDetailsPage/Cast/Cast" /* webpackChunkName: "Cast" */
  )
);
const Reviews = lazy(() =>
  import(
    "../../views/MovieDetailsPage/Reviews/Reviews" /* webpackChunkName: "Reviews" */
  )
);

function MovieDetailsPage() {
  const [film, setFilm] = useState([]);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    ApiMovieFetch(movieId)
      .then(setFilm)
      .catch((error) => console.log("error", error));
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <>
      <Button onClick={onGoBack} />

      {film && (
        <>
          <section className={style.movieDetailsSection}>
            <div className={style.movieDetailsPicture}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}
                alt={film.title}
              />
            </div>
            <div className={style.movieDetailsInfo}>
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
          <section className={style.movieDetailsAdditionalSection}>
            <h3 className={style.movieDetailsAdditionalHead}>
              Additional Information
            </h3>
            <nav>
              <NavLink
                exact
                to={{ pathname: `${url}/cast`, state: { from: location } }}
                className={style.movieDetailsCast}
                activeClassName={style.movieDetailsCastActive}
              >
                Cast
              </NavLink>
              <NavLink
                exact
                to={`${url}/reviews`}
                className={style.movieDetailsCast}
                activeClassName={style.movieDetailsCastActive}
              >
                Reviews
              </NavLink>
            </nav>
          </section>
          <Suspense fallback={<h1>LOADING...</h1>}>
            <Route path={`${path}/cast`}>
              <Cast />
            </Route>
            <Route path={`${path}/reviews`}>
              <Reviews />
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
}
export default MovieDetailsPage;
