import React from 'react';

import './App.css';
import HomePage from '../src/Pages/homePage.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import store from './redux/store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HomePage></HomePage>
     
    </div>
    </Provider>
  );
}

export default App;
