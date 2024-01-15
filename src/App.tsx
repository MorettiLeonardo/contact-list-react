import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import store from './store'

import GlobalStyle, { Container } from './styles/style'
import Home from './pages/Home'
import Register from './pages/Register'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'novo',
    element: <Register />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routers} />
      </Container>
    </Provider>
  )
}

export default App
