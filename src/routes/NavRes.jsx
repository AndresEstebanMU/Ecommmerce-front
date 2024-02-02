



import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import UserContext from '../context/user/UserContext';
import { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Cart from '../db/Cart';
import Products from '../db/Products';


function BasicExample() {

    const { infoUser, signOut, authStatus, verifyToken} = useContext(UserContext)


    const [userName, setUserName] = useState("No conectado")
   
    console.log(infoUser)
    useEffect(() => {
        const getInfoUser = async() => {
            await verifyToken()
            setUserName(infoUser.name)
        }
        getInfoUser()
    } , [userName])


    


  return (
    <Navbar expand="lg" id='navres' className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to="/"><div className="botika"></div></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id='listaRes' className="me-auto">
            <Cart />
          
                
            <div>
            <Link to="/help" onClick={window.scrollTo(0, 0)} className="text-link">
              Centro de ayuda
            </Link></div>
            <div>{authStatus ? <Button onClick={signOut} className="me-3">Logout</Button> : <Link to="/auth" className="text-link">
              Log In
              
              </Link>}</div>
            <div>{authStatus &&  
            <Link to="/user/profile" className="text-link">Mi perfil</Link>
            
            }</div>
        
            <div id='lupaRes'><Products /></div>

            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;