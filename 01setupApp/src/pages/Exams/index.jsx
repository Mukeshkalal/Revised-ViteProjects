import { Button, Card, Col, Container, Row } from "react-bootstrap"
import Layout from "../../components/Layout"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { FaCheckCircle } from "react-icons/fa";
import { RxLapTimer } from "react-icons/rx";
import axios from 'axios'

function Exams() {
    const [isLoginTo, setIsLoginTo] = useState(false)
    const [lists, setLists] = useState([])

    const callApi = () => {
        axios.get('https://api.darwinstech.com/api/exams', {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzEyZmYzYTIzYWM4ZDcxY2Q5NWE1YjczMDE5OTkxMmIxZmRlOTM3ZmRlNjJlMTI4YTFhNDVhMzg2YjRkZDIzMzljNmVlZDYxMmY4MWFiYTAiLCJpYXQiOjE3MDYwMTU4MTUuMjUxMDU4LCJuYmYiOjE3MDYwMTU4MTUuMjUxMDYsImV4cCI6MTczNzYzODIxNS4yNDk3ODIsInN1YiI6IjEzNyIsInNjb3BlcyI6W119.IP4XRVxI7CwwavfAK8dh0Gp8_3zW2O_9x2E0Dj_jqbKLNMixGaBN3vHuQPl13GSL6ILw6XqXDrSSiIRMd2qdMnNjVNC0Y4rR3iKfJWQzp0cP6STy7stQf4-avaTK_c1jJd7g-MQO7-kvaLnDaHaQfDhpKE9RY2hwI7ydYRL3206fOANVzC1l5pXcQrwwDT4gy0mMo5bK1kE_7_6eW7r-HUrN9JnMxzyO9jnrGQJG9ke3SmQWswZ6_diWub3wfVEgEQkiQm0w0vztzaeg630sc6n-DWuablj4HTgZXYQpIXXnx0QJDpy_b8Y_CBPkKDr2UgtitI2gtQOKHeKBDfyGc7NZlCnqKDrtcNcD4iBNNUQxRmi24Z6eW2VC6bPhvqmehFGkPRcNPx7DrSBHWWXWiMVRNXyo0InVbPccasa8RWR2g3bLOedYMqXasGAlyG4Trl6yRxykfB3XsQIlYZ1IkUyiq7WF9pt4ixO-EhhWjMzEJplCBvSbJ2w1Pw0Et6r1SdDHM9tq6z-1-CZVOK0FR2TIGE3hNpc7fSJShGPcARhw8Lh5ZSS4A02LHkikYNQN1hryGloLw29zL0BMf438f4dU2USo-oYgVvWQXGJAdtsJVQU_5DYU9S4Xz7U1TTjJn4pbxk408adiYmXefQFNqrsF-u0eUIgKlOyhGdRhu7A'
            }
        }).then((resp) => {
            setLists(resp.data)
            console.log(resp.data)
        }).catch((err) => {
            console.log('Erroe=====>qq', err);
        })
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLoginTo(true);
            callApi();
        }
    }, [])

    return (
        <Layout>
            <Container className="py-2">
                {
                    isLoginTo ?
                        <>
                            <h2>Exams Data</h2>
                            <Row className="g-2">
                                {
                                    lists.map((exm, i) => {
                                        return (
                                            <>
                                                <Col md={3}>
                                                    <Card key={exm.id}>
                                                        <Card.Header>{i + 1}. {exm.name.length >= '20' ? (exm.name.slice(0, 20) + '...') : (exm.name)}</Card.Header>
                                                        <Card.Body>{exm.description.length >= '100' ? (exm.description.slice(0, 100)) + '...' : (exm.description)}</Card.Body>
                                                        <Card.Body className="d-flex justify-content-between">
                                                            <div><FaCheckCircle color="red" size={20} />{exm.marks}</div>
                                                            <div><RxLapTimer color="red" size={20} />{exm.duration}</div>
                                                        </Card.Body>
                                                        <Card.Footer>
                                                            <Button className="w-100">Read More</Button>
                                                        </Card.Footer>
                                                    </Card>
                                                </Col>
                                            </>
                                        );
                                    })
                                }

                            </Row>
                        </> : <Card>
                            <Card.Header>If you not a Login to side to First...</Card.Header>
                            <Card.Body>AT You are <Link to='/login'>Login</Link> To Here..?</Card.Body>
                        </Card>
                }


            </Container>
        </Layout >
    )
}

export default Exams
