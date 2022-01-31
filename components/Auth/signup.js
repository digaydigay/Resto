import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useAuthContext } from "../../context/AuthProvider";
import { ActionForm } from "./actionform";

export default function Signup() {
  const { isModal, hidemodal, showsigninmodal } = useAuthContext();
  const [password, setPassword] = useState(false);
  const { googleprovider, onSignUp, isSignUpERR } = ActionForm();

  const See = () => {
    setPassword(!password);
  };

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validate = Yup.object({
    firstname: Yup.string()
      .required("your name is required")
      .min(3, "name must be 3-20 character")
      .max(20, "name must be 3-20 character"),
    lastname: Yup.string()
      .required("your name is required")
      .min(3, "name must be 3-20 character")
      .max(20, "name must be 3-20 character"),
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
          onSubmit={(values) =>
            onSignUp({
              email: values.email,
              password: values.password,
              firstname: values.firstname,
              lastname: values.lastname,
            })
          }
        >
          {({ errors, touched, values }) => (
            <Form>
              <h2>Sign Up</h2>
              <p className="err">{isSignUpERR && isSignUpERR.message}</p>
              <div className="input-group">
                <label>first Name</label>
                <Field
                  type="text"
                  placeholder="Your Firstname.."
                  name="firstname"
                />
              </div>
              <div className="form-error">
                {errors.firstname && touched.firstname && errors.firstname}
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <Field
                  type="text"
                  placeholder="Your Lastname..."
                  name="lastname"
                />
              </div>
              <div className="form-error">
                {errors.lastname && touched.lastname && errors.lastname}
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
                <button
                  type="button"
                  onClick={() => {
                    hidemodal();
                    (values.email = ""),
                      (values.firstname = ""),
                      (values.lastname = ""),
                      (values.password = ""),
                      (values.confirmPassword = "");
                  }}
                >
                  cancel
                </button>
              </div>
              <div className="reminder">
                <p>already have an account?</p>
                <p onClick={() => showsigninmodal()}>Sign in</p>
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
