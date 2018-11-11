import React, { Component } from 'react';
import { connect } from 'react-redux';

//import app bar header from material ui
import AdminAppBar from '../Material-UI/AdminAppBar';
import AdminPageForm from '../Material-UI/AdminPageForm';
import AdminBackToProjectsButton from '../Material-UI/AdminBackToProjectsButton';
import AdminProjectsList from '../Material-UI/AdminProjectsList';


class AdminPage extends Component {

  // Renders the AdminPage
  render() {
    return (
        <div className="App PageRoutes">
          <div className="Container">
            <AdminAppBar />
            <AdminBackToProjectsButton />
            <AdminPageForm />
          </div>
          <div className="Container">
            <AdminProjectsList />
          </div>
        </div>
      
    );
  }
}

export default connect()(AdminPage);