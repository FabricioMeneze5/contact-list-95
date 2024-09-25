import Header from './containers/Header'
import GlobalStyle, { Background, Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Background>
        <Container>
          <Header />
        </Container>
      </Background>
    </>
  )
}

export default App
