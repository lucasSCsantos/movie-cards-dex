import React, { Component } from 'react';

class FilterOptions extends Component {
	render() {
		const { value, onChange } = this.props;
		return (
			<div className="filterOptions"> 
				<input type="text" name="search" placeholder="Search a Movie" value={ value } onChange={ onChange } />
			FILTER OPTIONS
			</div>
		);
	}
}

export default FilterOptions;
