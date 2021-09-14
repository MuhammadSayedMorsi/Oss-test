import * as React from "react";
import { Formik, Form } from "formik";
import { TextFeild } from "./TextFeild";
import { Button, Nav, Image } from "react-bootstrap";
import * as Yup from "yup";
import facebook from "../../assets/icons/facebook.svg";
import google from "../../assets/icons/google.svg";

const LoginForm: React.FC = () => {
  const validate = Yup.object({
    name: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm Password Required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validate}
      validateOnMount
    >
      {(formik) => (
        <div className="auth_form">
          <h1 className="title">Create new account</h1>
          {console.log(formik)}
          <Form>
            <TextFeild
              label="Email"
              name="email"
              type="email"
              placholder="Enter your email"
            />
            <TextFeild
              label="Password"
              name="password"
              type="password"
              placholder="Enter your password"
            />

            <Button
              role="button"
              type="submit"
              className={`auth_button ${!formik.isValid ? "dis_bg" : ""}`}
              disabled={!formik.isValid}
            >
              Sign up
            </Button>

            <Nav.Item>
              <Nav.Link href="/sign-up" className="route_to_login">
                Don’t have account yet? Sign up
              </Nav.Link>
            </Nav.Item>
            <div className="or">
              <span>
                <svg
                  width="20"
                  height="13"
                  viewBox="0 0 20 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.54225 12.16C5.40092 12.16 4.37158 11.9147 3.45425 11.424C2.53692 10.9227 1.81692 10.2347 1.29425 9.36C0.771583 8.47467 0.51025 7.488 0.51025 6.4C0.51025 5.312 0.771583 4.33067 1.29425 3.456C1.81692 2.57067 2.53692 1.88267 3.45425 1.392C4.37158 0.890666 5.40092 0.639999 6.54225 0.639999C7.68358 0.639999 8.71292 0.890666 9.63025 1.392C10.5476 1.88267 11.2676 2.56533 11.7902 3.44C12.3129 4.31467 12.5743 5.30133 12.5743 6.4C12.5743 7.49867 12.3129 8.48533 11.7902 9.36C11.2676 10.2347 10.5476 10.9227 9.63025 11.424C8.71292 11.9147 7.68358 12.16 6.54225 12.16ZM6.54225 10.336C7.28892 10.336 7.96092 10.1707 8.55825 9.84C9.15558 9.49867 9.62492 9.02933 9.96625 8.432C10.3076 7.824 10.4783 7.14667 10.4783 6.4C10.4783 5.65333 10.3076 4.98133 9.96625 4.384C9.62492 3.776 9.15558 3.30667 8.55825 2.976C7.96092 2.63467 7.28892 2.464 6.54225 2.464C5.79558 2.464 5.12358 2.63467 4.52625 2.976C3.92892 3.30667 3.45958 3.776 3.11825 4.384C2.77692 4.98133 2.60625 5.65333 2.60625 6.4C2.60625 7.14667 2.77692 7.824 3.11825 8.432C3.45958 9.02933 3.92892 9.49867 4.52625 9.84C5.12358 10.1707 5.79558 10.336 6.54225 10.336ZM16.691 4.704C17.267 3.808 18.2803 3.36 19.731 3.36V5.264C19.5603 5.232 19.4057 5.216 19.267 5.216C18.4883 5.216 17.8803 5.44533 17.443 5.904C17.0057 6.352 16.787 7.00267 16.787 7.856V12H14.787V3.456H16.691V4.704Z"
                    fill="#9AA1AF"
                  />
                </svg>
              </span>
            </div>
            <div className="log_social">
              <Button role="button" className="facebook">
                <span role="img">
                  <Image src={facebook} />
                </span>
                Sign up with Facebook
              </Button>
              <Button role="button" className="google">
                <span role="img">
                  <Image src={google} />
                </span>
                Sign up with Gmail
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default LoginForm;
