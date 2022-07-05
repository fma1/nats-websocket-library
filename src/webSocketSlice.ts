import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// TODO: FIXME
import type { RootState } from '../../app/store'

interface WebSocketMsg {
  // TODO: FIXME
}

// Define a type for the slice state
interface State {
  // TODO: FIXME
  webSocketMsg: any 
}

// Define the initial state using that type
const initialState: State = {
  // TODO: FIXME
  webSocketMsg: null, 
}

export const webSocketSlice = createSlice({
  name: 'websocket',
  initialState,
  reducers: {
    updateState: (state, action: PayloadAction<WebSocketMsg>) => {
      { webSocketMsg: action.payload }
    },
  },
})

export const { updateState } = webSocketSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.webSocketMsg

export default webSocketSlice.reducer
