import React, { useState } from "react";
import s from "./../usersPages/SortMenuToggle.module.css";
import angleDown from "./../../img/angle-down.svg";
import angleUp from "./../../img/angle-up.svg";
import sliders from "./../../img/sliders-v-alt.svg";

const SortMenuToggle = () => {
  const [subMenu, setSubMenu] = useState(false);
  const [sortBy, setSortBy] = useState("Date");
  const sortArr = [
    { key: "Date", id: 1 },
    { key: "Name", id: 2 },
  ];

  const sortedByItem = (key) => {
    setSortBy(key);
  };
  return (
    <div className={s.SortBy} onClick={() => setSubMenu(!subMenu)}>
      <div className={s.sortItem}>{sortBy}</div>
      <img
        src={subMenu ? angleUp : angleDown}
        alt="#"
        className={s.srchAngle}
      />
      <img src={sliders} alt="#" className={s.srchSliders} />
      {subMenu ? (
        <div className={s.menuToggle}>
          {sortArr.map((elem) => {
            return (
              <div
                className={s.menuToggleItem}
                key={elem.key}
                onClick={() => sortedByItem(elem.key)}
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

export default SortMenuToggle;
