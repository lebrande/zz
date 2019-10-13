import React from 'react';
import { render } from 'react-dom';

import './scss/reset.scss';
import './scss/global.scss';

import App from './components/App/App';

render(
  <App />,
  document.getElementById('app'),
);