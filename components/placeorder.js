import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import { useOrderContext } from "../context/orderContext";
import { useAuthContext } from "../context/AuthProvider";
import { useRouter } from "next/router";
import { useLoader } from "../context/loader";
import * as Yup from "yup";
import Image from "next/image";
import { db } from "../firebase";
const Placeorder = () => {
  const { isOrder } = useOrderContext();
  const { hidemodal, isModal, currentUser } = useAuthContext();
  const [isDisable, setIsDisable] = useState(true);
  const Router = useRouter();
  const initial = {
    city: "",
    state: "",
    barangay: "",
    phone: "",
    quantity: 1,
  };

  const validate = Yup.object({
    city: Yup.string().required("This field is required"),
    state: Yup.string().required("This field is required"),
    barangay: Yup.string().required("This field is required"),
    phone: Yup.string().required("This field is required"),
  });

  const Order = async (values) => {
    setIsDisable(false);
    const total = isOrder && isOrder.foodPrice * values.quantity;
    const address = `${values.barangay},${values.state},${values.city}`;
    const food = isOrder && isOrder.foodName;
    const backdrop = isOrder && isOrder.foodPhoto;
    const contact = values.phone;
    const dateinit = new Date();
    const date = dateinit.toLocaleDateString();
    const time = dateinit.toLocaleTimeString();

    try {
      await db.collection("orders").add({
        person: currentUser.displayName,
        email: currentUser.email,
        status: "pending",
        foodName: food,
        foodPhoto: backdrop,
        contact: contact,
        price: isOrder && isOrder.foodPrice,
        total: total,
        quantity: values.quantity,
        address: address,
        uid: currentUser.uid,
        time: `${date}, ${time}`,
      });
      setIsDisable(true);

      values.city = "";
      values.state = "";
      values.barangay = "";
      values.phone = "";
      values.quantity = 1;
      hidemodal();
      Router.replace(`/cart/pending/${currentUser && currentUser.uid}`);
    } catch {
      return null;
    }
  };

  return (
    <div
      className={`placeorder ${isModal === "placeorder" && "showplaceorder"}`}
    >
      <div className="placeorder-wrapper">
        <div className="order">
          <div className="orderimg">
            {isOrder && (
              <Image
                src={isOrder.foodPhoto}
                width="200"
                height="200"
                alt="img"
              />
            )}
          </div>
          <div className="order-description">
            <h4>{isOrder && isOrder.foodName}</h4>
            <p>P{isOrder && isOrder.foodPrice}</p>
          </div>
        </div>

        <Formik
          initialValues={initial}
          validationSchema={validate}
          onSubmit={(values) => Order(values)}
        >
          {({ errors, touched, values }) => (
            <Form>
              <div className="exit">
                <i
                  className="fas fa-times"
                  onClick={() => {
                    hidemodal();
                    values.city = "";
                    values.state = "";
                    values.barangay = "";
                    values.phone = "";
                    values.quantity = 1;
                  }}
                ></i>
              </div>
              <div className="input-group">
                <Field
                  type="number"
                  value={values.rank}
                  defaultValue="1"
                  name="quantity"
                  min="1"
                  max="20"
                />
                <label>Quantity</label>
              </div>
              <div className="error-message">
                <p>{errors.quantity && touched.quantity && errors.quantity}</p>
              </div>
              <div className="total">
                <h5>Total:</h5>
                <h5>P{isOrder && isOrder.foodPrice * values.quantity}</h5>
              </div>
              <div className="input-group">
                <label htmlFor="city">City / Province</label>
                <Field
                  id="city"
                  type="text"
                  placeholder="City / Province"
                  name="city"
                />
              </div>
              <div className="error-message">
                <p>{errors.city && touched.city && errors.city}</p>
              </div>
              <div className="input-group">
                <label htmlFor="municipality"> Municipality</label>
                <Field
                  type="text"
                  placeholder="Municipality"
                  name="state"
                  id="municipality"
                />
              </div>
              <div className="error-message">
                <p>{errors.state && touched.state && errors.state}</p>
              </div>
              <div className="input-group">
                <label htmlFor="barangay">Barangay</label>
                <Field
                  type="text"
                  placeholder="Barangay"
                  name="barangay"
                  id="barangay"
                />
              </div>
              <div className="error-message">
                <p>{errors.barangay && touched.barangay && errors.barangay}</p>
              </div>
              <div className="input-group">
                <label htmlFor="contact">Contact no.</label>
                <Field
                  type="phone"
                  placeholder="Contact no."
                  name="phone"
                  id="contact"
                />
              </div>
              <div className="error-message">
                <p>{errors.phone && touched.phone && errors.phone}</p>
              </div>
              {isDisable ? (
                <button type="submit" className="submit">
                  Order Now
                </button>
              ) : (
                <button type="button">processing...</button>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Placeorder;
