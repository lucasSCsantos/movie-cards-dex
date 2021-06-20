import './App.css';
import { getMovies } from './services/api'

function App() {
  getMovies();
  return (
    <div className="App">
      Massa ta funfando
    </div>
  );
}

export default App;
