import 'styled-components'

declare module 'styled-components' {
  export interface ThemeTemplate {
    fonts: {
      primary: string;
    },
    colors: {
      pinkishGrey: string;
      charcoalGrey: string;
      white: string;
    }
  }
}