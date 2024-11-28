"use client";
import React, { useCallback } from "react";
import { Chip, User } from "@nextui-org/react";
import TableAlum from "./table";
import Sidebar from "../components/sidebar";
import Header from "../components/header";

const page = () => {
  const statusColorMap = {
    active: "success",
    paused: "danger",
    vacation: "warning",
  };
  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return <div className="relative flex items-center gap-2"></div>;
      default:
        return cellValue;
    }
  }, []);
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
