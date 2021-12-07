import React, { useState } from "react";
import Image from "next/image";
import { storage, db } from "../../firebase";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Formaddmenu = () => {
  const [file, setFile] = useState();

  const addMenu = async (values) => {
    try {
      const storageRef = storage.ref(`resto`);

      const uploadTask = storageRef.child("menus/" + file.name).put(file);

      uploadTask.on("state_changed", (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      });
      db.collection("menus").add({
        foodName: values.foodName,
        foodPrice: values.foodPrice,
        foodPhoto: uploadTask.snapshot.ref
          .getDownloadURL()
          .then((downloadURL) => {
            return downloadURL;
          }),
        foodDetails: values.foodDetails,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const initialValues = {
    foodName: "",
    foodPrice: "",
    foodDetails: "",
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
    <div className="addmenu">
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={({ values }) => addMenu(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <h3>Add Menu</h3>
            <div className="input-group">
              <Field type="text" placeholder="Food name..." name="foodName" />
            </div>
            <div className="error-message">
              <p>{errors.foodName || (touched.foodName && errors.foodName)}</p>
            </div>
            <div className="input-group">
              <Field type="text" placeholder="Food price..." name="foodPrice" />
            </div>
            <div className="error-message">
              <p>
                {errors.foodPrice || (touched.foodPrice && errors.foodPrice)}
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
                cols="30"
                rows="10"
                name="foodDetails"
              ></Field>
            </div>
            <div className="error-message">
              <p>
                {errors.foodDetails ||
                  (touched.foodDetails && errors.foodDetails)}
              </p>
            </div>
            <div className="submit">
              <button type="submit">Add Item</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formaddmenu;
