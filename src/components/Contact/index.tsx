import { useDispatch } from 'react-redux'
import Button from '../Button'
import { GenericButton } from '../Button/styles'
import { Card, Infos } from './styles'
import { remover } from '../../store/reducers/contact'

type Props = {
  id: number
  name: string
  email: string
  phone: number
}

const Contact = ({ id, name, email, phone }: Props) => {
  const dispatch = useDispatch()
  return (
    <Card>
      <Infos>
        <p>{id}</p>
        <p>{name}</p>
        <p>Email: {email}</p>
        <p>Número: {phone}</p>
      </Infos>
      <div>
        <GenericButton onClick={() => dispatch(remover(id))}>
          Remover
        </GenericButton>
        <Button text="Editar" />
      </div>
    </Card>
  )
}

export default Contact
