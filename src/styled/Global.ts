import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  html, body {
    font-family: ${props => props.theme.fonts.primary};
  }

  img {
    max-width: 100%;
  }
`;

export default Global;