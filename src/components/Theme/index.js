import React from 'react'
import defaultTheme from './defaultTheme'
import { ThemeProvider as Provider } from 'styled-components'

export const ThemeProvider = ({theme, children}) => {
  return (
    <Provider theme={{...defaultTheme, ...theme}}>
      {children}
    </Provider>
  )
}

export * from './css'
export * from './defaultTheme'
