import { Col } from "react-bootstrap";
import "./footer.scss";
/* import { FaHome } from "react-icons/fa"; */
/* import Paginable from "../paginable/paginable"; */

export default function Footer() {
  return (
    <footer>
      <Col md={12}>
        <div className="center footer-size">
          {/*  <FaHome size={19} color="rgba(0, 0, 0, 0.3)" /> */}
          {/* <Paginable /> */}
        </div>
      </Col>
    </footer>
  );
}
