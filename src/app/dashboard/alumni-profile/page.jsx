"use client";
import React, { useCallback } from "react";
import { Chip, User } from "@nextui-org/react";
import Sidebar from "../../components/sidebar";
import background2 from "@/app/assets/background-2.png";
import Header from "../../components/header";
import Image from "next/image";

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
          <Header title={"Alumni-Profile"} />

          <div className="h-[781px] overflow-y-auto mt-6 space-y-12 rounded-[15px]">
            <div className="w-full relative h-[300px]">
              <div className="h-[240px] bg-[#2EB67D] rounded-[15px] w-full"></div>
              <div className="h-[113px] bg-white border-[1.5px] border-[#ffffff] rounded-[15px]  absolute top-[60%] left-[50%] -translate-x-1/2 w-[90%]">
                <div className="h-full  w-full flex items-center opacity-100">
                  <div className="px-6 flex items-center w-full justify-between gap-6 h-full">
                    <div className="flex items-center gap-6">
                      <div className="w-[80px] h-[80px] bg-gray-300 rounded-[8px]" />
                      <div className="flex  flex-col gap-2 text-[14px]">
                        <h3 className="text-[#425B51] font-[700] text-[18px]">
                          Esthera Jackson
                        </h3>
                        <p className="font-[400] text-[#425B51]">
                          Senior Data Analyst at Google
                        </p>
                      </div>
                    </div>

                    <div>
                      <svg
                        width="20px"
                        height="25px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.02 2.90991C8.70997 2.90991 6.01997 5.59991 6.01997 8.90991V11.7999C6.01997 12.4099 5.75997 13.3399 5.44997 13.8599L4.29997 15.7699C3.58997 16.9499 4.07997 18.2599 5.37997 18.6999C9.68997 20.1399 14.34 20.1399 18.65 18.6999C19.86 18.2999 20.39 16.8699 19.73 15.7699L18.58 13.8599C18.28 13.3399 18.02 12.4099 18.02 11.7999V8.90991C18.02 5.60991 15.32 2.90991 12.02 2.90991Z"
                          stroke="#2EB67D"
                          strokeWidth={1.5}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                        />
                        <path
                          d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z"
                          stroke="#2EB67D"
                          strokeWidth={1.5}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601"
                          stroke="#2EB67D"
                          strokeWidth={1.5}
                          strokeMiterlimit={10}
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white shadow-lg rounded-[8px] h-full p-6">
                <h2 className="text-[#2A2A2A] text-[20px] font-[800]">
                  Job History
                </h2>

                <div>
                  <div className="h-[106px] flex p-4 items-center  bg-white">
                    <div className="flex items-center gap-4">
                      <svg
                        width="50px"
                        height="50px"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                      >
                        <path
                          fill="#4285F4"
                          d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"
                        />
                        <path
                          fill="#34A853"
                          d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"
                        />
                        <path
                          fill="#FBBC04"
                          d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"
                        />
                        <path
                          fill="#EA4335"
                          d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"
                        />
                      </svg>
                      <div>
                        <h3 className="text-[#2EB67D] text-[14px] font-[700]">
                          Google
                        </h3>
                        <h5 className="text-[#425B51] font-[500] text-[12px]">
                          235 Alumni
                        </h5>
                        <p className="font-[400] text-[12px] text-[#425B51]">
                          Nov 2023 - Present
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="h-[106px] flex p-4 items-center  bg-white">
                    <div className="flex items-center gap-4">
                      <svg
                        width="50px"
                        height="50px"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                      >
                        <path
                          fill="#4285F4"
                          d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"
                        />
                        <path
                          fill="#34A853"
                          d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"
                        />
                        <path
                          fill="#FBBC04"
                          d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"
                        />
                        <path
                          fill="#EA4335"
                          d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"
                        />
                      </svg>
                      <div>
                        <h3 className="text-[#2EB67D] text-[14px] font-[700]">
                          Google
                        </h3>
                        <h5 className="text-[#425B51] font-[500] text-[12px]">
                          235 Alumni
                        </h5>
                        <p className="font-[400] text-[12px] text-[#425B51]">
                          Nov 2023 - Present
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="h-[106px] flex p-4 items-center  bg-white">
                    <div className="flex items-center gap-4">
                      <svg
                        width="50px"
                        height="50px"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                      >
                        <path
                          fill="#4285F4"
                          d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"
                        />
                        <path
                          fill="#34A853"
                          d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"
                        />
                        <path
                          fill="#FBBC04"
                          d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"
                        />
                        <path
                          fill="#EA4335"
                          d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"
                        />
                      </svg>
                      <div>
                        <h3 className="text-[#2EB67D] text-[14px] font-[700]">
                          Google
                        </h3>
                        <h5 className="text-[#425B51] font-[500] text-[12px]">
                          235 Alumni
                        </h5>
                        <p className="font-[400] text-[12px] text-[#425B51]">
                          Nov 2023 - Present
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-[8px] h-full p-6 space-y-6">
                <div className="flex items-center gap-2 text-[14px]">
                  <h3 className="text-[#425B51] font-[700]">Full Name:</h3>
                  <p className="font-[400] text-[#425B51]"> Esthera Jackson</p>
                </div>

                <div className="flex items-center gap-2 text-[14px]">
                  <h3 className="text-[#425B51] font-[700]">Gender:</h3>
                  <p className="font-[400] text-[#425B51]"> Female</p>
                </div>

                <div className="flex items-center gap-2 text-[14px]">
                  <h3 className="text-[#425B51] font-[700]">
                    Year of Graduation:
                  </h3>
                  <p className="font-[400] text-[#425B51]">2023</p>
                </div>

                <div className="flex items-center gap-2 text-[14px]">
                  <h3 className="text-[#425B51] font-[700]">Faculty:</h3>
                  <p className="font-[400] text-[#425B51]"> Technology</p>
                </div>

                <div className="flex items-center gap-2 text-[14px]">
                  <h3 className="text-[#425B51] font-[700]">Department:</h3>
                  <p className="font-[400] text-[#425B51]"> Physiotherapy</p>
                </div>

                <div className="flex items-center gap-2 text-[14px]">
                  <h3 className="text-[#425B51] font-[700]">Email: </h3>
                  <p className="font-[400] text-[#425B51]">
                    {" "}
                    alecthompson@mail.com
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[14px]">
                  <h3 className="text-[#425B51] font-[700]">Location: </h3>
                  <p className="font-[400] text-[#425B51]"> United States</p>
                </div>

                <div className="flex items-center gap-2 text-[14px]">
                  <h3 className="text-[#425B51] font-[700]">Social media: </h3>
                  <p className="font-[400] text-[#425B51]"> United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
