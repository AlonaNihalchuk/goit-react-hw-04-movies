import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../views/HomePage/HomePage";
// import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import MoviesPage from "../../views/MoviesPage/MoviesPage";
import MovieDetailsPage from "../../views/MovieDetailsPage/MovieDetailsPage";

function App() {
  return (
    <>
      <Header />
      {/* <Route exact path="/" component={HomePage} /> */}
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
          <HomePage />
        </Route>
        {/* <Route component={HomePage} /> */}
      </Switch>
    </>
  );
}

export default App;
// facd26345a3f4f9845cad78add290316
