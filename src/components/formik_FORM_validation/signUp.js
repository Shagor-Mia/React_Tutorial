import React from "react";
import "./formik.css";
import { useFormik } from "formik";
import * as yup from "yup";

export default function Signup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, "name must have at least 2 character")
        .required("Name is required"),
      email: yup.string().email().required("Email is required"),
      password: yup
        .string()
        .min(6, "password must have at least 6 character")
        .required(),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm((values = ""));
    },
  });
  const renderEmailError = formik.errors.email && (
    <span style={{ color: "red" }}>{formik.errors.email}</span>
  );
  const renderNameError = formik.errors.name && (
    <span style={{ color: "red" }}>{formik.errors.name}</span>
  );
  const renderPasswordError = formik.errors.password && (
    <span style={{ color: "red" }}>{formik.errors.password}</span>
  );
  return (
    <div>
      <h1 className="head">User SignUp</h1>
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="div1">
          <label htmlFor="name" className="label">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            required
          />
          <br />
          {renderNameError}
        </div>
        <div className="div2">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            required
          />
          <br />
          {renderEmailError}
        </div>
        <div className="div3">
          <label htmlFor="password" className="label2">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            required
          />
          <br />
          {renderPasswordError}
        </div>
        <button className="btn" type="submit">
          signUp
        </button>
      </form>
    </div>
  );
}
