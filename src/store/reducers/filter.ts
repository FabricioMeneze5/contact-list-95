import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FilterState = {
  term?: string | number
}

const initialState: FilterState = {
  term: undefined
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string | number>) => {
      state.term = action.payload
    }
  }
})

export const { changeFilter } = filterSlice.actions

export default filterSlice.reducer
