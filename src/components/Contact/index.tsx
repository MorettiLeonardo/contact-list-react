import Button from '../Button'
import { Card, Infos } from './styles'

type Props = {
  name: string
  email: string
  phone: number
}

const Contact = ({ name, email, phone }: Props) => (
  <Card>
    <Infos>
      <p>{name}</p>
      <p>Email: {email}</p>
      <p>Número: {phone}</p>
    </Infos>
    <div>
      <Button text="Remover" />
      <Button text="Editar" />
    </div>
  </Card>
)

export default Contact
