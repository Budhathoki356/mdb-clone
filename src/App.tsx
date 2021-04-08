import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import MovieListRender from './components/MovieList/MovieListRender';
import MovieListGenre from './components/MovieListGenre/MovieListGenre';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Header from './components/Header/Header';
import url from "./config/api.json";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header />
      <div className="container-fluid">
        <Switch>
          <Route path="/" exact>
            <div className="movie-app mt-3">
              <h2>Movie</h2>
              <div className="row">
                <MovieListRender url={url.movie_list} />
              </div>
            </div>

            <br />

            <div className="movie-app">
              <h2>Comedy</h2>
              <div className="row">
                <MovieListGenre url={url.movie_list} />
              </div>
            </div>
          </Route>
          <Route path="/movie-detail/:id" exact>
            <MovieDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
