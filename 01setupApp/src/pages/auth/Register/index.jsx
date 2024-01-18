import { Alert, Button, Card, Container, Form } from "react-bootstrap"
import Layout from "../../../components/Layout"
import axios from 'axios'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useState } from "react"

function Register() {
    const [serverErr, setServerErr] = useState("")
    const [serverData, setServerData] = useState("")

    setTimeout(()=>{!serverErr, 5000})

    const registerSchema = Yup.object({
        name: Yup.string().required().min(3),
        email: Yup.string().required().min(3).email(),
        password: Yup.string().required().min(6).max(15),
        c_password: Yup.string().required().oneOf([Yup.ref("password")], "Password not match")
    })
    return (
        <Layout>
            <Container>
                <Card>
                    <Card.Header>
                        Sign Up
                    </Card.Header>
                    <Card.Body>
                        <Formik
                            onSubmit={(values, { resetForm, setSubmitting }) => {
                                axios.post('https://api.darwinstech.com/api/register', values).then(res => {
                                    setServerData(res.data.msg)
                                    console.log('dane=====>', res.data.msg)
                                    setSubmitting(false)
                                    resetForm()
                                }).catch((err) => {
                                    setServerErr(err.response.data.message)
                                    console.log('error======>', err.response.data.message);
                                    setSubmitting(false)
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
                            {
                                ({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
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
                                                    <span className="invalid-feedback">{errors.email}</span>
                                                ) : (
                                                    ""
                                                )}
                                            </Form.Group>
                                            <Form.Group controlId="password" className="mb-3">
                                                <Form.Label>Enter Password</Form.Label>
                                                <Form.Control type="password" value={values.password} onChange={handleChange} className={errors.password ? "is-invalid" : ""}
                                                />
                                                {errors.password ? (
                                                    <span className="invalid-feedback">{errors.password}</span>
                                                ) : (
                                                    ""
                                                )}
                                            </Form.Group>
                                            <Form.Group controlId="c_password" className="mb-3">
                                                <Form.Label>Cunform Password</Form.Label>
                                                <Form.Control type="password" value={values.c_password} onChange={handleChange} className={errors.c_password ? "is-invalid" : ""}
                                                />
                                                {errors.c_password ? (
                                                    <span className="invalid-feedback">{errors.c_password}</span>
                                                ) : (
                                                    ""
                                                )}
                                            </Form.Group>
                                            <Button type="submit" disabled={isSubmitting}>{
                                                isSubmitting ?
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2 text-danger" aria-hidden="true">
                                                        </span>
                                                        <span role="status">Loading...</span>
                                                    </>
                                                    : "REGISTER"
                                            }
                                            </Button>
                                        </Form>
                                    )
                                }
                            }
                        </Formik>
                        {serverErr ? <Alert className="alert alert-danger mt-2">{serverErr}</Alert> : ''}
                        {serverData ? <Alert className="alert alert-success mt-2">{serverData}</Alert> : ''}
                    </Card.Body>
                </Card>
            </Container>
        </Layout>
    )
}

export default Register
