import React from "react";
import s from "./../usersPages/ActiveUser.module.css";

const ActiveUser = (props) => {
  return (
    <div className={s.activeUser}>
      <div className={s.userInfo}>
        <div className={s.userInfoName}>{props.userInfoName}</div>
        <div className={s.userInfoStatus}>{props.userInfoStatus}</div>
      </div>
      <div className={s.avaStatusBlock}>
        <img src={props.avatar} alt="#" className={s.avatar} />
        <img src={props.status} alt="#" className={s.online} />
      </div>
    </div>
  );
};

export default ActiveUser;
