import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactState = {
  itens: Contact[]
}

const initialState: ContactState = {
  itens: []
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contact) => contact.id !== action.payload
      )
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const contactAlreadyExist = state.itens.some((c) => {
        const result =
          c.email.trim().toLowerCase() ===
          action.payload.email.trim().toLowerCase()
        return result
      })

      if (contactAlreadyExist) {
        alert('Já existe um contato com esse email')
        return state
      } else {
        const lastContact = state.itens[state.itens.length - 1]
        const newContact: Contact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        const updatedItens = [...state.itens, newContact]

        return {
          ...state,
          itens: updatedItens
        }
      }
    }
  }
})

export const { remover, edit, register } = contactSlice.actions
export default contactSlice.reducer
