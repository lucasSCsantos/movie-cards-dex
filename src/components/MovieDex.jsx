import React, { Component } from 'react';
import ContentArea from './home/MainContentArea';
import Header from './home/Header';
import '../styles/MovieDex.css'

class MovieDex extends Component {
  render() {
    return (
      <div className="movieDex">
        <div className="contentArea">
          <Header />
          <ContentArea />
        </div>
      </div>
    );
  }
}

export default MovieDex;
