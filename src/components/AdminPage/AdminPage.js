import React, { Component } from 'react';
import { connect } from 'react-redux';

//import app bar header from material ui
import AdminAppBar from '../Material-UI/AdminAppBar';
import AdminPageForm from '../Material-UI/AdminPageForm';

//import input form from material ui


class AdminPage extends Component {
  // Renders the AdminPage
  render() {
    return (
        <div className="App PageRoutes">
          <AdminAppBar />
          <AdminPageForm />
        </div>
      
    );
  }
}

export default connect()(AdminPage);