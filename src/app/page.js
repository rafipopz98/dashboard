"use client";
import Box from "@/components/Box/page";
import Heading from "@/components/Heading/page";
import Navbar from "@/components/Navbar/page";
import Rect from "@/components/Rect/page";
import Sidebar from "@/components/Sidebar/page";
import { useState } from "react";

export default function Home() {
  const [arr, setArray] = useState([]);
  const draggingOver = (e) => {
    e.preventDefault();
    console.log("overinggggggggg");
  };
  const dragDropped = (e) => {
    const type = e.dataTransfer.getData("type");
    setArray(...arr, type);

    console.log("droppedd");
  };

  return (
    <>
      <Sidebar />
      <section id="content">
        <Navbar />
        <Rect />
        <div className="main">
          <div className="todo">
            <Heading>1</Heading>
            <Box />
          </div>
          <div onDragOver={draggingOver} onDrop={dragDropped} className="todo">
            <Heading>2</Heading>
            {arr.map((item, index) => {
              <div key={index}>{item}</div>;
            })}
          </div>
          <div className="todo">
            <Heading>3</Heading>
          </div>
          <div className="todo">
            <Heading>4</Heading>
          </div>
        </div>
      </section>
    </>
  );
}
