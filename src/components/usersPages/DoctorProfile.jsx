import React from "react";
import s from "./../usersPages/DoctorProfile.module.css";
import logo from "./../../img/logo.png";
import ActiveUser from "./ActiveUser";
import search from "./../../img/search.svg";
import PatientCard from "./PatientCard";
import SortMenuToggle from "./SortMenuToggle";
import mh from "./../../img/medical-history 1.svg";
import greenInd from "./../../img/Ellipse 1.svg";
import JaneCooper from "./../../img/Jane Cooper.png";
import EleanorPena from "./../../img/Eleanor Pena.png";
import DevonLane from "./../../img/Devon Lane.png";
import JennyWilson from "./../../img/Jenny Wilson.png";
import CourtneyHenry from "./../../img/Courtney Henry.png";
import ArleneMcCoy from "./../../img/Arlene McCoy.png";
import AnnetteBlack from "./../../img/Annette Black.png";
import CameronWilliamson from "./../../img/Cameron Williamson.png";
import BessieCooper from "./../../img/Bessie Cooper.png";
import SavannahNguyen from "./../../img/Savannah Nguyen.png";
import EstherHoward from "./../../img/Esther Howard.png";
import JeromeBell from "./../../img/Jerome Bell.png";
import Button from "../UI/Button";
import avatar from "./../../img/avatar.png";
import status from "./../../img/indicator.svg";

const DoctorProfile = () => {
  const patientsArr = [
    {
      photo: JaneCooper,
      name: "Jane Cooper",
      status: "Appointment is confirmed",
      indicator: greenInd,
      text: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      date: "Thu Sept 10, 2021 4 pm – 5 pm",
    },
    {
      photo: EleanorPena,
      name: "Eleanor Pena",
      status: "Appointment is confirmed",
      indicator: greenInd,
      text: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      date: "Thu Sept 10, 2021 4 pm – 5 pm",
    },
    {
      photo: DevonLane,
      name: "Devon Lane",
      status: "Appointment is confirmed",
      indicator: greenInd,
      text: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      date: "Thu Sept 10, 2021 4 pm – 5 pm",
    },
    {
      photo: JennyWilson,
      name: "Jenny Wilson",
      status: "Appointment is confirmed",
      indicator: greenInd,
      text: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      date: "Thu Sept 10, 2021 4 pm – 5 pm",
    },
    {
      photo: CourtneyHenry,
      name: "Courtney Henry",
      status: "Appointment is confirmed",
      indicator: greenInd,
      text: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      date: "Thu Sept 10, 2021 4 pm – 5 pm",
    },
    {
      photo: ArleneMcCoy,
      name: "Arlene McCoy",
      status: "Appointment is confirmed",
      indicator: greenInd,
      text: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      date: "Thu Sept 10, 2021 4 pm – 5 pm",
    },
    {
      photo: AnnetteBlack,
      name: "Annette Black",
      status: "Appointment is confirmed",
      indicator: greenInd,
      text: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      date: "Thu Sept 10, 2021 4 pm – 5 pm",
    },
    {
      photo: CameronWilliamson,
      name: "Eleanor Pena",
      status: "Appointment is confirmed",
      indicator: greenInd,
      text: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      date: "Thu Sept 10, 2021 4 pm – 5 pm",
    },
    {
      photo: BessieCooper,
      name: "Bessie Cooper",
      status: "Appointment is confirmed",
      indicator: greenInd,
      text: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      date: "Thu Sept 10, 2021 4 pm – 5 pm",
    },
    {
      photo: SavannahNguyen,
      name: "Savannah Nguyen",
      status: "Appointment is confirmed",
      indicator: greenInd,
      text: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      date: "Thu Sept 10, 2021 4 pm – 5 pm",
    },
    {
      photo: EstherHoward,
      name: "Esther Howard",
      status: "Appointment is confirmed",
      indicator: greenInd,
      text: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      date: "Thu Sept 10, 2021 4 pm – 5 pm",
    },
    {
      photo: JeromeBell,
      name: "Jerome Bell",
      status: "Appointment is confirmed",
      indicator: greenInd,
      text: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      date: "Thu Sept 10, 2021 4 pm – 5 pm",
    },
  ];

  return (
    <div className={s.background}>
      <div className={s.mainContainer}>
        {/* <Route path="/" exact component={SignUp} /> */}
        <header className={s.header}>
          <img src={logo} alt="#!" className={s.logo} />
          <ActiveUser
            userInfoName="Miranda Nelson"
            userInfoStatus="Doctor"
            avatar={avatar}
            status={status}
          />
        </header>
        <main className={s.mainBlock}>
          <div className={s.btnBlock}>
            <Button name="Patients" />
            <Button name="Resolutions" />
          </div>

          <div className={s.searchBlock}>
            <h1 className={s.title}>My Patients</h1>
            <div className={s.searchWrapper}>
              <img className={s.srch} src={search} alt="#" />
              <label htmlFor="input__search"></label>
              <input
                className={s.inputSearch}
                id="input__search"
                placeholder="Search"
              />
              <div className={s.sortWrapper}>
                <div className={s.sortTitle}>Sort by:</div>
                <SortMenuToggle />
              </div>
            </div>
          </div>

          <div className={s.cardContainer}>
            {patientsArr.length ? (
              <PatientCard patientsArr={patientsArr} />
            ) : (
              <div className={s.EmptyPatientsBlock}>
                <img className={s.mh} src={mh} alt="#" />
                <div className={s.mhDescription}>
                  You have no patients yet. <br />
                  To create a patient profile, please contact your
                  administrator.
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DoctorProfile;
