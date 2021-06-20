import React, { Component } from 'react';
import '../../styles/FilterOptions.css'

class FilterOptions extends Component {
	render() {
		return (
			<div className="filterOptions">
				<span>Ascending</span>
				<form>
					<select name="Genre" id=""></select>
					<select name="Rating" id=""></select>
					<select name="Age Group" id=""></select>
					<select name="Runtime" id=""></select>
					<select name="Release Date" id=""></select>
				</form>
			</div>
		);
	}
}

export default FilterOptions;
