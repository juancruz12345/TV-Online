import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '../context/channel.jsx'
import { Suspense } from 'react'
import { Loading } from '../components/Loading.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
       <ThemeProvider>
       <Suspense fallback={<Loading />}>
        <App></App>
        </Suspense>
       </ThemeProvider>
    </BrowserRouter>
  
)
