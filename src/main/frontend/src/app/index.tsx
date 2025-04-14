import { StrictMode } from 'react'
import { Router } from './providers/router'
import './styles/index.css'

export const App = () => {
  return (
    <StrictMode>
      <Router />
    </StrictMode>
  )
} 