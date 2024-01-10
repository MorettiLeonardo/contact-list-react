import { FaMagnifyingGlass } from 'react-icons/fa6'
import { Bar, Input, Search } from './styles'
import Button from '../../components/Button'

const SearchBar = () => (
  <Bar>
    <Input type="text" />
    <Search>
      <FaMagnifyingGlass />
    </Search>
  </Bar>
)

export default SearchBar
