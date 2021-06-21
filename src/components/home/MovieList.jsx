import React, { Component } from 'react';
import '../../styles/MovieList.css';
import { getMovies } from '../../services/api';
import Movie from './Movie';

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			moviesList: [],
			movieQuant: 9,
		}
		this.generateMoviesList = this.generateMoviesList.bind(this);
	}

	componentDidMount() {
		this.generateMoviesList();
	}
	
	async generateMoviesList() {
		const moviesList = await getMovies();
		this.setState({
			moviesList,
		})
	}

	render() {
		const { moviesList, movieQuant } = this.state;
		console.log(moviesList)
		return (
			<div className="movieList">
				{moviesList.slice((movieQuant-9), movieQuant).map((movie, index) => (
					<Movie movie={movie} key={index} />
				))}
			</div>
		);
	}
}

export default MovieList;
