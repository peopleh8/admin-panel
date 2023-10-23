import { configureStore, combineReducers } from '@reduxjs/toolkit'
import eventsReducer from '@/store/reducers/eventsReducer'
import menuReducer from '@/store/reducers/menuReducer'
import profileReducer from '@/store/reducers/profileReducer'

const rootReducer = combineReducers({
  events: eventsReducer,
  menu: menuReducer,
  profile: profileReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  }) 
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']