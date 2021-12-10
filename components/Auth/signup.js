import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useAuthContext } from "../../context/AuthProvider";
import { ActionForm } from "./actionform";

export default function Signup() {
  const { isModal, hidemodal } = useAuthContext();
  const [password, setPassword] = useState(false);
  const { googleprovider, onSignUp } = ActionForm();

  const See = () => {
    setPassword(!password);
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validate = Yup.object({
    name: Yup.string()
      .required("your name is required")
      .min(3, "name must be 3-25 character")
      .max(25, "name must be 3-25 character"),
    email: Yup.string()
      .email("invalid email address")
      .required("email is required in resto"),
    password: Yup.string()
      .required("atleast 6-12 character w/ one number")
      .min(6, "atleast 6-12 character w/ one number")
      .max(12, "atleast 6-12 character w/ one number")
      .matches(
        "^(?=.*[a-zA-Z])(?=.*[0-9])",
        "Must atleast one number and letters"
      ),

    confirmPassword: Yup.string()
      .required("need to confirm password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  return (
    <div className={`signup ${isModal === "createaccount" && "signup-show"}`}>
      <div className="form-wrapper">
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={(values) => onSignUp(values.email, values.password)}
        >
          {({ errors, touched, values }) => (
            <Form>
              <h2>Sign Up</h2>
              <div className="input-group">
                <label>Name</label>
                <Field type="text" placeholder="your name..." name="name" />
              </div>
              <div className="form-error">
                {errors.name && touched.name && errors.name}
              </div>
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
              <div className="input-group">
                <label>Confirm Password</label>
                <Field
                  type="password"
                  placeholder="Confirm Password..."
                  name="confirmPassword"
                />
              </div>
              <div className="form-error">
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword}
              </div>
              <div className="actions">
                <button type="submit">Sign up</button>
                <button type="button" onClick={() => hidemodal()}>
                  cancel
                </button>
              </div>
              <div className="reminder">
                <p>already have an account?</p>
                <p>Sign in</p>
              </div>
              <div className="social_auth">
                <i
                  className="fab fa-google"
                  onClick={() => {
                    googleprovider();
                    hidemodal();
                  }}
                ></i>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
