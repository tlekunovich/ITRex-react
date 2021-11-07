import React, { useState } from "react";
import s from "./../usersPages/CardToggleMenu.module.css";
import moreInf from "./../../img/more-vertical.svg";
import moreInfActive from "./../../img/more-vertical1.svg";

const CardToggleMenu = () => {
  const [subMenu, setSubMenu] = useState(false);

  const sortArr = [
    { key: "Create a resolution", id: 1 },
    { key: "Edit an appontment", id: 2 },
    { key: "Delete", id: 3 },
  ];

  return (
    <div
      className={subMenu ? s.moreInfBlockActive : s.moreInfBlock}
      onClick={() => setSubMenu(!subMenu)}
    >
      <img
        src={subMenu ? moreInfActive : moreInf}
        alt="#"
        className={s.moreInf}
      />
      {subMenu ? (
        <div className={s.moreInfMenu}>
          {sortArr.map((elem) => {
            return (
              <div
                className={
                  elem.key === "Delete" ? s.moreInfMenuItemR : s.moreInfMenuItem
                }
                key={elem.key}
              >
                {elem.key}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default CardToggleMenu;
