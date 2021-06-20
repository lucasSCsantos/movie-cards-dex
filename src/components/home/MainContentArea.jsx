import React, { Component } from 'react';
import '../../styles/MainContentArea.css'
import FilterOptions from './FilterOptions';
import MovieDetails from './MovieDetails';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class ContentArea extends Component {
	render() {
		return (
			<div className="mainContentArea">
				<div className="leftContent">
					<SearchBar />
					<FilterOptions />
					<MovieList />
				</div>
				<div className="rightContent">
					<MovieDetails />
				</div>
			</div>
		);
	}
}

export default ContentArea;
