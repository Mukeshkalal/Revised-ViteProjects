import { Container, Navbar } from 'react-bootstrap'
function Footer() {
    return (
        <Navbar expand="lg" bg="dark" className='text-light'>
            <Container className='justify-content-around'>
                <p className="pt-4"> &copy; Power By MukesH 2024!</p>
            </Container>
        </Navbar>
    )
}

export default Footer
