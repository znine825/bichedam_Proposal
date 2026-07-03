import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Outline from './Page/1.Outline/Outline.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Outline />
  </StrictMode>
)
