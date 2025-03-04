import React, { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";
import "./header.css";
import userImg from "../images/profile.png";
function Header({ toggleActive, active }) {
  const { library, bag } = useContext(AppContext);
  return (
    <header>
      <a
        href="#"
        className={`menu ${active ? "active" : undefined}`}
        onClick={toggleActive}
      >
        <i className="bi bi-sliders"></i>
      </a>
      <div className="userItems">
        <a href="#" className="icon">
          <i className="bi bi-heart-fill"></i>
          <span className="like">{library.length}</span>
        </a>
        <a href="#" className="icon">
          <i className="bi bi-bag-fill"></i>
          <span className="bag">{bag.length}</span>
        </a>
        <div className="avatar">
          <a href="#">
            <img src={userImg} alt="User Image" />
          </a>
          <div className="user">
            <span>User Name</span>
            <a href="#">View Profile</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
