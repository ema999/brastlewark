import React, { Component } from 'react';
import './GnomeDetail.css';
import Gnome from '../Gnome/Gnome'
import { Redirect } from 'react-router-dom'
import backImg from '../../../back.png'

class GnomeDetail extends Component {

  render() {
    if (!this.props.gnomeDetail || this.props.backDetailView) {return (<Redirect to={"/"} push />)}

    let checkFriends = friend => {
      if(this.props.gnome.friends[variable] === friend.name) return <Gnome key={friend.id} {...friend}/>
      return false;
    }

    let friends = [];
    for (var variable in this.props.gnome.friends) {

      let friend = this.props.gnomes.map(checkFriends)
      friends.push(friend)
    }

    return (
      <div className="GnomeDetail">
        <div><img className="back" src={backImg} alt="back" onClick={this.props.onBackClick}/></div>
        <Gnome {...this.props.gnome}/>
        <div className="detailItem"><b>Age:</b> {this.props.gnome.age}</div>
        <div className="detailItem"><b>Name:</b> {this.props.gnome.name}</div>
        <div className="detailItem"><b>Hair color:</b> {this.props.gnome.hair_color}</div>
        <div className="detailItem"><b>Height:</b> {this.props.gnome.height}</div>
        <div className="detailItem"><b>Weight:</b> {this.props.gnome.weight}</div>
        <div className="detailItem"><b>Professions:</b> {this.props.gnome.professions.toString()}</div>
        <h3>Friends:</h3>
        {friends}
      </div>
    );
  }
}

export default GnomeDetail;
