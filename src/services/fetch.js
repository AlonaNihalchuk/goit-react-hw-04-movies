const API_KEY = "facd26345a3f4f9845cad78add290316";
const BASE_URL = "https://api.themoviedb.org/3";

function ApiTrendingFetch() {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error("something went wrong"));
    }
  );
  //   .then(
  //   (res) => {
  //     return res.json();
  //   }
  // );
}

function ApiSearchFetch(query) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error("something went wrong"));
  });
  //   .then((res) => {
  //   return res.json();
  // });
}

function ApiMovieFetch(id) {
  return fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error("something went wrong"));
  });
  //   .then((res) => {
  //   return res.json();
  // });
}

function ApiActorsFetch(id) {
  return fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error("something went wrong"));
  });
  //   .then((res) => {
  //   return res.json();
  // });
}

function ApiReviewsFetch(id) {
  return fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error("something went wrong"));
  });
  //   .then((res) => {
  //   return res.json();
  // });
}
export {
  ApiTrendingFetch,
  ApiSearchFetch,
  ApiMovieFetch,
  ApiActorsFetch,
  ApiReviewsFetch,
};
