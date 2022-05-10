import {Link} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const styles = {
    nav:{
        marginBottom:"2%"
    }
}

function Menu(){
    return(
        <>
            <Navbar  bg="light" expand="lg" style={styles.nav}>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav  className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/register">Registrarse</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default Menu