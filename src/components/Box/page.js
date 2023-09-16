import React from "react";
import "./Box.css";
import { BsThreeDots } from "react-icons/bs";
const image =
  "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg";

const dragStart = (e,type) => {
  e.dataTransfer.setData("type",type);
};
const Box = () => {
  return (
    <div draggable onDragStart={(e) => dragStart(e, "1st")} className="box">
      <div className="firstBox">
        <h6>important</h6>
        <BsThreeDots />
      </div>
      <div className="secondBox">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eveniet
        error minima accusamus quidem laboriosam tempore neque, ab, pariatur
        illo molestiae
      </div>
      <div className="thirdBox">
        <span className="progress" data-value="60%"></span>
        <span className="label">60%</span>
      </div>
      <div className="FourthBox">
        <div>
          <img src={image} alt="img" />
          <img src={image} alt="img" />
          <img src={image} alt="img" />
          <img src={image} alt="img" />
        </div>
        <p>10 days ago</p>
      </div>
    </div>
  );
};

export default Box;
