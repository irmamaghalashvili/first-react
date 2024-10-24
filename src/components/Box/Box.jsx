import { IoIosPerson } from "react-icons/io";
import React from 'react';
import "../../Assets/styles/box.css";

function Box({ onClick }) {
  return (
    <div>
      <button className="btn" onClick={onClick} ><IoIosPerson />About Me</button>
    </div>
  );
}

export default Box;
