import React, { Component } from 'react';
import '../../styles/MovieList.css';
import { getMovies } from '../../services/api';
import Movie from './Movie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			moviesList: [],
			movieQuant: 9,
			pages: [],
		}
		this.generateMoviesList = this.generateMoviesList.bind(this);
		this.changePageNext = this.changePageNext.bind(this);
		this.changePagePrevious = this.changePagePrevious.bind(this);
		this.changePageByNumber = this.changePageByNumber.bind(this);
		this.createPages = this.createPages.bind(this);
	}

	componentDidMount() {
		this.generateMoviesList();
		this.createPages();
	}
	
	async generateMoviesList() {
		const moviesList = await getMovies();
		this.setState({
			moviesList,
		})
	}

	changePageNext() {
		const { movieQuant } = this.state;
		if ( movieQuant < 199) {
			this.setState((previous) => ({
				movieQuant: previous.movieQuant + 10,
			}))
		}
	}

	createPages() {
		const pages = Array.from({ length: 20 }, (v, k) => k + 1)
		this.setState((previous) => ({
			pages,
		}))
	}

	changePagePrevious() {
		const { movieQuant } = this.state;
		if ( movieQuant > 9) {
			this.setState((previous) => ({
				movieQuant: previous.movieQuant - 10,
			}))
		}
	}

	changePageByNumber({ target }) {
		const { innerText } = target;
		const pageNumber = Number.parseInt(innerText);
		this.setState({
			movieQuant: (9 + ((pageNumber - 1) * 10)),
		})
	}

	render() {
		const { moviesList, movieQuant, pages } = this.state;
		console.log(moviesList)
		return (
			<div className="movieListArea">
				<div className="movieList">
					{moviesList.slice((movieQuant-9), movieQuant).map((movie, index) => (
						<Movie movie={movie} key={index} />
					))}
				</div>
					<button type="button" onClick={this.changePagePrevious}>
						<FontAwesomeIcon icon={faChevronLeft} />
					</button>
					{pages.map((page, index) => (
						<button key={index} type="button" onClick={this.changePageByNumber}>{page}</button>
					))}
					<button type="button" onClick={this.changePageNext}>
					<FontAwesomeIcon icon={faChevronRight} />
					</button>
			</div>
		);
	}
}

export default MovieList;
