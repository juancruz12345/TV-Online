import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Form, Image, NavDropdown } from 'react-bootstrap';
import './Header.css'
import { IconMoon, IconSun, IconSearch } from '@tabler/icons-react';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/channel';
import logo from '../public/tv-television-channel-icon-logo-260nw-1699488001(1).png'
import { canales } from '../hooks/canales';
import { ToastComponent } from './ToastComponent';


export function Header(){

  const {theme, toggleTheme} = useContext(ThemeContext)
  const [categoria, setCategoria] = useState('todos')
  const [canal, setCanal] = useState('')
  const [hidden, setHidden] = useState(true)
  
  document.querySelector('html').setAttribute('data-bs-theme',theme)
  
  const handleChangeCategory = (e) =>{
    setCategoria(e.target.textContent)
  } 

  const handleChange = (e) => {
    setCanal(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let filterChannels = canales.filter(e=>e.nombre.toLowerCase()===canal.toLowerCase())
    console.log(filterChannels)
    if(filterChannels.length>0){
      
      window.location.href = `/canales/${canal}`
    }
    else{
      setHidden(false)
      setTimeout(()=>{setHidden(true)},3000)
    }
    
  }
 

    return(
    
         <div className='nav'>
        <Navbar expand="lg" className="bg-body-tertiary" id='navbar'>
      <Container>
        <Navbar.Brand href="/">TV Online<Image className='logo-img' src={logo}></Image></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='link-nav' href="/">Inicio</Nav.Link>

            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleChangeCategory} href={`/${categoria}`} >tv-online</NavDropdown.Item>
              <NavDropdown.Item onClick={handleChangeCategory} href={`/${categoria}`} >entretenimiento</NavDropdown.Item>
              <NavDropdown.Item onClick={handleChangeCategory} href={`/${categoria}`} >deportes</NavDropdown.Item>
              <NavDropdown.Item onClick={handleChangeCategory} href={`/${categoria}`}>musica</NavDropdown.Item>
              <NavDropdown.Item onClick={handleChangeCategory} href={`/${categoria}`}>infantiles</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleChangeCategory} href={`/${categoria}`}>todos</NavDropdown.Item>
              </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse id="basic-navbar-nav">
          <div className='div-search'>
          <Form className='form-search' onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control onChange={handleChange} className='search' placeholder='buscar canal'></Form.Control>
            </Form.Group>
            <Button type='submit' variant={theme}><IconSearch></IconSearch></Button>
          </Form>
          
          </div>
        </Navbar.Collapse>
      
        <Navbar.Collapse className="justify-content-end">
          {
            theme === 'light'
            ? <Button className='btn-theme' variant={theme} onClick={toggleTheme}><IconMoon></IconMoon></Button>
            : <Button className='btn-theme' variant={theme} onClick={toggleTheme}><IconSun></IconSun></Button>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='toast-div'>
    <ToastComponent hidden={hidden} setHidden={setHidden}></ToastComponent>
    </div>
    </div>
   
    
    )
}