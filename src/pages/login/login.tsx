import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CarouselComponent from "../../components/carousel/carousel";
import Footer from "../../components/footer/footer";

import "./login.scss";

export default function Login() {
  return (
    <Container fluid>
      <Row>
        <div className="header no-padding"></div>
      </Row>
      <Row>
        <Col lg={5} className="no-padding">
          <CarouselComponent />
        </Col>
        <Col lg={7} className="no-padding mt-4 mb-5">
          <Form className="form-login center">
            <Row>
              <Col md={12} className="text-center mb-4">
                <h2>Welcome to my Web Site</h2>
              </Col>
              <Col md={12}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="line"></div>
                <Col md={12} className="text-right">
                  <span className="forgot-span"> Forgot password</span>
                </Col>
                <Col md={12} className="text-center mt-4">
                  <Button variant="secondary" size="lg" className="btn-sign">
                    Sign in
                  </Button>
                </Col>
              </Col>
              <Col md={12} className="text-right mt-3">
                <hr />
              </Col>
              <Col md={12} className="text-center mt-4">
                <Button size="lg" className="btn-sign-google">
                  Sign in with google
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Footer page={1} />
      </Row>
    </Container>
  );
}
