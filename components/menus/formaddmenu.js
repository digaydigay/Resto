import React, { useState, useEffect } from "react";
import Image from "next/image";
import { storage, db } from "../../firebase";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useAuthContext } from "../../context/AuthProvider";
const Formaddmenu = () => {
  const [file, setFile] = useState();
  const [menus, setMenus] = useState([]);
  const { isModal, hidemodal } = useAuthContext();

  useEffect(() => {
    const fetch = async () => {
      await db.collection("menus").onSnapshot((snap) => {
        setMenus(snap.docs.map((doc) => doc.data()));
      });
    };
    fetch();
  }, []);

  const initialValues = {
    foodName: "",
    foodPrice: "",
    foodDetails: "",
  };

  const addMenu = async (values) => {
    try {
      console.log(file);
      const storageRef = await storage.ref("menus");

      const uploadTask = await storageRef.child(`${file.name}`);
      await uploadTask.put(file);

      await db.collection("menus").add({
        foodName: values.foodName,
        foodPrice: values.foodPrice,
        foodPhoto: await uploadTask.getDownloadURL((photo) => {
          return photo;
        }),
        foodDetails: values.foodDetails,
        foodCount: menus.length + 1,
        createdAt: Date.now(),
      });
      values.foodName = "";
      values.foodPrice = "";
      values.foodDetails = "";
      hidemodal();
      setFile();
    } catch (e) {
      console.log(e);
    }
  };

  const validate = Yup.object({
    foodName: Yup.string().required("This field is required"),
    foodPrice: Yup.string().required("This field is required"),
    foodDetails: Yup.string().required("This field is required"),
  });
  const handleOnChange = (e) => {
    const pickfile = e.target.files[0];
    setFile(pickfile);
  };

  return (
    <div className={`addmenu ${isModal === "addmenu" && "showaddmenu"}`}>
      <div className="form-wrapper">
        <div className="exit">
          <i
            className="fas fa-times"
            onClick={() => {
              hidemodal();
            }}
          ></i>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={(values) => addMenu(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <h3>Add Menu</h3>
              <div className="input-group">
                <Field type="text" placeholder="Food name..." name="foodName" />
              </div>
              <div className="error-message">
                <p>{errors.foodName && touched.foodName && errors.foodName}</p>
              </div>
              <div className="input-group">
                <Field
                  type="text"
                  placeholder="Food price..."
                  name="foodPrice"
                />
              </div>
              <div className="error-message">
                <p>
                  {errors.foodPrice && touched.foodPrice && errors.foodPrice}
                </p>
              </div>
              <div className="input-group">
                <label htmlFor="image">Choose File...</label>
                <input
                  type="file"
                  hidden
                  id="image"
                  accept="image/png, image/jpeg"
                  onChange={handleOnChange}
                />
              </div>
              <div className="image-preveiw">
                {file && (
                  <Image
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    width="400"
                    height="400"
                    objectFit="cover"
                  />
                )}
              </div>

              <div className="input-group">
                <Field
                  as="textarea"
                  placeholder="Food details..."
                  name="foodDetails"
                ></Field>
              </div>
              <div className="error-message">
                <p>
                  {errors.foodDetails &&
                    touched.foodDetails &&
                    errors.foodDetails}
                </p>
              </div>
              <div className="submit">
                <button type="submit">Add Item</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Formaddmenu;
