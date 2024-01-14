import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Contact from '../../components/Contact'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contact)
  return (
    <ul>
      {itens.map((contact) => (
        <li key={contact.email}>
          <Contact
            email={contact.email}
            id={contact.id}
            name={contact.name}
            phoneNumber={contact.phoneNumber}
          />
        </li>
      ))}
    </ul>
  )
}

export default ContactList
