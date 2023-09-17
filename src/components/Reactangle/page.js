import React from "react";
import "./rectangle.css";
import { BsThreeDots } from "react-icons/bs";
const image =
  "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg";

const Rectangle = () => {
  return (
    <div className="rectangle">
      <div className="row1">
        <div className="detailsName">
          <h2>name <span className="threedots3">
            <BsThreeDots />
            </span></h2> 
          <p>
            Lorem ipsum dolor sit ame
          </p>
          
        </div>
        <div className="detailsNamepfp">
          <div>
            <h4>name</h4>
            <p>lorem ispum</p>
          </div>
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            alt="img"
          />
          <BsThreeDots />
        </div>
      </div>
      <div className="row2">
        <div className="r2first">
          <div className="imgEve">
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
          </div>
          <div className="btnEve">
            <div className="invite firstone">
              <i class="bx bxs-share icins"></i>invite
            </div>
            <div className="invite secondone">
              <i class="bx bxs-lock-alt icins"></i>private
            </div>
            <div className="invite thirdone">
              <i class="bx bxs-edit icins"></i>edit
            </div>
            <div className="invite fourthone">
              <i class="bx bx-comment icins"></i>(45)cmts
            </div>
          </div>
        </div>
        <div className="r2second">
          <div className="label">total progress 60%</div>
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Rectangle;
