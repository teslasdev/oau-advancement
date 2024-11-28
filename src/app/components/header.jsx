"use client"
import React from "react";
import IonSetting from "@/app/assets/ion_setting.svg";
import IonLogout from "@/app/assets/ion_logout.svg";
import Image from "next/image";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";

const Header = ({title}) => {
  return (
    <div className="flex justify-between">
      <div>
        <Breadcrumbs
          separator="/"
          itemClasses={{
            separator: "px-2",
          }}
        >
          <BreadcrumbItem className="font-[400] text-[#A0C0B3] text-[14px]">
            Pages
          </BreadcrumbItem>
          <BreadcrumbItem>{title}</BreadcrumbItem>
        </Breadcrumbs>
        <h2 className="text-[#2A2A2A] mt-2 text-[20px] font-[800]">{title}</h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex gap-1 items-center">
          <p className="font-[400] text-[#A0C0B3] text-[15px]">Settings</p>
          <div
            className="w-[13.12px]
                h-[13.12px] flex justify-center items-center"
          >
            <Image
              src={IonSetting}
              width={"100%"}
              height={"100%"}
              alt="Oau Advancement"
            />
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <p className="font-[400] text-[#A0C0B3] text-[15px]">Logout</p>
          <div
            className="w-[13.12px]
                h-[13.12px] flex justify-center items-center"
          >
            <Image
              src={IonLogout}
              width={"100%"}
              height={"100%"}
              alt="Oau Advancement"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
