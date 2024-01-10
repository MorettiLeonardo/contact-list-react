import Button from '../Button'
import { Card, Infos } from './styles'

const Contact = () => (
  <Card>
    <Infos>
      <p>Nome da pessoa</p>
      <p>Email: email@email.com</p>
      <p>Número: 41 99999999</p>
    </Infos>
    <div>
      <Button text="Remover" />
      <Button text="Editar" />
    </div>
  </Card>
)

export default Contact
