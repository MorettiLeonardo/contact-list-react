import { Link as RouterLink } from 'react-router-dom'

import { LinkStyled } from './styles'

const ButtonRegister = () => {
  return (
    <RouterLink to="/novo">
      <LinkStyled>Adicionar contato</LinkStyled>
    </RouterLink>
  )
}

export default ButtonRegister
