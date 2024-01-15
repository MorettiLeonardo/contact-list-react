import { useDispatch } from 'react-redux'

import { GenericButton } from '../Button/styles'
import { Card, Infos, InfosEdit } from './styles'
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
      <Infos>
        <p>Nome:</p>
        <InfosEdit
          active={isEditing}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={!isEditing}
        />
        <p>Email:</p>
        <InfosEdit
          active={isEditing}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!isEditing}
        />
        <p>Número:</p>
        <InfosEdit
          active={isEditing}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={!isEditing}
        />
      </Infos>

      <div>
        {isEditing ? (
          <>
            <GenericButton
              onClick={() =>
                dispatch(
                  edit({
                    id,
                    name,
                    phoneNumber: phone,
                    email
                  }),
                  setIsEditing(false)
                )
              }
            >
              Salvar
            </GenericButton>
            <GenericButton onClick={cancelEdit}>Cancelar</GenericButton>
          </>
        ) : (
          <>
            <GenericButton onClick={() => setIsEditing(true)}>
              Editar
            </GenericButton>
            <GenericButton onClick={() => dispatch(remover(id))}>
              Remover
            </GenericButton>
          </>
        )}
      </div>
    </Card>
  )
}

export default Contact
