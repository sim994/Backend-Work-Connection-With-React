import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouteControl from './Route-Control.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteControl />
  </StrictMode>,
)
