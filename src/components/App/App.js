import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

//page imports
import PortfolioPage from '../PorfolioPage/PortfolioPage';
import AdminPage from '../AdminPage/AdminPage';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App PageRoutes">
          <Route exact path="/" component={PortfolioPage} />
          <Route path="/admin" component={AdminPage} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
