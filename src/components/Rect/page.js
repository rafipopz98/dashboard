import React from "react";
import "./Rect.css";
const image =
  "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg";

const Rect = () => {
  return (
    <div className="rect">
      <div className="firstRect">
        <h2>
          <i class="bx bx-arrow-back icin"></i>rafi
        </h2>
        <div className="itemsDetails">
          <h2>lolol</h2>
          <img src={image} alt="" />
          <i class="bx bx-dots-vertical-rounded icons"></i>
        </div>
      </div>
      <div className="secondRect">
        <div className="imgPara">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <div className="imgalll">
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
          </div>
        </div>
        <div className="btns">
          <div className="invite">
            <i class="bx bxs-lock-alt icins"></i>private
          </div>
          <div className="invite">
            <i class="bx bxs-edit icins"></i>edit
          </div>
          <div className="invite">
            <i class="bx bx-comment icins"></i>(45)comments
          </div>
        </div>

        <div className="progress">
        </div>
      </div>
    </div>
  );
};

export default Rect;
