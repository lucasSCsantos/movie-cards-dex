const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY = '&api_key=9e5dfae837deb641a42cf25644c8bad5';

export async function getMovies() {
	let movieList = [];
	for(let i = 0; i <= 10; i += 1){
		const req = await fetch(`${API_BASE}/discover/movie?with_genres=18${API_KEY}`);
		const movies = await req.json();
		console.log(movies);
		movieList = [...movieList, ...movies.results];
	}
	console.log(movieList);
	return movieList;
}