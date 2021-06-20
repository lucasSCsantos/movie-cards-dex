const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=9e5dfae837deb641a42cf25644c8bad5';
const API_LANGUAGE = 'language=pt-BR'

export async function getMovies() {
	let movieList = [];
	for(let i = 1; i <= 10; i += 1){
		const req = await fetch(`${API_BASE}/movie/popular?${API_KEY}&${API_LANGUAGE}&page=${i}`);
		const movies = await req.json();
		movieList = [...movieList, ...movies.results];
	}
	console.log(movieList);
	return movieList;
}

export async function getMovieDetails(id) {
	const req = await fetch(`${API_BASE}/movie/${id}?${API_KEY}&${API_LANGUAGE}`)
	const movieDetails = await req.json();
	console.log(movieDetails);
	return movieDetails;
}