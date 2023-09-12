import { createRoot } from 'react-dom/client'
import './styles.css'
import './pmndrs.css'
import App from './App'

import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById('root')).render(<App />)
