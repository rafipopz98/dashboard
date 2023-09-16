"use client";
import React, { useRef, useState } from "react";
import "./Box.css";
import { BsThreeDots } from "react-icons/bs";
const Box = () => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const image =
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg";

 
   const tempData=[ {
      id: 1,
      head: "important",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eveniet error minima accusamus quidem laboriosam tempor neque, ab, pariaturillo molestiae",
      value: 60,
      image,
      days: 10,
    },
  ]

  const dragstart=(e,type)=>{
    e.dataTransfer.setData(e,"type")
  }
  const dragOver=()=>{
    e.preventdefault();
  }
  return (
    <>
      {tempData.map((item, id) => (
        <div
          key={id}
          draggable
          onDragStart={(e)=>dragstart(e,"1st")}
          onDragOver={dragOver}
          className="box"
        >
          <div className="firstBox">
            <h5>{item.head}</h5>
            <BsThreeDots />
          </div>
          <div className="secondBox">{item.desc}</div>
          <div className="thirdBox">
            <span className="progress" data-value="60%"></span>
            <span className="label">{item.value}%</span>
          </div>
          <div className="FourthBox">
            <div>
              <img src={item.image} alt="img" />
              <img src={item.image} alt="img" />
              <img src={item.image} alt="img" />
              <img src={item.image} alt="img" />
            </div>
            <p>{item.days} days ago</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Box;
