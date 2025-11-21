import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Convert, Pic } from './Pic.jsx'
import Greeting from './Greeting.jsx'
import App from './App.jsx'
import { Person } from './Person.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Greeting /> */}
    {/* <Pic /> */}
    {/* <Convert /> */}
   <Person />

  </StrictMode>,
)
