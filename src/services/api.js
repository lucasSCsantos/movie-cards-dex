const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=9e5dfae837deb641a42cf25644c8bad5';
const API_LANGUAGE = 'language=pt-BR';

export async function getMovies(i) {
  const req = await fetch(
    `${API_BASE}/movie/popular?${API_KEY}&${API_LANGUAGE}&page=${i}`
  );
  const movies = await req.json();
  return movies.results;
}

export async function getAllMovies() {
  let moviesList = [];
  for (let i = 1; i <= 100; i += 1) {
    const req = await fetch(
      `${API_BASE}/movie/popular?${API_KEY}&${API_LANGUAGE}&page=${i}`
    );
    const movies = await req.json();
    moviesList = [...moviesList, ...movies.results];
  }
  console.log(moviesList);
  return moviesList;
}

export async function getGenres() {
  const req = await fetch(`${API_BASE}/genre/movie/list?${API_KEY}&${API_LANGUAGE}`);
  const genres = await req.json();
  return genres;
}

export async function getMovieDetails(id) {
  const req = await fetch(`${API_BASE}/movie/${id}?${API_KEY}&${API_LANGUAGE}`);
  const movieDetails = await req.json();
  return movieDetails;
}

export async function getSimilarMovies(id) {
  const req = await fetch(`${API_BASE}/movie/${id}/similar?${API_KEY}&${API_LANGUAGE}`);
  const similarMovies = await req.json();
  return similarMovies;
}
