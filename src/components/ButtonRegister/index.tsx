import { Link as RouterLink } from 'react-router-dom'

import { GenericButton } from '../../styles/style'

const ButtonRegister = () => {
  return (
    <RouterLink to="/novo">
      <GenericButton>Adicionar contato</GenericButton>
    </RouterLink>
  )
}

export default ButtonRegister
