import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

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
    },
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const { name, email, phone } = action.payload

      const nameDuplicate = state.items.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
      const emailDuplicate = state.items.find(
        (contact) => contact.email.toLowerCase() === email.toLowerCase()
      )
      const phoneDuplicate = state.items.find(
        (contact) => contact.phone === phone
      )

      if (nameDuplicate) {
        alert('name already exists')
      } else if (emailDuplicate) {
        alert('Email already exists')
      } else if (phoneDuplicate) {
        alert('Phone already exists')
      } else {
        const lastContact = state.items[state.items.length - 1]
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.items.push(newContact)
        alert('sucesso')
      }
    }
  }
})

export const { remove, edit, register } = contactSlice.actions

export default contactSlice.reducer
