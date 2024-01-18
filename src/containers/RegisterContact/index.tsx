import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register as RegisterAction } from '../../store/reducers/contact'

import Title from '../../components/Title'

import { FormContact } from './styles'
import { FormEvent, useState } from 'react'
import { GenericButton } from '../../styles/style'

const RegisterContact = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const register = (ev: FormEvent) => {
    ev.preventDefault()

    dispatch(
      RegisterAction({
        name,
        email,
        phoneNumber
      })
    )
    navigate('/')
  }

  return (
    <FormContact onSubmit={register}>
      <Title TitleText="Adicionar Contato" />
      <div>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div>
        <input
          type="number"
          name="phoneNumber"
          id="phoneNumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Número de telefone"
        />
      </div>
      <GenericButton>Adicionar</GenericButton>
      <Link to={'/'}>
        <GenericButton>Voltar</GenericButton>
      </Link>
    </FormContact>
  )
}

export default RegisterContact
