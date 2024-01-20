import Layout from '../../components/Layout'
import { Container, Button, Col, Form, Row, Card } from 'react-bootstrap'
import { Formik } from 'formik'
import { useState } from 'react'
function Contact() {
   const [ data, setData] = useState({})
   console.log(data);
    return (
        <Layout>
            <Container className='py-3'>
                <Row>
                    <Col md={6}>
                        <Formik
                            initialValues={{
                                username: '',
                                email: '',
                                contact: '',
                                message: ''
                            }}

                            onSubmit={(values, { resetForm, setSubmitting }) => {
                                setData(values)
                                setSubmitting(false)
                                resetForm();
                            }}
                        >
                            {
                                ({ values, handleSubmit, handleChange, isSubmitting }) => {
                                    return (
                                        <Card>
                                            <Card.Header>Contact Us</Card.Header>
                                            <Card.Body>
                                                <Form onSubmit={handleSubmit}>
                                                    <Form.Group controlId='username' className='my-2'>
                                                        <Form.Label>Enter Name</Form.Label>
                                                        <Form.Control type="text" value={values.username} onChange={handleChange} />
                                                    </Form.Group>
                                                    <Form.Group controlId='email' className='my-2'>
                                                        <Form.Label >Enter Email</Form.Label>
                                                        <Form.Control type="email" value={values.email} onChange={handleChange} />
                                                    </Form.Group>
                                                    <Form.Group controlId='contact' className='my-2'>
                                                        <Form.Label >Enter Contact</Form.Label>
                                                        <Form.Control type="contact" value={values.contact} onChange={handleChange} />
                                                    </Form.Group>
                                                    <Form.Group controlId='message' className='my-2'>
                                                        <Form.Label>Message Here</Form.Label>
                                                        <Form.Control as="textarea" rows={3}  value={values.message} onChange={handleChange}/>
                                                    </Form.Group>
                                                    <Button className='form-control my-4' type='submit' disabled={isSubmitting}>SEND</Button>
                                                </Form>
                                            </Card.Body>
                                        </Card>
                                    )
                                }
                            }
                        </Formik>
                    </Col>
                    <Col md={6}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.6728888523!2d72.65748223205493!3d21.15944056645878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1705516655254!5m2!1sen!2sin" width="100%" height="100%" loading="lazy"></iframe>
                    </Col>
                </Row>
            </Container>
        </Layout >
    )
}

export default Contact
