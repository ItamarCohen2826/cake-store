// eslint-disable-next-line
import { Nav, Container, NavLink } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const NavigationBar = () => {
    return (
        <Navbar bg="light" variant="light" expand='sm' collapseOnSelect fixed='top'  className='justify-content-center data-bs-toggle' >
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id='navbarScroll'>
                <Nav>
                    <NavLink eventKey={1} as={Link} to='/'>Home</NavLink>
                    <NavLink eventKey={2} as={Link} to='/about'>Register</NavLink>
                    <NavLink eventKey={3} as={Link} to='/contact'>Login</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
