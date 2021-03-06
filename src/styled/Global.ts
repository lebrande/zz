import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  html, body {
    font-family: ${props => props.theme.fonts.primary};
  }

  img {
    max-width: 100%;
  }

  button {
    border: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default Global;