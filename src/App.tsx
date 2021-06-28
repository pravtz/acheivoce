import React from 'react'
import DefaultTheme from './style/theme/main'

import { ThemeProvider } from 'styled-components'
import GlobalStyled from './style/global'
import Routes from './routes'

const App = () => (
  <ThemeProvider theme={DefaultTheme}>
    <Routes />
    <GlobalStyled />
  </ThemeProvider>
)

export default App
