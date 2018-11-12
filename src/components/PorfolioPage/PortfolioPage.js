import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectsList from '../Material-UI/ProjectsList';

//import app bar header from material ui
import PortfolioAppBar from '../Material-UI/PortfolioAppBar';


class PortfolioPage extends Component {
  // Renders the PortfolioPage
  render() {
    return (
        <div className="App PageRoutes">
        <PortfolioAppBar />
        <ProjectsList />
        </div>
      
    );
  }
}

export default connect()(PortfolioPage);