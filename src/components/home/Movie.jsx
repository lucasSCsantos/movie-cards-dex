import React, { Component } from 'react';
import '../../styles/Movie.css';

class Movie extends Component {
	render() {
		const { movie } = this.props;
		const IMG_BASE = 'https://image.tmdb.org/t/p/w200'
		return (
			<div>
				<div className="movieImg" style={{backgroundImage: `url(${IMG_BASE}${movie.poster_path})`}}></div>
			</div>
		);
	}
}

export default Movie;
