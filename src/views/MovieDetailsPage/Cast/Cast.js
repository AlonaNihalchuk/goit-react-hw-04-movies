import { ApiActorsFetch } from "../../../services/fetch";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

  console.log(actors);

  return (
    <>
      <ul>
        {actors &&
          actors.map((actor) => (
            <li key={actor.id}>
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
