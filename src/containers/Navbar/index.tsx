import ButtonRegister from '../../components/ButtonRegister'
import Title from '../../components/Title'
import { Nav } from './styles'

const Navbar = () => {
  return (
    <Nav>
      <Title TitleText="Lista de contatos" />
      <ButtonRegister />
    </Nav>
  )
}

export default Navbar
