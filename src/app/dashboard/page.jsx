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
    <div className="w-[100dvw] h-screen overflow-hidden">
  <div className="flex h-full">
        <Sidebar />
        <div className="w-[85dvw] h-full overflow-y-auto p-12 bg-[#FAFBFB]">
          <Header title={"Alumnis"} />

          <div className="py-6 mt-6 rounded-[15px]">
            <TableAlum />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
