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
          <Header title={"Companies"} />

          <div className="h-[781px] bg-white w-full shadow-sm mt-6 rounded-[15px]">
            <div className="grid grid-cols-3 overflow-y-auto h-full">
              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>

              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>

              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>


              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>


              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>


              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>


              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>

              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>



              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>


              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>


              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>


              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>



              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>


              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>


              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>


              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>


              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>



              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>


              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>


              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>


              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>


              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>

              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
                </div>
              </div>


              <div className="h-[106px] flex justify-around items-center border border-[#EAECF0] bg-white">
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
                    <h3 className="text-[#2EB67D] font-[700]">Google</h3>
                    <h5 className="text-[#425B51]">235 Alumni</h5>
                  </div>
                </div>

                <div>
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
                  </svg>
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
