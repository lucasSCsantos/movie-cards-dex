import React, { Component } from 'react';
import '../../styles/Movie.css';

class Movie extends Component {
	render() {
		const { movie } = this.props;
		const IMG_BASE = 'https://image.tmdb.org/t/p/w200'
		return (
			<div className="movieCard">
				<div className="movieImg" style={{backgroundImage: `url(${IMG_BASE}${movie.poster_path})`}}>
					<div className="movieCardBottom">
					</div>
				</div>
			</div>
		);
	}
}

export default Movie;
