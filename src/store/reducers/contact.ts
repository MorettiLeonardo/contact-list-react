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
      number: 4199999999
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
    }
  }
})

export const { remover } = contactSlice.actions
export default contactSlice.reducer
