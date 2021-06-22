import React, { Component } from 'react';
import '../../styles/MainContentArea.css'
import FilterOptions from './FilterOptions';
import MovieDetails from './MovieDetails';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import { getMovies } from '../../services/api';

class MainContentArea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movieList: [],
			genre: 0,
			rating: 0,
			adult: null,
			runtime: 0,
			releaseYear: 0,
		}
		this.generateMoviesList = this.generateMoviesList.bind(this);
		this.sortByRating = this.sortByRating.bind(this);
	}

	componentDidMount() {
		this.generateMoviesList();
	}

	sortByRating({ target }) {
		const { movieList } = this.state;
		const { value } = target;
		const sortedMovieList = movieList.filter((movie) => {
			console.log(Math.floor(movie.vote_average))
			return Math.floor(movie.vote_average) === Number.parseInt(value);
		});
		return sortedMovieList;
	}

	async generateMoviesList() {
		const movieList = await getMovies();
		this.setState({
			movieList,
		})
	}
	
	render() {
		return (
			<div className="mainContentArea">
				<div className="leftContent">
					<SearchBar />
					<FilterOptions ratingSort={this.sortByRating}/>
					<MovieList />
				</div>
				<div className="rightContent">
					<MovieDetails />
				</div>
			</div>
		);
	}
}

export default MainContentArea;
