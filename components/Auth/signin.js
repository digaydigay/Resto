import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useAuthContext } from "../../context/AuthProvider";
import { ActionForm } from "./actionform";
export default function Signin() {
  const { onSignin } = ActionForm();
  const { isModal, hidemodal } = useAuthContext();
  const [password, setPassword] = useState(false);

  const See = () => {
    setPassword(!password);
  };

  const initialValues = {
    email: "",
    password: "",
  };
  const validate = Yup.object({
    email: Yup.string()
      .email("invalid email address")
      .required("email is required in resto"),
    password: Yup.string().required("atleast 6-12 character w/ one number"),
  });

  return (
    <div className={`signin ${isModal === "signin" && "signin-show"}`}>
      <div className="form-wrapper">
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={(values) => {
            onSignin(values.email, values.password);
          }}
        >
          {({ errors, touched, values }) => (
            <Form>
              <h2>Sign In</h2>
              <div className="input-group">
                <label>Email</label>
                <Field
                  type="email"
                  placeholder="Email Address..."
                  name="email"
                />
              </div>
              <div className="form-error">
                {errors.email && touched.email && errors.email}
              </div>
              <div className="input-group">
                <label>Password</label>
                <Field
                  type={!password ? "password" : "text"}
                  placeholder="Password..."
                  name="password"
                />
                <i
                  onClick={See}
                  className={!password ? "fas fa-eye-slash" : "fas fa-eye"}
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "50%",
                    transform: "translate(0,-50%)",
                    cursor: "pointer",
                    color: "gray",
                    fontSize: "20px",
                  }}
                ></i>
              </div>
              <div className="form-error">
                {errors.password && touched.password && errors.password}
              </div>
              <div className="actions">
                <button type="submit">Sign In</button>
                <button
                  type="button"
                  onClick={() => {
                    hidemodal();
                    values.email = "";
                    values.password = "";
                  }}
                >
                  cancel
                </button>
              </div>
              <div className="reminder">
                <p>Need an acount?</p>
                <p>Sign up</p>
              </div>
              <div className="social_auth">
                <i className="fab fa-google"></i>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
