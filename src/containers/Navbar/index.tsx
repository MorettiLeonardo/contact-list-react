import Button from '../../components/Button'
import SearchBar from '../../components/SearchBar'
import Title from '../../components/Title'
import { Nav } from './styles'

const Navbar = () => (
  <Nav>
    <Title TitleText="Lista de contatos" />
    <div>
      <SearchBar />
      <Button text="Novo" />
    </div>
  </Nav>
)

export default Navbar
