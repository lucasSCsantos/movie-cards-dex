import React, { Component } from 'react';
import '../../styles/FilterOptions.css';
import { getGenres } from '../../services/api'

class FilterOptions extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			genresList: [],
			releaseYears: [],
		}	
		this.createGenresList = this.createGenresList.bind(this);
	}

	componentDidMount() {
		this.createGenresList()
	}

	async createGenresList() {
		const genresList = await getGenres();
		const releaseYears = await Array.from({ length: (2021 - 1910) }, (v, k) => k + 1910);
		this.setState({
			genresList: genresList.genres,
			releaseYears,
		})
	}
	
	render() {
		const { genresList, releaseYears } = this.state;
		return (
			<div className="filterOptions">
				<span>Ascending</span>
				<form>
					<select name="Genre">
						<option value="" disabled selected hidden>Genre</option>
						{genresList.map((genre, index) => (
							<option value={genre} key={index}>{genre.name}</option>	
						))}
					</select>
					<select name="Rating">
						<option value="" disabled selected hidden>Rating</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
					</select>
					<select name="Adult">
						<option value="" disabled selected hidden>Adult</option>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
					<select name="Runtime">
						<option value="" disabled selected hidden>Runtime</option>
						<option value="0m-30m">0-30m</option>
						<option value="30m-1h">30m-1h</option>
						<option value="1h-1h30">1h-1h30</option>
						<option value="1h30-2h">1h30-2h</option>
						<option value="2h-2h30">2h-2h30</option>
						<option value="2h30-3h">2h30-3h</option>
						<option value="3h+">3h+</option>
					</select>
					<select name="ReleaseDate">
						<option value="" disabled selected hidden>Release Year</option>
						{releaseYears.map((year, index) => (
							<option value={year} key={index}>{year}</option>
						))}
					</select>
				</form>
			</div>
		);
	}
}

export default FilterOptions;
