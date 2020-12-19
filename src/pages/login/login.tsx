import { Col, Container, Row } from "react-bootstrap";
import CarouselComponent from "../../components/carousel/carousel";
import Footer from "../../components/footer/footer";

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
        <Col lg={5} className="no-padding">
          form login
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
