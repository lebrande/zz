import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Reset from './styled/Reset';
import Global from './styled/Global';

import App from './components/App/App';
import { primaryTheme } from './styled/primaryTheme';

render(
  <ThemeProvider theme={primaryTheme}>
    <>
      <Reset />
      <Global />
      <App />
    </>
  </ThemeProvider>,
  document.getElementById('app'),
);