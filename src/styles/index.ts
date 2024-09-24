import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const Container = styled.div`
    max-width: 768px;
    width: 100%;
    height: 95vh;
    margin: 0 auto;
    padding: 32px;
    background-color: #c3c3c3;
    border: solid 1px #000000;
    box-shadow: 2px 2px 3px;
    border-radius: 8px;

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
  background-color: #3975a9;
`

export default GlobalStyle
