import { Container } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }
    })
    return (
        <Layout>
            <Container className='py-5'>
                hello Dashboard
            </Container>
        </Layout>
    )
}

export default Dashboard
