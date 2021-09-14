import * as React from "react";
import { Form } from "react-bootstrap";
import { useField, ErrorMessage } from "formik";

interface Props {
  label: string;
  type: string;
  placholder: string;
  name: string;
}

export const TextFeild: React.FC<Props> = ({
  label,
  type,
  placholder,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div style={{ position: "relative" }}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          className={`${meta.touched && meta.error && "is-invalid"}`}
          type={type}
          placeholder={placholder}
          autoComplete="off"
          {...field}
          {...props}
        />
      </Form.Group>
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
};
