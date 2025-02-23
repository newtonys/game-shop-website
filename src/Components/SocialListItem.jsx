import React from "react";

function SocialListItem({ item }) {
  return (
    <li>
      <a className={getShareClassName(item.icon)} href="#">
        <i className={`bi ${item.icon}`}></i>
      </a>
    </li>
  );
}

// function to add the class share to the share icon
function getShareClassName(icon) {
  if (icon == "bi-share") {
    return "share";
  } else {
    return;
  }
}

export default SocialListItem;
