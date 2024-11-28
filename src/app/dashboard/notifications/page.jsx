"use client";
import React, { useCallback } from "react";
import { Chip, User } from "@nextui-org/react";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";

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
          <Header title={"Notifications"} />

          <div className="h-[781px] overflow-y-auto py-6 mt-6 space-y-6 rounded-[15px]">
            <div className="w-full h-[70px] bg-[#F5F5F5] flex gap-6 items-center border-[0.5px] rounded-[6px] border-[#E0E0E0] p-4">
              <div className="bg-[#2EB67D] w-[4px] h-full" />
              <div>
                <h5>
                  [Alumni Name] just got a new job as a [Job Post] at [Company
                  Name].
                </h5>
                <p className="text-[10px] text-[#2EB67D]">5 minutes ago</p>
              </div>
            </div>

            <div className="w-full h-[70px] bg-[#F5F5F5] flex gap-6 items-center border-[0.5px] rounded-[6px] border-[#E0E0E0] p-4">
              <div className="bg-[#2EB67D] w-[4px] h-full" />
              <div>
                <h5>
                  [Alumni Name] just got a new job as a [Job Post] at [Company
                  Name].
                </h5>
                <p className="text-[10px] text-[#2EB67D]">5 minutes ago</p>
              </div>
            </div>


            <div className="w-full h-[70px] bg-[#F5F5F5] flex gap-6 items-center border-[0.5px] rounded-[6px] border-[#E0E0E0] p-4">
              <div className="bg-[#2EB67D] w-[4px] h-full" />
              <div>
                <h5>
                  [Alumni Name] just got a new job as a [Job Post] at [Company
                  Name].
                </h5>
                <p className="text-[10px] text-[#2EB67D]">5 minutes ago</p>
              </div>
            </div>

            <div className="w-full h-[70px] bg-[#F5F5F5] flex gap-6 items-center border-[0.5px] rounded-[6px] border-[#E0E0E0] p-4">
              <div className="bg-[#2EB67D] w-[4px] h-full" />
              <div>
                <h5>
                  [Alumni Name] just got a new job as a [Job Post] at [Company
                  Name].
                </h5>
                <p className="text-[10px] text-[#2EB67D]">5 minutes ago</p>
              </div>
            </div>

            <div className="w-full h-[70px] bg-[#F5F5F5] flex gap-6 items-center border-[0.5px] rounded-[6px] border-[#E0E0E0] p-4">
              <div className="bg-[#2EB67D] w-[4px] h-full" />
              <div>
                <h5>
                  [Alumni Name] just got a new job as a [Job Post] at [Company
                  Name].
                </h5>
                <p className="text-[10px] text-[#2EB67D]">5 minutes ago</p>
              </div>
            </div>

            <div className="w-full h-[70px] bg-[#F5F5F5] flex gap-6 items-center border-[0.5px] rounded-[6px] border-[#E0E0E0] p-4">
              <div className="bg-[#2EB67D] w-[4px] h-full" />
              <div>
                <h5>
                  [Alumni Name] just got a new job as a [Job Post] at [Company
                  Name].
                </h5>
                <p className="text-[10px] text-[#2EB67D]">5 minutes ago</p>
              </div>
            </div>


            <div className="w-full h-[70px] bg-[#F5F5F5] flex gap-6 items-center border-[0.5px] rounded-[6px] border-[#E0E0E0] p-4">
              <div className="bg-[#2EB67D] w-[4px] h-full" />
              <div>
                <h5>
                  [Alumni Name] just got a new job as a [Job Post] at [Company
                  Name].
                </h5>
                <p className="text-[10px] text-[#2EB67D]">5 minutes ago</p>
              </div>
            </div>


            <div className="w-full h-[70px] bg-[#F5F5F5] flex gap-6 items-center border-[0.5px] rounded-[6px] border-[#E0E0E0] p-4">
              <div className="bg-[#2EB67D] w-[4px] h-full" />
              <div>
                <h5>
                  [Alumni Name] just got a new job as a [Job Post] at [Company
                  Name].
                </h5>
                <p className="text-[10px] text-[#2EB67D]">5 minutes ago</p>
              </div>
            </div>


            <div className="w-full h-[70px] bg-[#F5F5F5] flex gap-6 items-center border-[0.5px] rounded-[6px] border-[#E0E0E0] p-4">
              <div className="bg-[#2EB67D] w-[4px] h-full" />
              <div>
                <h5>
                  [Alumni Name] just got a new job as a [Job Post] at [Company
                  Name].
                </h5>
                <p className="text-[10px] text-[#2EB67D]">5 minutes ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
