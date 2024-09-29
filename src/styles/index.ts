import styled, { createGlobalStyle } from 'styled-components'

import colors from './colors'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Iceland", sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
    // max-width: 768px;
    max-width: 48rem;
    width: 100%;
    height: 95vh;
    margin: 0 auto;
    padding: 2rem;
    background-color: ${colors.lightGrey};
    border: solid 1px #000000;
    box-shadow: 2px 2px 3px;
    border-radius: 0.5rem;

    h2 {
      font-family: "VT323", monospace;
    }

    // @media (max-width: 1024px) {
    //   max-width: 80%;
    // }
  }
`

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.blue};
`

export default GlobalStyle
