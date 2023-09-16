"use client";
import Box from "@/components/Box/page";
import Heading from "@/components/Heading/page";
import Navbar from "@/components/Navbar/page";
import Rect from "@/components/Rect/page";
import Sidebar from "@/components/Sidebar/page";
import { useState } from "react";

export default function Home() {
  const [array, setArray] = useState([]);

  const dragDropped = (e) => {
    const type = e.dataTransfer.getData("type");
    console.log(type)
    setArray([...array, type]);
    console.log(array)

    console.log("droppedd");
  };

  const draggingOver = (e) => {
    e.preventDefault();
    console.log("overinggggggggg");
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
          <div onDragOver={draggingOver} onDrop={dragDropped} >
            <Heading>2</Heading>
            {
              array.map((item,id)=>(
                <div key={id} className="todo">
                {item}
                </div>
              ))
            }
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
