import Container from '../../components/Container'
import Layout from '../../components/Layout'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Formik } from 'formik'
function Contact() {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col md={6}>
                        <Formik
                            initialValues={{
                                username: '',
                                email: '',
                                contact: ''
                            }}

                            onSubmit={(values, {resetForm, setSubmitting}) => {
                                console.log(values);
                                setSubmitting(false)
                                resetForm();
                            }}
                        >
                            {
                                ({values, handleSubmit, handleChange, isSubmitting }) => {
                                    console.log(values);
                                    return (<Form onSubmit={handleSubmit}>
                                        <div>
                                            <Form.Label htmlFor="username">Enter Name</Form.Label>
                                            <Form.Control type="text" name='username' id='username' value={values.name} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <Form.Label htmlFor="email">Enter Email</Form.Label>
                                            <Form.Control type="email" name='email' id='name' value={values.email} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <Form.Label htmlFor="contact">Enter Contact</Form.Label>
                                            <Form.Control type="contact" name='contact' id='contact' value={values.contact} onChange={handleChange} />
                                        </div>
                                        <Button className='form-control my-4' type='submit' disabled={isSubmitting}>SEND</Button>
                                    </Form>
                                    )
                                }
                            }
                        </Formik>
                    </Col>
                    <Col md={6}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.6728888523!2d72.65748223205493!3d21.15944056645878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1705516655254!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} loading="lazy"></iframe>
                    </Col>
                </Row>
            </Container>
        </Layout >
    )
}

export default Contact
