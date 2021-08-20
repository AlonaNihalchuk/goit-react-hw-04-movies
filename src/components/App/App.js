import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
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
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
