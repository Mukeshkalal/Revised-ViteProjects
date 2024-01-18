import { Button, Card, Container, Form } from "react-bootstrap"
import Layout from "../../../components/Layout"
import { Formik } from 'formik'
import * as Yup from 'yup'

function Register() {

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
                                console.log(values);
                                setSubmitting(false)
                                resetForm()
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
                                            <Button type="submit" disabled={isSubmitting}>REGISTER</Button>
                                        </Form>
                                    )
                                }
                            }
                        </Formik>
                    </Card.Body>
                </Card>
            </Container>
        </Layout>
    )
}

export default Register
