import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
// import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Container from "../Container/Container";
const HomePage = lazy(() =>
  import("../../views/HomePage/HomePage.js" /* webpackChunkName: "HomePage" */)
);

const MoviesPage = lazy(() =>
  import(
    "../../views/MoviesPage/MoviesPage.js" /* webpackChunkName: "MoviesPage" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "../../views/MovieDetailsPage/MovieDetailsPage.js" /* webpackChunkName: "MovieDetailsPage" */
  )
);
const NotFoundPage = lazy(() =>
  import(
    "../../views/NotFoundPage/NotFoundPage.js" /* webpackChunkName: "NotFoundPage" */
  )
);

// import HomePage from "../../views/HomePage/HomePage";
// import MoviesPage from "../../views/MoviesPage/MoviesPage";
// import MovieDetailsPage from "../../views/MovieDetailsPage/MovieDetailsPage";
// import NotFoundPage from "../../views/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Container>
      <Header />
      {/* <Route exact path="/" component={HomePage} /> */}
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
          {/* <Route component={HomePage} /> */}
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
