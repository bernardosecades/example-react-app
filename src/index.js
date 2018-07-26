import React from 'react';
import ReactDOM from 'react-dom';
import './css/skeleton/normalize.css';
import './css/skeleton/skeleton.css';
import BaseContainer from './containers/BaseContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BaseContainer />,
  document.getElementById('root')
);

registerServiceWorker();
