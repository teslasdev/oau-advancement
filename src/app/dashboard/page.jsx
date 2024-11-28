"use client";
import React from "react";
import TableAlum from "./table";
import Sidebar from "../components/sidebar";
import Header from "../components/header";

const page = () => {
  const statusColorMap = {
    active: "success",
    paused: "danger",
    vacation: "warning",
  };

  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="w-full h-full flex">
        <Sidebar />
        <div className="w-[85vw] p-12 bg-[#FAFBFB]">
        <Header title={"Alumins"}/>

          <div className="h-[781px] py-6 mt-6 rounded-[15px]">
            <TableAlum />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
