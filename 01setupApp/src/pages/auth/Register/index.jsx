import { Alert, Button, Card, Container, Form, Spinner } from "react-bootstrap"
import Layout from "../../../components/Layout"
import axios from 'axios'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register() {
    const [serverErr, setServerErr] = useState("")
    const navigate = useNavigate()

    const registerSchema = Yup.object({
        name: Yup.string().required().min(3),
        email: Yup.string().required().min(3).email(),
        password: Yup.string().required().min(6).max(15),
        c_password: Yup.string().required().oneOf([Yup.ref("password")], "Password not match")
    })
    return (
        <Layout>
            <Container className="py-2">
                <Card>
                    <Card.Header>
                        Sign Up
                    </Card.Header>
                    <Card.Body>
                        {serverErr ? <Alert variant="danger" className="my-2">{serverErr}</Alert> : ''}
                        <Formik
                            onSubmit={(values, { resetForm, setSubmitting }) => {
                                axios.post('https://api.darwinstech.com/api/register', values).then(res => {
                                    setServerErr(res.data.msg)
                                    // console.log('dane=====>', res.data.msg)
                                    setSubmitting(false);
                                    resetForm();
                                    navigate('/login');

                                }).catch((err) => {
                                    setServerErr(err.response.data.message);
                                    // console.log('error======>', err.response.data.message);
                                    setSubmitting(false);
                                })
                            }}
                            initialValues={{
                                name: '',
                                email: '',
                                password: '',
                                c_password: ''
                            }}
                            validationSchema={registerSchema}
                        >
                            {({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
                                return (
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="name" className="mb-3">
                                            <Form.Label>Enter name</Form.Label>
                                            <Form.Control type="text" value={values.name} onChange={handleChange} className={errors.name ? "is-invalid" : ""}
                                            />
                                            {errors.name ? (
                                                <span className="invalid-feedback">{errors.name}</span>
                                            ) : (
                                                ""
                                            )}
                                        </Form.Group>
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
                                        <Form.Group controlId="c_password" className="mb-3">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="password" value={values.c_password} onChange={handleChange} className={errors.c_password ? "is-invalid" : ""}
                                            />
                                            {errors.c_password ? (
                                                <Form.Control.Feedback type="invalid">{errors.c_password}</Form.Control.Feedback>
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
                                                : "REGISTER"
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

export default Register
