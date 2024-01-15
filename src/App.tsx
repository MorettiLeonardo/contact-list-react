import { Provider } from 'react-redux'

import ContactList from './containers/ContactList'
import GlobalStyle, { Container } from './styles/style'
import store from './store'
import Navbar from './containers/Navbar'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Navbar />
        <ContactList />
      </Container>
    </Provider>
  )
}

export default App
