import { Col } from "react-bootstrap";
import "./footer.scss";
import { FaHome } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useHistory } from "react-router-dom";

export default function Footer() {
  const history = useHistory();

  function registerClick() {
    history.push("/register");
  }

  function loginClick() {
    history.push("/");
  }

  return (
    <footer>
      <Col md={12}>
        <div className="center footer-size">
          <FaHome size={19} color="rgba(0, 0, 0, 0.3)" />
          <div className="paginable-items">
            <IoIosArrowBack
              size={18}
              color="rgba(0, 0, 0, 0.3)"
              onClick={loginClick}
            />
            <span>1 of 2</span>
            <IoIosArrowForward
              size={18}
              color="rgba(0, 0, 0, 0.3)"
              onClick={registerClick}
            />
          </div>
          {/* <Paginable /> */}
        </div>
      </Col>
    </footer>
  );
}
