import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Cast.module.css";
import { ApiActorsFetch } from "../../../services/fetch";

function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    ApiActorsFetch(movieId)
      .then(({ cast }) => {
        setActors([...cast]);
      })
      .catch((error) => console.log("error", error));
  }, [movieId]);

  // console.log(actors);

  return (
    <>
      <ul className={style.castList}>
        {actors &&
          actors.map((actor) => (
            <li key={actor.id} className={style.castItem}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
export default Cast;
