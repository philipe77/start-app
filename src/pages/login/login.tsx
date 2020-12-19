import { Col, Container, Row } from "react-bootstrap";

export default function Login() {
  return (
    <Container fluid>
      <Row>
        <div className="header no-padding"></div>
      </Row>
      <Row>
        <Col lg={5} className="no-padding">
          carousel
        </Col>
        <Col lg={5} className="no-padding">
          form login
        </Col>
      </Row>
      <Row>
        {/*  <Footer /> */}
        <p>Footer</p>
      </Row>
    </Container>
  );
}
