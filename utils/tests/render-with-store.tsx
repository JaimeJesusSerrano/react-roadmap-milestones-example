import { configureStore } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import { reducers, RootState } from '@/store'

const testStore = (state: Partial<RootState>) => {
  return configureStore({
    reducer: reducers,
    preloadedState: state,
  })
}

export function renderWithStore(
  component: JSX.Element,
  {
    initialState = {},
    // Automatically create a store instance if no store was passed in
    store = testStore(initialState),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(component, { wrapper: Wrapper, ...renderOptions }) }
}
