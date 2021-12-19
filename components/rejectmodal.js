import React from "react";
import { useAuthContext } from "../context/AuthProvider";
import { useOrderContext } from "../context/orderContext";
import { db } from "../firebase";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const Rejectmodal = () => {
  const { isModal, showrejectmodal, hidemodal } = useAuthContext();
  const { reject } = useOrderContext();
  console.log(isModal);

  const onreject = async (values) => {
    const message = values.reject;

    values.reject = "";
    const dateinit = new Date();
    const date = dateinit.toLocaleDateString();
    const time = dateinit.toLocaleTimeString();
    try {
      await db
        .collection("orders")
        .doc(reject.id)
        .update({
          message: message && message,
          status: "rejected",
          time: `${date}, ${time}`,
        });
    } catch {
      return null;
    }
    hidemodal();
  };

  const validate = Yup.object({
    reject: Yup.string().required("reject message in required"),
  });

  return (
    <div
      className={`rejectmodal  ${
        isModal === "rejectmodal" && "showrejectmodal"
      }`}
    >
      <Formik
        initialValues={{ reject: "" }}
        validationSchema={validate}
        onSubmit={(values) => onreject(values)}
      >
        {({ errors, touched, values }) => (
          <Form>
            <div className="input-group">
              <Field
                as="textarea"
                placeholder="Reject message..."
                name="reject"
              ></Field>
              <div>{errors.reject && touched.reject && errors.reject}</div>

              <div className="action">
                <button type="submit">Reject</button>
                <button
                  type="button"
                  onClick={() => {
                    hidemodal();
                    values.reject = "";
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Rejectmodal;
