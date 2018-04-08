import React, { Component } from 'react';
import GnomesContent from './../features/GnomesContent/GnomesContent';
import SearchContainer from '../containers/SearchContainer';
import logo from '../../logo.jpg'

class Gnomes extends Component {
  render() {
    return (
      <div className="Gnomes">
        <div className="sidebar">
          <img src={logo} className="logo" alt="Logo"/>
          <SearchContainer />
        </div>
        <div className="main-content">
          <GnomesContent id={this.props.match.params.id}/>
        </div>
      </div>
    );
  }
}

export default Gnomes
