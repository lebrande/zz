import 'styled-components'

declare module 'styled-components' {
  export interface ThemeTemplate {
    borderRadius: string;
    fonts: {
      primary: string;
    },
    colors: {
      pinkishGrey: string;
      charcoalGrey: string;
      paleRed: string;
      white: string;
    }
  }
}