import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { Login } from './shared/pages/login/Login.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)
