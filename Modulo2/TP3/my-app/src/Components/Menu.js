import {Link} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import AuthContext from '../Context/AuthContext'

const styles = {
    nav:{
        marginBottom:"2%"
    }
}

function Menu(props){
    const {login} = props

    return(
        <>
            <AuthContext.Consumer>
            {
                context=>
                    <Navbar  bg="light" expand="lg" style={styles.nav}>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav  className="me-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                
                                {!context.userLogin &&
                                    <>
                                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                        <Nav.Link as={Link} to="/register">Registrarse</Nav.Link>
                                    </>                                    
                                }                                
                                
                                {context.userLogin &&
                                    <Nav.Link onClick={context.logoutUser}>Salir</Nav.Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
            }
            </AuthContext.Consumer>
        </>
    )
}
export default Menu