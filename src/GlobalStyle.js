import styledSanitize from 'styled-sanitize'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${styledSanitize}

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    line-height: 1.15;
  }

  body {
    font-family: "Google Sans", Helvetica, Arial, sans-serif;
    font-weight: 400;
    color: #272727;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-attachment: fixed;
    scroll-behavior: smooth;
    background: #ffffff;
  }
`

export default GlobalStyle
