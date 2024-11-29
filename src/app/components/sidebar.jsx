"use client";
import React, { useState } from "react";
import OauLogo from "@/app/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = ({params}) => {
  const [activeItem, setActiveItem] = useState("ALUMNIS");
  const pathname = usePathname();
  // Get the current path
  

  const menuItems = [
    {
      label: "ALUMNIS",
      color: "#2EB67D",
      path: "/dashboard",
      icon: (
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
        >
          <circle
            cx={12}
            cy={8}
            r={5}
            fill="#ffffff"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
          <path
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 21a8 8 0 1 0-16 0"
          />
          <path
            fill="#ffffff"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 13a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8z"
          />
        </svg>
      ),
    },
    { label: "COMPANIES", color: "#8A8A8A", path: "/dashboard/companies" , icon : <svg
      fill="#ffffff"
      width="15px"
      height="15px"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      
    >
      <path d="M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z" />
    </svg> },
    {
      label: "NOTIFICATIONS",
      color: "#8A8A8A",
      path: "/dashboard/notifications",
      icon : <svg
      fill="#ffffff"
      width="15px"
      height="15px"
      viewBox="0 0 36 36"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      
    >
      <title>{"notification-solid"}</title>
      <path
        className="clr-i-solid clr-i-solid-path-1"
        d="M32.85,28.13l-.34-.3A14.37,14.37,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93l-.34.3v2.82H32.85Z"
      />
      <path
        className="clr-i-solid clr-i-solid-path-2"
        d="M15.32,32a2.65,2.65,0,0,0,5.25,0Z"
      />
      <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
    </svg>
    },
  ];

  return (
    <div className="w-[15dvw] border flex justify-center items-center bg-white border-[#E0E1E2]">
      <div className="w-[90%] py-12 h-full">
        <div className="flex items-center justify-center gap-4">
          <div
            className="w-[50.14px]
                h-[50.14px] flex justify-center items-center"
          >
            <Image
              src={OauLogo}
              width={"100%"}
              height={"100%"}
              alt="Oau Advancement"
            />
          </div>

          <h2 className="text-[#2A2A2A] text-[20px] font-[800]">ADVANCEMENT</h2>
        </div>

        <div className="py-8 w-full flex flex-col gap-4 justify-center items-center">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className={`w-[80%] h-[54px] flex px-3 gap-2 items-center rounded-[15px] cursor-pointer ${
                pathname === item.path ? "bg-[#2EB67D]" : "bg-transparent"
              }`}
              onClick={() => setActiveItem(item.label)}
            >
              <div
                className={`w-[30px] flex justify-center items-center text-white h-[30px] rounded-[12px] ${
                  pathname === item.path ? "bg-[#FFFFFF]" : "bg-[#8A8A8A]"
                }`}
              >{item.icon}</div>
              <Link
                className={`text-[12px] font-[700] uppercase ${
                  pathname === item.path ? "text-white" : "text-[#8A8A8A]"
                }`}
                href={item.path}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
