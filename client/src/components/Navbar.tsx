import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import  { Link } from 'react-router-dom';

const AppNavbar = () => {
    return (
        <Navbar expand='lg' fixed="top" style={{ backgroundColor: '#283B28', borderBottom: '1px solid #4E6A5B' }}>
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ color: 'E0DED1', fontWeight: 'bold', letterSpacing: '1px' }}>
                    WORLDSPHERE
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" style={{ filter: 'invert(1)' }} />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto align-items-center'>
                        <Nav.Link as={Link} to='/' className='px-3' style={{ color: '#E0DED1' }}>Home</Nav.Link>
                        <Nav.Link as={Link} to='/animals' className='px-3' style={{ color: '#E0DED1' }}>Animals</Nav.Link>
                        <Nav.Link as={Link} to='/plants' className='px-3' style={{ color: '#E0DED1' }}>Plants</Nav.Link>
                        <Nav.Link as={Link} to='/waters' className='px-3' style={{ color: '#E0DED1' }}>Waters</Nav.Link>
                        <Nav.Link as={Link} to='/about' className='px-3' style={{ color: '#E0DED1' }}>About</Nav.Link>
                        <Button as={Link as any} to='/about' classsName="ms-lg-3 shadow-none border-0" style={{ backgroundColor: '#282B1B', fontWeight: '600' }}>
                            Take Action
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;