import React, { useState, useEffect } from "react";
export default function NavBar() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="/imgs/Startingagency.jpg" alt="" />
        </div>
        <Menu />
      </div>
    </>
  );
}
function Menu() {
  const [active, setActive] = useState(0);
  const hhandleClick = (index) => {
    setActive(index);
  };
  return (
    <ul className="menu">
      <li
        className={active === 0 ? "active" : ""}
        onClick={() => hhandleClick(0)}
      >
        اخر أعمالي
      </li>
      <li
        className={active === 1 ? "active" : ""}
        onClick={() => hhandleClick(1)}
      >
        أعمالي في التصميم
      </li>
      <li
        className={active === 2 ? "active" : ""}
        onClick={() => hhandleClick(2)}
      >
        من أنا
      </li>
      <li
        className={active === 3 ? "active" : ""}
        onClick={() => hhandleClick(3)}
      >
        تواصل معي
      </li>
    </ul>
  );
}
