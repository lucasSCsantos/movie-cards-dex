import './App.css';
import MovieDex from './components/MovieDex';
import MoviePage from './components/MoviePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MovieDex} />
        <Route
          path="/moviePage/:id"
          render={(props) => <MoviePage {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
