import { createGlobalStyle } from 'styled-components'

// import { Theme } from 'types/Theme'

const GlobalStyle = createGlobalStyle<{ theme: any }>`
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

  /* width */
  ::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.palette.scrollBar.default};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.palette.scrollBar.hover};
  }
`

export default GlobalStyle
