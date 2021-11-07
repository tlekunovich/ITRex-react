import React from "react";
import s from "./RestorePasswordMessage.module.css";
import { NavLink } from "react-router-dom";
import angleLeft from "./../../img/angle-left-b.svg";

const RestorePassword = () => {
  return (
    <div className={s.background}>
      <main className={s.mainContainer}>
        <form className={s.menuForm}>
          <div className={s.menuReturnPageGroup}>
            <NavLink to="/SignIn" className={s.footerA}>
              <img src={angleLeft} alt="#" className={s.menuReturnPage} />
            </NavLink>
            <h1 className={s.menuTitle}>Restore Password</h1>
          </div>
          <div className={s.menuMessage}>
            An email has been sent to <a href="#!">example@exam.com</a>. Check
            your inbox, and click the reset link provided.
          </div>
        </form>
      </main>
    </div>
  );
};

export default RestorePassword;
