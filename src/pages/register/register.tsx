import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CarouselComponent from "../../components/carousel/carousel";
import Footer from "../../components/footer/footer";

export default function Register() {
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
                <h2>Getting Started</h2>
              </Col>
              <Col md={12}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="email" placeholder="Full Name" />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Users name or Email</Form.Label>
                  <Form.Control type="password" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Create Password</Form.Label>
                  <Form.Control type="password" placeholder="Email" />
                </Form.Group>
                <div className="line"></div>

                <Col md={12} className="text-center mt-4">
                  <Button variant="secondary" size="lg" className="btn-sign  ">
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
        <Footer page={2} />
      </Row>
    </Container>
  );
}
