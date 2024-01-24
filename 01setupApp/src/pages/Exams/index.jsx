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
                Authorization: 'Bearer ' + localStorage.getItem('token')
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
