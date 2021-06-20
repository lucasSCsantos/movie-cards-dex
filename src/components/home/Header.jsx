import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import '../../styles/Header.css';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="headerContent">
					<p className="couchIcon"><FontAwesomeIcon icon={faCouch} /></p>
					<p>Movie Dex</p>
				</div>
			</div>
		);
	}
}

export default Header;
