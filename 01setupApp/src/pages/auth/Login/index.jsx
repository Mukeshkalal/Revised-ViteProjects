import { Alert, Button, Card, Container, Form, Spinner } from "react-bootstrap"
import Layout from "../../../components/Layout"
import axios from 'axios'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
    const [serverErr, setServerErr] = useState("")
    const navigate = useNavigate()

    const loginSchema = Yup.object({
        email: Yup.string().required().min(3).email(),
        password: Yup.string().required().min(6).max(15),
    })
    return (
        <Layout>
            <Container className="py-3">
                <Card>
                    <Card.Header>
                        Sign In
                    </Card.Header>
                    <Card.Body>
                        {serverErr ? <Alert variant='danger' className="my-2">{serverErr}</Alert> : ''}
                        <Formik
                            onSubmit={(values, { resetForm, setSubmitting }) => {
                                axios.post('https://api.darwinstech.com/api/login', values).then(res => {
                                    // setServerErr(res.data.msg)
                                    // console.log('dane=====>', res.data.data.token)
                                    localStorage.setItem('token', res.data.data.token)
                                    setSubmitting(false);
                                    resetForm();
                                    navigate('/dashboard');

                                }).catch((err) => {
                                    setServerErr(err.response.data.msg);
                                    // console.log('error======>', err.response.data.msg);
                                    setSubmitting(false);
                                })
                            }}
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            validationSchema={loginSchema}
                        >
                            {({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
                                return (
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="email" className="mb-3">
                                            <Form.Label>Enter Email</Form.Label>
                                            <Form.Control type="email" value={values.email} onChange={handleChange} className={errors.email ? "is-invalid" : ""}
                                            />
                                            {errors.email ? (
                                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                            ) : (
                                                ""
                                            )}
                                        </Form.Group>
                                        <Form.Group controlId="password" className="mb-3">
                                            <Form.Label>Enter Password</Form.Label>
                                            <Form.Control type="password" value={values.password} onChange={handleChange} className={errors.password ? "is-invalid" : ""}
                                            />
                                            {errors.password ? (
                                                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                            ) : (
                                                ""
                                            )}
                                        </Form.Group>
                                        <Button type="submit" disabled={isSubmitting}>{
                                            isSubmitting ?
                                                <>
                                                    <Spinner animation="border"
                                                        size="sm" className="me-2" aria-hidden="true">
                                                    </Spinner>
                                                    <span role="status">Loading...</span>
                                                </>
                                                : "Login"
                                        }
                                        </Button>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </Card.Body>
                </Card>
            </Container>
        </Layout>
    )
}

export default Login
