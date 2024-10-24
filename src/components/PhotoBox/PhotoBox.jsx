import React from "react";
import "../../Assets/styles/photoBox.css";

function PhotoBox({title, content}) {
  return (
    <div className="photo-box">
      <div className="profile-picture"></div>
      <h1>Irma Maghalashvili</h1>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default PhotoBox;
