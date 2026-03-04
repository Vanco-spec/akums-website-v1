import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css';

// import './styles.css'
import 'animate.css'

// import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { motion } from "framer-motion"

import './index.css'

// Your Global CSS
import './styles/global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />   
  </StrictMode>,
)
