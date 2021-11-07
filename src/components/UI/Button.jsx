import React from "react";
import s from "./../UI/Button.module.css";

const Button = (props) => {
  return <button className={s.btn}>{props.name}</button>;
};

export default Button;
