import React, { useEffect } from "react";
import styles from "./employeeForm.module.css";
import { useFormik } from "formik";
import * as yup from "yup";

import { useHistory } from "react-router-dom";
import { employee } from "../employeeList/EmployeeList";

const EmployeeForm = ({ employee }: { employee?: employee }) => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: employee?.name || "",
      email: employee?.email || "",
      phone: employee?.phoneNumber || "",
      addressone: employee?.homeAddress.addressLine1 || "",
      addresstwo: employee?.homeAddress.addressLine2 || "",
      zip: employee?.homeAddress.ZIPCode || "",
      city: employee?.homeAddress.city || "",
      birth: employee?.dateOfBirth || "",
      employement: employee?.dateOfEmployment || "",
    },

    validationSchema: yup.object({
      name: yup.string().required("please this feild is required"),
      email: yup.string().required("please this feild is required"),
      phone: yup.string().required("please this feild is required"),
      addressone: yup.string().required("please this feild is required"),
      addresstwo: yup.string().required("please this feild is required"),
      zip: yup.string().required("please this feild is required"),
      // .matches(/^\d{5}(?:[-\s]\d{4})?$/, "please add a valid zip code"),
      city: yup.string().required("please this feild is required"),
      birth: yup.string().required("please this feild is required"),
      employement: yup.string().required("please this feild is required"),
    }),
    onSubmit: (values) => {
      if (employee) {
        fetch(`http://142.132.229.249:3000/employees/${employee._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            phoneNumber: values.phone,
            homeAddress: {
              city: values.city,
              ZIPCode: values.zip,
              addressLine1: values.addressone,
              addressLine2: values.addresstwo,
            },
            dateOfEmployment: values.employement,
            dateOfBirth: values.birth,
          }),
        }).then((res) => {
          history.push("/");
        });
      } else {
        formik.resetForm();
        fetch("http://142.132.229.249:3000/employees", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            phoneNumber: values.phone,
            homeAddress: {
              city: values.city,
              ZIPCode: values.zip,
              addressLine1: values.addressone,
              addressLine2: values.addresstwo,
            },
            dateOfEmployment: values.employement,
            dateOfBirth: values.birth,
          }),
        }).then((res) => {
          history.push("/");
        });
      }
    },
  });

  return (
    <div className={styles["form-cont"]}>
      <h1>Add Employee</h1>
      <form onSubmit={formik.handleSubmit} className={styles["form-card"]}>
        <div className={styles["input-display"]}>
          <div>
            <label>Name</label>
            <input
              data-testid="name"
              type="text"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <p style={{ color: "red" }}>{formik.errors.name}</p>
            ) : null}
          </div>
          <div>
            <label>E-mail</label>
            <input
              data-testid="email"
              type="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <p style={{ color: "red" }}>{formik.errors.email}</p>
            ) : null}
          </div>
        </div>
        <div className={styles["input-display"]}>
          <div>
            <label>Phone Number</label>
            <input
              data-testid="phone"
              type="tel"
              id="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <p style={{ color: "red" }}>{formik.errors.phone}</p>
            ) : null}
          </div>
          <div>
            <label>Address Line 1</label>
            <input
              data-testid="address1"
              type="text"
              id="addressone"
              value={formik.values.addressone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.addressone && formik.errors.addressone ? (
              <p style={{ color: "red" }}>{formik.errors.addressone}</p>
            ) : null}
          </div>
        </div>
        <div className={styles["input-display"]}>
          <div>
            <label>Address Line 2</label>
            <input
              data-testid="address2"
              type="text"
              id="addresstwo"
              value={formik.values.addresstwo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.addresstwo && formik.errors.addresstwo ? (
              <p style={{ color: "red" }}>{formik.errors.addresstwo}</p>
            ) : null}
          </div>
          <div>
            <label>Zip Code</label>
            <input
              data-testid="zip"
              type="text"
              id="zip"
              value={formik.values.zip}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.zip && formik.errors.zip ? (
              <p style={{ color: "red" }}>{formik.errors.zip}</p>
            ) : null}
          </div>
        </div>
        <div className={styles["input-display"]}>
          <div>
            <label>City</label>
            <input
              data-testid="city"
              type="text"
              id="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.city && formik.errors.city ? (
              <p style={{ color: "red" }}>{formik.errors.city}</p>
            ) : null}
          </div>
          <div>
            <label>Date of Birth</label>
            <input
              data-testid="birth"
              type="date"
              id="birth"
              value={formik.values.birth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.birth && formik.errors.birth ? (
              <p style={{ color: "red" }}>{formik.errors.birth}</p>
            ) : null}
          </div>
        </div>
        <div className={styles["employement-date"]}>
          <label>Date of Employement</label>
          <input
            data-testid="employement"
            type="date"
            id="employement"
            value={formik.values.employement}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.employement && formik.errors.employement ? (
            <p style={{ color: "red" }}>{formik.errors.employement}</p>
          ) : null}
        </div>

        <div className={styles["btn-cont"]}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
