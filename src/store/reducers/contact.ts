import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactState = {
  itens: Contact[]
}

const initialState: ContactState = {
  itens: [
    {
      id: 1,
      name: 'Leonardo',
      email: 'leonardo@gmail.com',
      phoneNumber: '4199999999'
    },
    {
      id: 2,
      name: 'Moretti',
      email: 'moretti@gmail.com',
      phoneNumber: '4198765432'
    }
  ]
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
    }
  }
})

export const { remover, edit } = contactSlice.actions
export default contactSlice.reducer
