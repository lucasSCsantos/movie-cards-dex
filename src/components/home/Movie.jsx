import React, { Component } from 'react';
import '../../styles/Movie.css';

class Movie extends Component {
	revealMoveInfos({ target }) {
		const movieInfo = target.firstChild;
		console.log(movieInfo.style.display)
		movieInfo.style.display === 'block' ? movieInfo.style.display = '' : movieInfo.style.display = 'block' 
	}

	render() {
		const { movie } = this.props;
		const IMG_BASE = 'https://image.tmdb.org/t/p/w200';
		return (
			<div className="movieCard">
				<div className="movieImg" onMouseEnter={({target}) => {
					target.firstChild.style.display = 'block' 
				}} 
				onMouseLeave={({target}) => {
					target.firstChild.style.display = 'none' 
				}}
				style={{backgroundImage: `url(${IMG_BASE}${movie.poster_path})`}}>
					<div className="movieCardBottom">
					</div>
				</div>
			</div>
		);
	}
}

export default Movie;
