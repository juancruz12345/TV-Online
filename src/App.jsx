

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import { VerCanal } from '../components/VerCanal'
import { Home } from '../components/Home';


function App() {

  

    /*<Route path='/plant/:id' element={<Detalle />} />*/ 

  return (
    <>
    <Routes>
    
      <Route exact path='/:categoria' element={<Home/>}></Route>
      <Route exact path='/canales' element={<Home/>}></Route>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/canales/:nombre' element={<VerCanal/>}></Route>
      
      
      
    </Routes>
      
    </>
  )
}

export default App
