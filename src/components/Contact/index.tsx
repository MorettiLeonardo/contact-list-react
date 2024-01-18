import { useDispatch } from 'react-redux'

import { GenericButton } from '../../styles/style'
import { Card, InfosEdit } from './styles'
import { remover, edit } from '../../store/reducers/contact'
import { useEffect, useState } from 'react'

type Props = {
  id: number
  name: string
  email: string
  phoneNumber: string
}
const Contact = ({
  id,
  name: originalName,
  email: originalEmail,
  phoneNumber: originalPhone
}: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (originalName.length > 0) {
      setName(originalName)
    }
    if (originalEmail.length > 0) {
      setEmail(originalEmail)
    }
    if (originalPhone.length > 0) {
      setPhone(originalPhone)
    }
  }, [originalName, originalEmail, originalPhone])

  function cancelEdit() {
    setName(originalName)
    setEmail(originalEmail)
    setPhone(originalPhone)
    setIsEditing(false)
  }

  const dispatch = useDispatch()

  return (
    <Card>
      <div>
        <p>Nome:</p>
        <InfosEdit
          value={name}
          onChange={(e) => setName(e.target.value)}
          readOnly={!isEditing}
        />
        <p>Email:</p>
        <InfosEdit
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          readOnly={!isEditing}
        />
        <p>Número:</p>
        <InfosEdit
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          readOnly={!isEditing}
        />
      </div>

      <div>
        {isEditing ? (
          <div>
            <GenericButton
              onClick={() => {
                // Adicione validações de campos, se necessário
                if (name && email && phone) {
                  dispatch(edit({ id, name, phoneNumber: phone, email }))
                  setIsEditing(false)
                } else {
                  alert('Preencha todos os campos antes de salvar.')
                }
              }}
            >
              Salvar
            </GenericButton>
            <GenericButton onClick={cancelEdit}>Cancelar</GenericButton>
          </div>
        ) : (
          <div>
            <GenericButton onClick={() => setIsEditing(true)}>
              Editar
            </GenericButton>
            <GenericButton onClick={() => dispatch(remover(id))}>
              Remover
            </GenericButton>
          </div>
        )}
      </div>
    </Card>
  )
}

export default Contact
