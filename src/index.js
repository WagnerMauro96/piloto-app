import './styles/global.css'
import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './components/App'

render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('alvo')
)
