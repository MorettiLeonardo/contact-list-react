import Title from '../../components/Title'
import { FormContact } from './styles'

const RegisterContact = () => {
  return (
    <FormContact>
      <Title TitleText="Adicionar Contato" />
      <div>
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="phoneNumber">Número de telefone:</label>
        <input type="number" name="phoneNumber" id="phoneNumber" />
      </div>
      <button type="submit">Adicionar</button>
      <a href="/">Voltar</a>
    </FormContact>
  )
}

export default RegisterContact
