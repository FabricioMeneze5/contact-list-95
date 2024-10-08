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
    display: flex;
    flex-direction: column;
    max-width: 64rem;
    width: 100%;
    height: 95vh;
    margin: 0 auto;
    background-color: ${colors.lightGrey};
    border: solid 1px #000000;
    box-shadow: 2px 2px 3px;
    border-radius: 0.5rem;
    overflow: hidden;

    @media (max-width: 1023px) {
      width: 95%;
    }
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
