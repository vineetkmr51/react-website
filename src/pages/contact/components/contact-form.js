import React, { useState } from "react";
import { Formik } from "formik";
// import * as yup from 'yup';
import { Container, Col, Row, Form, Button } from "react-bootstrap";

function ContactForm() {
  const [formStatus, setFormStatus] = React.useState('Send Message')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, company, email, mobile, message } = e.target.elements
    let contactForm = {
      name: name.value,
      company: company.value,
      email: email.value,
      mobile: mobile.value,
      message: message.value,
    }
    console.log(contactForm)
  }
  return (
    <div className="contact-form pb-5">
      <Container>
        <div className="padding-xl">
          <div className="position-relative">
            <div className="content">
              <div className="sub-heading text-center">
                <h2 className="pt-3 mt-2 pb-3">Get In Touch & Get Started</h2>
                <p>Please send us a message and we will get back to you</p>
              </div>
              <Row>
                <Col lg="7">
                  <div className="form mt-5">
                    <Formik>
                      <Form  onSubmit={onSubmit}>
                        <Row>
                          <Col md="6">
                            <Form.Group
                              className="mb-3 w-100"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Name</Form.Label>
                              <Form.Control
                                type="text"
                                className=" w-100 text-capitalize"
                                name="name"
                              />
                            </Form.Group>
                          </Col>
                          <Col md="6">
                            <Form.Group
                              className="mb-3 w-100"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Company</Form.Label>
                              <Form.Control
                                type="text"
                                className=" w-100 text-capitalize"
                                name="company"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6">
                            <Form.Group
                              className="mb-3 w-100"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                type="email"
                                className=" w-100"
                                name="email"
                              />
                            </Form.Group>
                          </Col>
                          <Col md="6">
                            <Form.Group
                              className="mb-3 w-100"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Mobile</Form.Label>
                              <Form.Control
                                type="tel"
                                className=" w-100"
                                name="mobile"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <Form.Group className="mb-4">
                              <Form.Label>Message</Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={8}
                                name="message"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6"></Col>
                          <Col md="6">
                            <div className="d-flex pb-5 pt-2 mb-2 justify-content-center justify-content-md-end">
                              <Button variant="secondary" type="submit">
                              {formStatus}
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </Formik>

                    {/* <div className="thanks-design">
                        <h3>Thanks for messaging!</h3>
                        <p>
                          We have received your message, we will get back to you
                          soon.
                        </p>
                      </div> */}
                  </div>
                </Col>
                <Col lg="5">
                  <div className="information pl-lg-4 pt-5">
                    <div className="list-item ml-1 mt-3 mb-5">
                      <h6>Connect with us</h6>
                      <p>
                        sales@ilitesoft.com
                        <br />
                        (510) 790 2000
                      </p>
                    </div>
                    <div className="list-item ml-1 mb-5">
                      <h6>Head Office</h6>
                      <p>
                        39510 Paseo Padre Parkway, <br />
                        Suite 110, Fremont, CA 94538
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactForm;
