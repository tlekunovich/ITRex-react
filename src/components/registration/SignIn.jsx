import React, { useState } from "react";
import s from "./SignIn.module.css";
import { NavLink } from "react-router-dom";
import eyeOpen from "./../../img/207-eye.svg";
import eyeClose from "./../../img/210-eye-blocked.svg";
import { Formik } from "formik";
import * as Yup from "yup";

const SignIn = () => {
  const [eyeState, setEyeState] = useState(true);

  const Schema = Yup.object().shape({
    email: Yup.string().email("Invalid email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
  });

  const inputArr = [
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
    },
  ];

  return (
    <div className={s.background}>
      <Formik
        initialValues={{
          password: "",
          email: "",
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
                <h1 className={s.menuTitle}>Sign In</h1>

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
                          type={eyeState ? elem.type : "text"}
                          placeholder={elem.placeholder}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values[elem.id]}
                          autocomplete="off"
                        />
                        {elem.id === "password" ? (
                          <img
                            src={eyeState ? eyeClose : eyeOpen}
                            alt="#"
                            className={s.eye}
                            onClick={() => {
                              setEyeState(!eyeState);
                            }}
                          />
                        ) : null}
                      </div>
                      <div className={s.errorMessage}>{errors[elem.id]}</div>
                    </div>
                  );
                })}
                <NavLink to="/patient" className={s.footerA}>
                  <button className={s.menuButton} type="submit">
                    Sign In
                  </button>
                </NavLink>
              </form>
              <NavLink
                to="/RestorePassword"
                className={s.menuForgotPassword}
              >
                Forgot Password?
              </NavLink>
              <footer className={s.footer}>
                <div className={s.footerText}> Don't have an account?</div>
                <NavLink className={s.footerA} to="/">
                  Sign up
                </NavLink>
              </footer>
            </main>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignIn;
