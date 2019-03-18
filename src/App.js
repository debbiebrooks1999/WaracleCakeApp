import React, { Component } from 'react';
import ListCake from './containers/ListCake';
import Header from './components/layouts/Header';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
       <Header />
       <ListCake />
      </div>
    );
  }
}

export default App;
