import React, { useState } from "react";
import s from "./SignUp.module.css";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import eyeOpen from "./../../img/207-eye.svg";
import eyeClose from "./../../img/210-eye-blocked.svg";

const SignUp = () => {
  const [eyeStatePassword, setEyeStatePassword] = useState(true);
  const [eyeStatePasswordConfirm, setEyeStatePasswordConfirm] = useState(true);

  const Schema = Yup.object().shape({
    email: Yup.string().email("Invalid email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
    confirmPassword: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
  });

  const inputArr = [
    {
      className: "inputUser",
      id: "firstName",
      type: "text",
      placeholder: "First Name",
    },
    {
      className: "inputUser",
      id: "lastName",
      type: "text",
      placeholder: "Last Name",
    },
    {
      className: "inputEmail",
      id: "email",
      type: "text",
      placeholder: "Email",
    },
    {
      className: "inputLock",
      id: "password",
      type: "password",
      placeholder: "Password",
      eyeStatePassword: eyeStatePassword,
      setStateEye: setEyeStatePassword,
    },
    {
      className: "inputCheck",
      id: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      eyeStatePassword: eyeStatePasswordConfirm,
      setStateEye: setEyeStatePasswordConfirm,
    },
  ];

  return (
    <div className={s.background}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          password: "",
          email: "",
          confirmPassword: "",
        }}
        validationSchema={Schema}
        onSubmit={(values) => {
          console.log("values", values);
        }}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
          return (
            <main className={s.mainContainer}>
              <form className={s.menuForm} onSubmit={handleSubmit}>
                <h1 className={s.menuTitle}>Sign Up</h1>

                {inputArr.map((elem) => {
                  return (
                    <div className={s.inputWrapper} key={elem.id}>
                      <div
                        className={
                          errors[elem.id] ? s.inputFormError : s.inputForm
                        }
                        tabIndex="1"
                      >
                        <label htmlFor={elem.id}></label>
                        <input
                          className={s[elem.className]}
                          id={elem.id}
                          type={elem.eyeStatePassword ? elem.type : "text"}
                          placeholder={elem.placeholder}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values[elem.id]}
                          autocomplete="off"
                        />
                        {elem.id === "password" ||
                        elem.id === "confirmPassword" ? (
                          <img
                            src={elem.eyeStatePassword ? eyeClose : eyeOpen}
                            alt="#"
                            className={s.eye}
                            onClick={() => {
                              elem.setStateEye(!eyeStatePassword);
                            }}
                          />
                        ) : null}
                      </div>
                      <div className={s.errorMessage}>{errors[elem.id]}</div>
                    </div>
                  );
                })}
                <NavLink to="/doctor">
                  <button className={s.menuButton} type="submit">
                    Sign Up
                  </button>
                </NavLink>
              </form>
              <div className={s.footer}>
                <footer className={s.footerText}>
                  {" "}
                  Already have an account?
                </footer>
                <NavLink className={s.footerA} to="/SignIn" type="submit">
                  Sign in
                </NavLink>
              </div>
            </main>
          );
        }}
      </Formik>
    </div>
  );
};
export default SignUp;
