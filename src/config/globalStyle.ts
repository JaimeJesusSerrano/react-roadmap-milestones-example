import { createGlobalStyle } from 'styled-components'

import { Theme } from 'types/Theme'

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  @font-face {
    font-display: block;
    font-family: 'Roboto';
    font-weight: 300;
    src: url('/fonts/roboto/Roboto-Light.ttf') format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: 'Roboto';
    font-weight: 400;
    src: url('/fonts/roboto/Roboto-Regular.ttf') format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: 'Roboto';
    font-weight: 500;
    src: url('/fonts/roboto/Roboto-Medium.ttf') format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: 'Roboto';
    font-weight: 600;
    src: url('/fonts/roboto/Roboto-Bold.ttf') format('truetype');
  }

  * {
    font-family: 'Roboto';
    font-size: 16px;
  }
`

export default GlobalStyle
