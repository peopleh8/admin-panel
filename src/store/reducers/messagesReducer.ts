import { createSlice } from '@reduxjs/toolkit'

const messagesReducer = createSlice({
  name: 'messages',
  initialState: {
    isChatListOpen: false,
  },
  reducers: {
    setChatListOpen(state, action) {
      state.isChatListOpen = action.payload
    },
  }
})

export default messagesReducer.reducer
export const { setChatListOpen } = messagesReducer.actions