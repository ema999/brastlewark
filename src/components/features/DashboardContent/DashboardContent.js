import React, { Component } from 'react';
import './DashboardContent.css';
import GnomeListContainer from '../../containers/GnomeListContainer';
import PaginatorListContainer from '../../containers/PaginatorListContainer';

class DashboardContent extends Component {
  render() {
    return (
      <div className="DashboardContent">
        <GnomeListContainer />
        <PaginatorListContainer />
      </div>
    );
  }
}

export default DashboardContent;
