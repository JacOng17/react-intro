import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// To display your App -> Linked to /public/index.html
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
