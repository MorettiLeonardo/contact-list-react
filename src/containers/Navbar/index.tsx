import Title from '../../components/Title'
import { Nav, Button } from './styles'

const Navbar = () => {
  return (
    <Nav>
      <Title TitleText="Lista de contatos" />
      <Button>Adicionar contato</Button>
    </Nav>
  )
}

export default Navbar
