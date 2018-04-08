import React, { Component } from 'react';
import './GnomeList.css';
import notFoundImg from '../../../404.jpg';
import Gnome from '../Gnome/Gnome'
import { Redirect } from 'react-router-dom'

class GnomeList extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.onGnomeClick(id)
  }

  render() {
    if (this.props.gnomeDetail || this.props.gnomeDetail === 0) return (<Redirect to={"/gnome/" + this.props.gnomeDetail} push />)
    let gnomes = this.props.gnomes.slice((this.props.page * this.props.itemsToShow) - this.props.itemsToShow , this.props.page * this.props.itemsToShow)
    let notFound = !this.props.gnomes || !this.props.gnomes.length ? (<img src={notFoundImg} className="notFoundImg" alt="404"/>) : null;
    return (
      <ul>
        {notFound}
        {gnomes.map(gnome =>
          <Gnome
            key={gnome.id}
            {...gnome}
            onClick={() => this.handleClick(gnome.id)}
          />
        )}
      </ul>

    );
  }

}

export default GnomeList;
