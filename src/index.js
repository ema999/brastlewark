import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import brastlewarkApp from './reducers'
import GnomeService  from './services/GnomeService'

GnomeService.getInitialState((response) => {
  let initialState = response;
  __INIT(initialState);
})

function __INIT(initialState) {
  let store = createStore(brastlewarkApp, initialState)

  ReactDOM.render((
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'));
  //registerServiceWorker();
}
