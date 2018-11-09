import React, { Component } from 'react';
import { connect } from 'react-redux';

//import app bar header from material ui
import AdminAppBar from '../Material-UI/AdminAppBar';
import AdminPageForm from '../Material-UI/AdminPageForm';
import AdminBackToProjectsButton from '../Material-UI/AdminBackToProjectsButton';



class AdminPage extends Component {
  //will send the user back to the projects page when clicked
  handleClick = () => {
    console.log('sending user back to projects page');
    window.location.hash = "";
  }

  // Renders the AdminPage
  render() {
    return (
        <div className="App PageRoutes">
          <AdminAppBar />
          <AdminBackToProjectsButton />
          <AdminPageForm />
        </div>
      
    );
  }
}

export default connect()(AdminPage);