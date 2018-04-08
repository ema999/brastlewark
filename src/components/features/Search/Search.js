import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

  constructor() {
    super();
    this.handleFormClick = this.handleFormClick.bind(this);
  }

  handleFormClick(e) {
    e.preventDefault();
    this.props.onClickFilterBy();
  }

  render() {
    return (
      <div className="Search">
        <input type="text" placeholder="Search..." onChange={ (e) => {this.props.onChangeSearch(e.target.value)} }/>
        <form>
          <div className="searchBy">
            <h5>Filter by</h5>
            <input type="number" value={this.props.age} placeholder="Age" min="1" onChange={ (e) => {this.props.onChangeAge(e.target.value)} }/>
            <input type="number" value={this.props.heght} placeholder="Heght" min="1" onChange={ (e) => {this.props.onChangeHeight(e.target.value)} }/>
            <input type="number" value={this.props.width} placeholder="Width" min="1" onChange={ (e) => {this.props.onChangeWidth(e.target.value)} }/>
          </div>
          <button onClick={this.handleFormClick}>Filter</button>
        </form>
      </div>
    );
  }
}

export default Search;
