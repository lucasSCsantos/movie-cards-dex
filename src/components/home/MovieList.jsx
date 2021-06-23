import Pagination from '@material-ui/lab/Pagination';
import React, { Component } from 'react';

class MovieList extends Component {
	render() {
		const { movieList, imgUrl, pageChange, page } = this.props;
		return (
			<div className="movieList">
				{movieList.map((movie, index) => (
					<div key={index}>
						<img src={`${imgUrl}${movie.poster_path}`} alt={movie.title} />
						<p>{movie.title}</p>
						<p>{movie.vote_average}</p>
					</div>
				))}
				<div className="pageSelection">
					<Pagination count={100} page={page} onChange={pageChange}/> 
				</div>

			</div>
		);
	}
}

export default MovieList;
