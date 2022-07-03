import React, { Suspense } from 'react'

import { I18nextProvider } from 'react-i18next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import RouterSwitch from 'components/application/router-switch'
import ScreenLoader from 'components/molecules/screen-loader'
import GlobalStyle from 'config/globalStyle'
import i18n from 'config/i18n'
import theme from 'config/theme'

const queryClient = new QueryClient()

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<ScreenLoader />}>
            <I18nextProvider i18n={i18n}>
              <RouterSwitch />
            </I18nextProvider>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
