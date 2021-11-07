import React, { useState } from "react";
import s from "../../usersPages/Patients/PatientProfile.module.css";
import logo from "../../../img/logo.png";
import ActiveUser from "../ActiveUser";
import DoctorCard from "../Patients/DoctorCard";
import mh from "../../../img/medical-history 1.svg";
import greenInd from "../../../img/Ellipse 1.svg";
import JoeMilton from "../../../img/Joe Milton.png";
import Button from "../../UI/Button";
import avatar from "../../../img/Larry Prinston.png";
import status from "../../../img/indicator.svg";
import plus from "../../../img/plus.svg";
import arrowDown from "../../../img/angle-down.svg";
import sliders from "../../../img/sliders-v-alt.svg";

const BgPatients = () => {
  const [hideBtn, setHideBtn] = useState(null);

  function checkMediaQuery() {
    if (window.innerWidth < 1340) {
      setHideBtn(true);
    } else {
      setHideBtn(false);
    }
  }
  window.addEventListener("resize", checkMediaQuery);

  const patientsArr = [
    {
      photo: JoeMilton,
      name: "Joe Milton",
      status: "Therapist",
      indicator: greenInd,
      text: "Headache, pant",
      date: "Thu Sept 10, 2021 4 pm – 5 pm",
    },
  ];

  return (
    <div className={s.background}>
      <div className={s.mainContainer}>
        <header className={s.header}>
          <img src={logo} alt="#!" className={s.logo} />
          <ActiveUser
            userInfoName="Larry Prinston"
            userInfoStatus="Patient"
            avatar={avatar}
            status={status}
          />
        </header>
        <main className={s.mainBlock}>
          <div className={s.btnBlock}>
            <Button name="Profile" />
            <Button name="Appointments" />
            {hideBtn ? null : <Button name="Resolutions" />}
          </div>

          <div className={s.searchBlock}>
            <h1 className={s.title}>My Appointments</h1>
            <div className={s.searchWrapper}>
              <div className={s.sortWrapper}>
                <div className={s.sortTitle}>Show:</div>
                <div className={s.sortItem}>
                  Upcoming
                  <img src={arrowDown} alt="#" />
                </div>
                <button className={s.btn}>
                  <img src={plus} alt="#" className={s.plus} />
                  Create an appointment
                </button>
                <img src={sliders} alt="#" className={s.srchSliders} />
              </div>
            </div>
          </div>

          <div className={s.cardContainer}>
            <DoctorCard patientsArr={patientsArr} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default BgPatients;
