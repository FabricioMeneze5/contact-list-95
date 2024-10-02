import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyle, { Background, Container } from './styles'
import Home from './pages/Home'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <Background>
        <Container>
          <RouterProvider router={routers} />
        </Container>
      </Background>
    </>
  )
}

export default App
