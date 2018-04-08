import React, { Component } from 'react';
import DashboardContent from './../features/DashboardContent/DashboardContent';
import SearchContainer from '../containers/SearchContainer';
import logo from '../../logo.jpg'

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="sidebar">
          <img src={logo} className="logo" alt="Logo"/>
          <SearchContainer />
        </div>
        <div className="main-content">
          <DashboardContent />
        </div>
      </div>
    );
  }
}

export default Dashboard;
