import React, { Component } from 'react';
import './Gnome.css';
import gnomeBk from '../../../gnomo.jpg';

class Gnome extends Component {
  render() {
    return (
      <div className="Gnome" onClick={this.props.onClick}>
        <img className="body" src={gnomeBk} alt="body"/>
        <img className="head" src={this.props.thumbnail} alt="gnome"/>
        <div className="name">{this.props.name}</div>
      </div>
    );
  }
}

export default Gnome;
