"use client";
import Box from "@/components/Box/page";
import Heading from "@/components/Heading/page";
import Navbar from "@/components/Navbar/page";
import Rectangle from "@/components/Reactangle/page";
import Sidebar from "@/components/Sidebar/page";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Sidebar />
      <section id="content">
        <Navbar />
        <Rectangle />
        <div className="leftCol">
          <div className="mainWindow">
            <Heading>koko</Heading>
            <Box />
          </div>
          <div className="mainWindow">
            <Heading>koko</Heading>
            <Box />
            <Box />
          </div>
          <div className="mainWindow">
            <Heading>koko</Heading>
            <Box />
            <Box />
            <Box />
          </div>
          <div className="mainWindow">
            <Heading>koko</Heading>
          </div>
          <div className="mainWindow">
            <Heading>koko</Heading>
            <Box />
          </div>
        </div>
      </section>
    </>
  );
}
