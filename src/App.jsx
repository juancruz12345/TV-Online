

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import { VerCanal } from '../components/VerCanal'
import { Home } from '../components/Home';


function App() {

  

    

  return (
    <>
    <Routes>
      <Route  path='/' element={<Home/>}></Route>
      <Route  path='/:categoria' element={<Home/>}></Route>
      <Route  path='/canales' element={<Home/>}></Route>
     
      <Route  path='/canales/:nombre' element={<VerCanal/>}></Route>
      
      
      
      
    </Routes>
      
    </>
  )
}

export default App
