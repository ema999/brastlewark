import React, { Component } from 'react';
import './PaginatorList.css';

class PaginatorList extends Component {

  render() {
    //let totalToShow = 8;
    let pages = Math.round(this.props.gnomes.length / this.props.itemsToShow);

    /*for (let i = 0; i < pages; i++) {

      if( i <= (this.props.page + totalToShow) && i >= (this.props.page - totalToShow) ) {
        ul.push(<li key={i} onClick={() => this.props.onPageClick(i+1)}>{i+1}</li>);
      }

    }*/

    let prev = this.props.page !== 1 ? <li onClick={() => this.props.onPageClick(this.props.page - 1)}>Prev</li> : null;
    let next = this.props.page + 1 <= pages ? <li onClick={() => this.props.onPageClick(this.props.page + 1)}>Next</li> : null;

    return (
      <div className="PaginatorList" >
        <ul>
          {prev}
          {next}
        </ul>
      </div>
    );
  }

}

export default PaginatorList;
