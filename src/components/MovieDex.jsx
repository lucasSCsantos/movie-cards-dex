import React, { Component } from 'react';
import Header from './home/Header';
import Main from './home/Main';

class MovieDex extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default MovieDex;
