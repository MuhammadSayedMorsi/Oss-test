import * as React from "react";
import "./Login.scss";
import { Row, Col, Image, Figure, Container } from "react-bootstrap";
import AuthPhoto from "../../assets/icons/authPhoto.svg";
import logo from "../../assets/icons/logo.svg";
// import LoginForm from "./Form";
import LoginForm from "./LoginForm";
const Login: React.FC = () => {
  return (
    <Container>
      <div className="login_page">
        <Row>
          <Col>
            <div className="app_login_title">
              <Figure>
                <Image src={logo} />
              </Figure>
              <h1>Grow your business by selling online</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>

            <Figure>
              <Image src={AuthPhoto} />
            </Figure>
          </Col>

          <Col className="form_wrapper">
            <LoginForm />
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default Login;
