import { createSlice } from '@reduxjs/toolkit'

const translationsSlice = createSlice({
  name: 'translations',
  initialState: null,
  reducers: {
    set(state, action) {
      return action.payload
    },
  },
})

export const { set } = translationsSlice.actions

export default translationsSlice.reducer
