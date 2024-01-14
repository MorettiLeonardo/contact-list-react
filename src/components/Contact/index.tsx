import { useDispatch } from 'react-redux'

import { GenericButton } from '../Button/styles'
import { Card, Infos, InfosEdit } from './styles'
import { remover, edit } from '../../store/reducers/contact'
import { useEffect, useState } from 'react'

type Props = {
  id: number
  name: string
  email: string
  phoneNumber: number
}

const Contact = ({ id, name: originalName, email, phoneNumber }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('')

  useEffect(() => {
    if (originalName.length > 0) {
      setName(originalName)
    }
  }, [originalName])

  function cancelEdit() {
    setName(originalName)
    setIsEditing(false)
  }

  const dispatch = useDispatch()
  return (
    <Card>
      <Infos>
        <p>Nome:</p>
        <InfosEdit
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={!isEditing}
        />
        <p>Email:</p>
        <InfosEdit
          value={email}
          onChange={(e) => setName(e.target.value)}
          disabled={!isEditing}
        />
        <p>Número:</p>
        <InfosEdit
          value={phoneNumber}
          onChange={(e) => setName(e.target.value)}
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
                    phoneNumber,
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
