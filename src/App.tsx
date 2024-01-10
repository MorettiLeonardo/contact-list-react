import ContactList from './containers/ContactList'
import Navbar from './containers/Navbar'
import GlobalStyle, { Container } from './styles/style'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar />
        <ContactList />
      </Container>
    </>
  )
}

export default App
