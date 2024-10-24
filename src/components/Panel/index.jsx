import React from "react";
import "../../Assets/styles/panel.css";
import Button from "../Button/Button";
import { IoIosArrowBack } from "react-icons/io";
import Navigation from "../Navigation";
import PhotoBox from "../PhotoBox/PhotoBox";

export default function Panel({ collapsed, onCollapse }) {
  

  return (
      <div className={`panel ${collapsed ? "collapsed" : ""}`}>
        <PhotoBox/>
        <Navigation collapsed={collapsed} />
        <Button onClick={onCollapse} text="Go back" icon={<IoIosArrowBack />} />
        <button onClick={onCollapse} className="collapse-btn">
          &#8801;
        </button>
      </div>
  );
}
