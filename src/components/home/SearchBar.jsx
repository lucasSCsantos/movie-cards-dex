import { faSearch, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import '../../styles/SearchBar.css'

class SearchBar extends Component {
	render() {
		return (
			<div className="searchBar">
				<input className="searchInput" type="text" placeholder="Search Movie"/>
				<div className="searchButton">
					<button	type="button">
						<FontAwesomeIcon icon={faVideo}/>
					</button>
				</div>
			</div>
		);
	}
}

export default SearchBar;
