import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contact from '../../models/Contacts'
import contactsData from '../../models/contactsData'

type contactState = {
  items: Contact[]
}

const initialState: contactState = {
  items: contactsData
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      )
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.items.findIndex(
        (c) => c.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.items[contactIndex] = {
          ...state.items[contactIndex],
          ...action.payload
        }
      }
    }
  }
})

export const { remove, edit } = contactSlice.actions

export default contactSlice.reducer
