import React, { Component } from 'react';
import '../../styles/Movie.css';

class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			revealDetails: false,
		}
		this.setRevealDetails = this.setRevealDetails.bind(this);
	}

	setRevealDetails(boolean) {
		this.setState({
			revealDetails: boolean,
		})
	}
	
	render() {
		const { movie } = this.props;
		const { revealDetails } = this.state;
		const IMG_BASE = 'https://image.tmdb.org/t/p/w200';
		const detailsContent = (
			<div>
				<p>{movie.title}</p>
				<p>{movie.overview.substring(0, 50)}...</p>
				<p>{movie.vote_average}</p>
			</div>
		)
		return (
			<div className="movieCard">
				<div className="movieImg" 
				onMouseEnter={() => this.setRevealDetails(true)} 
				onMouseLeave={() => this.setRevealDetails(false)} 
				style={{backgroundImage: `url(${IMG_BASE}${movie.poster_path})`}}>
					{revealDetails ? (
						<div className="movieCardBottom">
							{detailsContent}
						</div>
					) : (<div className="movieCardBottom none">
					</div>)}
				</div>
			</div>
		);
	}
}

export default Movie;
