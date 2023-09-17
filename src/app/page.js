"use client";
import Box from "@/components/Box/page";
import Heading from "@/components/Heading/page";
import Navbar from "@/components/Navbar/page";
import Rect from "@/components/Rect/page";
import Sidebar from "@/components/Sidebar/page";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Sidebar />
      <section id="content">
        <Navbar />
        <Rect />
        <div className="main">
          <div className="todo">
            <Heading>future-planning</Heading>
            
          </div>
          <div className="todo">
            <Heading>Todo</Heading>
            <Box />
          </div>
          <div className="todo">
            <Heading>in-prgress</Heading>
            
          </div>
          <div className="todo">
            <Heading>completed</Heading>
          </div>
        </div>
      </section>
    </>
  );
}
