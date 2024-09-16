import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '../context/channel.jsx'
import { Suspense } from 'react'
import { Loading } from '../components/Loading.jsx'

createRoot(document.getElementById('root')).render(
  
  
       <ThemeProvider>
       <Suspense fallback={<Loading />}>
        <BrowserRouter>
        <App></App>
        </BrowserRouter>
        </Suspense>
       </ThemeProvider>
  
  
)
