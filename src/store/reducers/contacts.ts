import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contact from '../../models/Contacts'

const contactSlice = createSlice({
  name: 'contact',
  initialState: [
    new Contact('Fabricio Menezes', 931358823, 'Fabricio-Menezes@live.com', 1)
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((contact) => contact.id !== action.payload)
    }
  }
})

export const { remove } = contactSlice.actions

export default contactSlice.reducer
