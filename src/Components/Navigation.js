import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Navigation.css';
import {useStateValue} from './Stateprovide.js';
function Navigation() {
    const [{user},dispatch]=useStateValue();
    return (
        <div>
    <Navbar bg="light" expand="lg">
        <Link to="/" ><Navbar.Brand >Smart City</Navbar.Brand></Link>
        <Navbar.Brand className="nav-style1" >{user}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div className="navstyle">
        <Nav className="mr-auto">
        <Link className="link" to="/"> <Nav.Link href="/">Home</Nav.Link></Link>
       {user==='Guset User' && <Link className="link" to="/signup"><Nav.Link href="/signup">Signup</Nav.Link></Link> }
       {user==='Guset User' && <Link className="link"  to="/login"><Nav.Link href="/login">Login</Nav.Link></Link>}
       {user !=='Guset User' && <Link className="link" to="/upload"><Nav.Link href="/details">Upload</Nav.Link></Link>}
       {user!=='Guset User' && <Link className="link" to="/" ><Nav.Link onClick={()=>{dispatch({
           type:'REMOVEUSER',
           user:'Guset User'
       })}} href="/login">Logout</Nav.Link></Link>}
        </Nav>
        </div>
        </Navbar.Collapse>
    </Navbar>
        </div>
    )
}

export default Navigation
