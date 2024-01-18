import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register as RegisterAction } from '../../store/reducers/contact'

import Title from '../../components/Title'

import { FormContact } from './styles'
import { FormEvent, useState } from 'react'

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
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Número de telefone:</label>
        <input
          type="number"
          name="phoneNumber"
          id="phoneNumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <button type="submit">Adicionar</button>
      <a href="/">Voltar</a>
    </FormContact>
  )
}

export default RegisterContact
