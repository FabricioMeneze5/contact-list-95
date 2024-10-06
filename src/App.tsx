import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import store from './store'
import GlobalStyle, { Background, Container } from './styles'
import Home from './pages/Home'
import Register from './pages/Register'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/register',
    element: <Register />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Background>
        <Container>
          <RouterProvider router={routers} />
        </Container>
      </Background>
    </Provider>
  )
}

export default App
