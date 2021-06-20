import './App.css';
import MovieDex from './components/MovieDex';
import MoviePage from './components/MoviePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getMovies, getMovieDetails } from './services/api';

function App() {
  getMovies();
  getMovieDetails(550);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" component={MovieDex} />
          <Route path="/moviePage/:id" render={(props) => <MoviePage {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
