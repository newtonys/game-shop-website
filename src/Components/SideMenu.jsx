import React, { useState } from "react";
import "./sideMenu.css";
import navListData from "../data/navListData";
import NavListItem from "./NavListItem";
import SocialListItem from "./SocialListItem";
import socialListData from "../data/socialListData";

function SideMenu({ active }) {
  const [navData, setNavData] = useState(
    Array.isArray(navListData) ? navListData : []
  );

  const [socialData, setSocialData] = useState(socialListData);
  return (
    <div className={`sideMenu ${active ? "active" : undefined}`}>
      <a href="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Play</span>
      </a>
      <ul className="nav">
        {navData.map((item) => (
          <NavListItem key={item._id} item={item} />
        ))}
      </ul>
      <ul className="social">
        {socialData.map((item) => (
          <SocialListItem key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;
