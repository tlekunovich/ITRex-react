import React, { useState } from "react";
import s from "./RestorePassword.module.css";
import { NavLink } from "react-router-dom";
import angleLeft from "./../../img/angle-left-b.svg";
import { Formik } from "formik";
import * as Yup from "yup";

const RestorePassword = () => {
  const [blockLink, setBlockLink] = useState(true);

  const Schema = Yup.object().shape({
    email: Yup.string().email("Invalid email"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={Schema}
      onSubmit={(values) => {
        console.log("values", values);
        setBlockLink(!blockLink);
      }}
    >
      {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
        return (
          <div className={s.background}>
            <main className={s.mainContainer}>
              <form className={s.menuForm} onSubmit={handleSubmit}>
                <div className={s.menuReturnPageGroup}>
                  <NavLink to="/SignIn" className={s.footerA}>
                    <img src={angleLeft} alt="#" className={s.menuReturnPage} />
                  </NavLink>
                  <h1 className={s.menuTitle}>Restore Password</h1>
                </div>

                <div className={s.menuMessage}>
                  Please use your email address, and we’ll send you the link to
                  reset your password
                </div>
                <div className={s.inputWrapper}>
                  <div
                    className={errors.email ? s.inputFormError : s.inputForm}
                    tabIndex="1"
                  >
                    <label htmlFor="inputEmail"></label>
                    <input
                      className={s.inputEmail}
                      id="email"
                      type="text"
                      placeholder="Email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      autocomplete="off"
                    />
                  </div>
                  <div className={s.errorMessage}>{errors.email}</div>
                </div>
                <NavLink to="/RestorePassword2">
                  <button className={s.menuButton} type="submit">
                    Send Reset Link
                  </button>
                </NavLink>
              </form>
            </main>
          </div>
        );
      }}
    </Formik>
  );
};

export default RestorePassword;
