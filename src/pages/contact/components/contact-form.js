import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

function ContactForm() {
  const intialValues = {
    name: "",
    email: "",
    company: "",
    mobile: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formStatus, setFormStatus] = React.useState("Send Message");
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formErrors);
      setFormStatus("Submitting...");
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));

    setIsSubmit(true);
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexMobile = /^(?:(?:\+|0{0,2})?(\s*[\-]\s*)?|[0]?)?[456789]\d{9}$/i;

    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.company) {
      errors.company = "Company is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.mobile) {
      errors.mobile = "Mobile is required!";
    } else if (!regexMobile.test(values.mobile)) {
      errors.mobile = "Pls enter valid mobile number!";
    }
    return errors;
  };
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
                      <Form onSubmit={handleSubmit}>
                        {Object.keys(formErrors).length === 0 && isSubmit ? (
                          <div className="thanks-design">
                            <div>
                              <h3>Thanks for messaging!</h3>
                              <p>
                                We have received your message, we will get back
                                to you soon.
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <Row>
                              <Col md="6">
                                <Form.Group
                                  className="mb-4 w-100 form-input"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label>Name d</Form.Label>
                                  <Form.Control
                                    type="text"
                                    className=" w-100 text-capitalize"
                                    name="name"
                                    value={formValues.name}
                                    onChange={handleChange}
                                  />
                                  <p className="error">{formErrors.name}</p>
                                </Form.Group>
                              </Col>
                              <Col md="6">
                                <Form.Group
                                  className="mb-4 w-100 form-input"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label>Company</Form.Label>
                                  <Form.Control
                                    type="text"
                                    className=" w-100 text-capitalize"
                                    name="company"
                                    value={formValues.company}
                                    onChange={handleChange}
                                  />
                                  <p className="error">{formErrors.company}</p>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md="6">
                                <Form.Group
                                  className="mb-4 w-100 form-input"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label>Email</Form.Label>
                                  <Form.Control
                                    type="email"
                                    className=" w-100"
                                    name="email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                  />
                                  <p className="error">{formErrors.email}</p>
                                </Form.Group>
                              </Col>
                              <Col md="6">
                                <Form.Group
                                  className="mb-4 w-100 form-input"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label>Mobile</Form.Label>
                                  <Form.Control
                                    type="tel"
                                    className=" w-100"
                                    name="mobile"
                                    value={formValues.mobile}
                                    onChange={handleChange}
                                  />
                                  <p className="error">{formErrors.mobile}</p>
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
                                    value={formValues.message}
                                    onChange={handleChange}
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
                          </div>
                        )}
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
