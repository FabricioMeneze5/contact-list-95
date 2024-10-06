import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contact from '../../models/Contacts'

type contactState = {
  items: Contact[]
}

const initialState: contactState = {
  items: [
    {
      name: 'Fabricio Menezes',
      phone: 931358823,
      email: 'Fabricio-Menezes@live.com',
      id: 1
    },
    {
      name: 'Barbara Menezes',
      phone: 948454518,
      email: 'Barbara-Menezes@live.com',
      id: 2
    },
    {
      name: 'Rita Menezes',
      phone: 931358823,
      email: 'Rita-Menezes@live.com',
      id: 3
    },
    {
      name: 'Lucas Carmos',
      phone: 931358823,
      email: 'Lucas-Carmos@live.com',
      id: 4
    }
  ]
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      )
    }
  }
})

export const { remove } = contactSlice.actions

export default contactSlice.reducer
