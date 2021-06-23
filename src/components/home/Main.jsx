import React, { Component } from 'react';
import { getMovies, getAllMovies } from '../../services/api';
import '../../styles/Main.css';
import FilterOptions from './FilterOptions';
import MovieDetails from './MovieDetails';
import MovieList from './MovieList';

class Main extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			movieList: [],
			allMoviesList: [],
			imgUrl: 'https://image.tmdb.org/t/p/w200',
			pageNumber: 1,
			search: '',
		}
		this.generateMovieList = this.generateMovieList.bind(this);
		this.generateAllMovieList = this.generateAllMovieList.bind(this);
		this.pageChange = this.pageChange.bind(this);
		this.onChange = this.onChange.bind(this);
		this.filterBySearch = this.filterBySearch.bind(this);
	}

	componentDidMount() {
		this.generateMovieList(1);
		this.generateAllMovieList();
	}

	componentDidUpdate() {
		const { pageNumber } = this.state;
		this.generateMovieList(pageNumber);
	}

	async generateMovieList(i) {
		const movies = await getMovies(i);
		await this.setState({
			movieList: movies,
		})
	}

	async generateAllMovieList() {
		const list = await getAllMovies();
		await this.setState({
			allMoviesList: list,
		})
	}

	onChange({ target }) {
		const { value }= target
		this.setState({
			search: value,
		})
	}

	filterBySearch() {
		const { search, allMoviesList } = this.state;
		const searchTxt = search.toLowerCase();
			const newMovieList = allMoviesList.filter((movie) => {
				const { title, overview } = movie;
				const searchTitle = title.toLowerCase();
				const searchOver = overview.toLowerCase();
				if (searchTitle.includes(searchTxt) || searchOver.includes(searchTxt)) {
					return movie;
				}
			})
			return newMovieList;
	}

	pageChange({ target }) {
		const aria = target.parentNode.ariaLabel;
		if (aria === null) {
			const page = Number.parseInt(target.innerText);
			this.setState({
				pageNumber: page,
			})
		} else if (aria.includes('next')) {
			this.setState((prev) => ({
				pageNumber: prev.pageNumber + 1,
			}))
		} else {
			this.setState((prev) => ({
				pageNumber: prev.pageNumber - 1,
			}))
		}
	}
	
	render() {
		const { movieList, imgUrl, pageNumber, search } = this.state;
		let movies = [];
		if (search !== '') {
			movies = this.filterBySearch();
		} else {
			movies = movieList;
		}
		return (
			<div className="main">
				MAIN
				<FilterOptions onChange={this.onChange} value={search} />
				<MovieList movieList={movies} imgUrl={imgUrl} pageChange={this.pageChange} page={pageNumber} />
				<MovieDetails />
			</div>
		);
	}
}

export default Main;
