import { useState, useEffect } from "react";
import { ApiReviewsFetch } from "../../../services/fetch";
import { useParams } from "react-router-dom";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    ApiReviewsFetch(movieId)
      .then(({ results }) => {
        setReviews([...results]);
      })
      .catch((error) => console.log("error", error));
  }, [movieId]);

  console.log(reviews);
  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There is nothing found</p>
      )}
    </>
  );
}
export default Reviews;
