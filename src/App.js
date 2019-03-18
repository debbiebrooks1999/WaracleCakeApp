import React, { Component } from 'react';
import AddCake from './containers/AddCake';
import ListCake from './containers/ListCake';
import Header from './components/layouts/Header';
import { Route, BrowserRouter as Router } from 'react-router-dom'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
       <Header />
       <Route exact path="/" component={ListCake} />
       <Route exact path="/view" component={ListCake} />
       <Route exact path="/add" component={AddCake} />
      </div>
    );
  }
}

export default App;
