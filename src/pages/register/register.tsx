import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/footer/footer";

export default function Register() {
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
          form Register
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
