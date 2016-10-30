import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Renderer from './components/Renderer';
import reducer from './reducer';

const store = createStore(reducer);

const App = props => (
  <div>
    <Renderer />
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
