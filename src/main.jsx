import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Modal from 'react-modal'

import { Provider } from 'react-redux'
import store from './store/index.js'

import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.js'
import './index.css';


Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
 </React.StrictMode>,
)
