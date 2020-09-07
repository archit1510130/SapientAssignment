import React from 'react';

import './App.css';
import HomePage from '../src/Pages/homePage.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import store from './redux/store';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
    <Provider store={store}>
    <div className="App">

    <Route path='/' component={HomePage} />
     
    </div>
    </Provider>
    </Switch>
  );
}

export default App;
