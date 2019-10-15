import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { ThemeProvider } from './components'

import { store } from './store'
import App from './containers/App'
import './index.css'

const Index = () => 
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>

ReactDOM.render(<Index />, document.getElementById('root'))
