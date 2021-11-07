import React from "react";
import s from "./../usersPages/PatientCard.module.css";
import clockThree from "./../../img/clock-three.svg";
import clipboardBlank from "./../../img/clipboard-blank.svg";
import CardToggleMenu from "./CardToggleMenu";

const PatientCard = ({ patientsArr }) => {
  return (
    <div className={s.patientsBlock}>
      {patientsArr.map((elem, index) => {
        return (
          <div className={s.patientCard} key={index}>
            <div className={s.patientHeader}>
              <div className={s.patientHeaderMain}>
                <img src={elem.photo} alt="#" />
                <div className={s.patientInfo}>
                  <div className={s.patientName}>{elem.name}</div>
                  <div className={s.patientStatusBlock}>
                    <img src={elem.indicator} alt="#" />
                    <div className={s.patientStatus}>{elem.status}</div>
                  </div>
                </div>
              </div>
              <CardToggleMenu />
            </div>

            <div className={s.patientBody}>
              <div className={s.bodyDataBlock}>
                <img src={clockThree} className={s.clock} alt="#" />
                <div className={s.bodyData}>{elem.date}</div>
              </div>
              <div className={s.bodyInfoBlock}>
                <img src={clipboardBlank} className={s.clock} alt="#" />
                <div className={s.bodyInfo}>{elem.text}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PatientCard;
