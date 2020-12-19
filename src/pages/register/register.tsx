import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import CarouselComponent from "../../components/carousel/carousel";
import Footer from "../../components/footer/footer";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export default function Register() {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
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
          <Form className="form-login center" onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md={12} className="text-center mb-4">
                <h2>Getting Started</h2>
              </Col>
              <Col md={12}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    placeholder="Full Name"
                    name="name"
                    ref={register({ required: true, minLength: 2 })}
                  />
                  <Form.Text className="text-muted text-danger">
                    {errors.name && <span>This field is required</span>}
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Users name or Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    ref={register({ required: true })}
                  />
                  <Form.Text className="text-muted text-danger">
                    {errors.email && <span>This field is required</span>}
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Create Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Email"
                    name="password"
                    ref={register({ required: true })}
                  />
                  <Form.Text className="text-muted text-danger">
                    {errors.password && <span>This field is required</span>}
                  </Form.Text>
                </Form.Group>
                <div className="line"></div>

                <Col md={12} className="text-center mt-4">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="btn-sign"
                    type="submit"
                  >
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
