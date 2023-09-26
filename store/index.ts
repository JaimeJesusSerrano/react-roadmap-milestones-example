import { configureStore } from '@reduxjs/toolkit'

import translationsReducer from './reducers/translations'

export const reducers = {
  translations: translationsReducer,
}

const store = configureStore({
  reducer: reducers,
})

export default store
export type RootState = ReturnType<typeof store.getState>
