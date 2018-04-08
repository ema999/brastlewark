import React, { Component } from 'react';
import './GnomesContent.css';
import GnomeDetailContainer from '../../containers/GnomeDetailContainer'

class GnomesContent extends Component {
  render() {
    return (
      <div className="GnomesContent">
        <GnomeDetailContainer id={this.props.id}/>
      </div>
    );
  }
}

export default GnomesContent;
