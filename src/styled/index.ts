import { createGlobalStyle } from "styled-components"
import { Colors } from "../shared/const/Colors"
import { Fonts } from "../shared/const/Fonts"

const { COLOR_BG, COLOR_TEXT } = Colors
const { FF_DEFAULT } = Fonts

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${COLOR_BG};
    color: ${COLOR_TEXT};
    font-family: ${FF_DEFAULT};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.625rem;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`
