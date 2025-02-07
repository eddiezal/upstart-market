import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from 'styled-components';

/* Fix: Explicitly define props type */
const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  body, html {
    font-family: sans-serif;
    overflow-x: hidden;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
