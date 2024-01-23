import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Navigation() {

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink to="/" className='navbar-brand'>The India</NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/contact" className='nav-link'>Contact US</NavLink>
                        <NavLink to="/register" className='nav-link'>Register</NavLink>
                        <NavLink to="/" className='nav-link'>Logout</NavLink>
                        <NavLink to="/login" className='nav-link'>Login</NavLink>
                        <NavLink to="/exams" className='nav-link'>Exams</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
