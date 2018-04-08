import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import Gnomes from './Gnomes';

class Index extends Component {

  render() {
    return (
      <div className="Dashboard">
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/gnome/:id' component={Gnomes}/>
        </Switch>
      </div>
    );
  }
}

export default Index;
