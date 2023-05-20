import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Resetcss } from './components-styles/Styles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Resetcss/>
      <App />
  </React.StrictMode>,
)