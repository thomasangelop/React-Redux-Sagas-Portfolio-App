import React, { Component } from 'react';
import { connect } from 'react-redux';

//import app bar header from material ui
import AdminAppBar from '../Material-UI/AdminAppBar';


class AdminPage extends Component {
  // Renders the AdminPage
  render() {
    return (
        <div className="App PageRoutes">
          <AdminAppBar />
        </div>
      
    );
  }
}

export default connect()(AdminPage);