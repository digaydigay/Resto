import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancel } from "../../redux/reducer/showAuthForm";
import { createaccount } from "../../redux/reducer/showAuthForm";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
export default function Signin() {
  const init = useSelector((state) => state.showAuthForm.init);
  const dispatch = useDispatch();
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
    <div className={`signin ${init === "signin" && "signin-show"}`}>
      <div className="form-wrapper">
        <Formik initialValues={initialValues} validationSchema={validate}>
          {({ errors, touched }) => (
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
                    dispatch(cancel());
                  }}
                >
                  cancel
                </button>
              </div>
              <div className="reminder">
                <p>Need an acount?</p>
                <p onClick={() => dispatch(createaccount())}>Sign up</p>
              </div>
              <div className="social_auth">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-google"></i>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
