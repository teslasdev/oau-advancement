"use client";
import advancement from "@/app/assets/advancement.png";
import wave from "@/app/assets/wave.png";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="w-[100vw] h-screen">
      <div className="w-full h-full flex justify-between min-h-screen items-center">
        <div className="w-[50%] flex flex-col justify-center items-center h-full">
          <div className="w-[70%]">
            <h2 className="text-[51.13px] font-[700] text-[#2EB67D]">
              Sign Up
            </h2>

            <div className="py-6 space-y-6">
              <div className="flex flex-col gap-4">
                <label>Email address</label>
                <input
                  type="email"
                  label="Email"
                  placeholder="e.g. caixa@nicolas.com"
                  className="h-[59.38px] outline-none px-4 w-[496px] rounded-[4.95px] bg-transparent border-[1.28px] border-[#3E48544D]"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label>Password</label>
                <input
                  type="password"
                  label="Email"
                  placeholder="Enter your password"
                  className="h-[59.38px] outline-none px-4 w-[496px] rounded-[4.95px] bg-transparent border-[1.28px] border-[#3E48544D]"
                />
              </div>
              <div className="pt-2 pb-6">
                <Checkbox isSelected={isSelected} color="success" onValueChange={setIsSelected}>
                  Keep me signed in
                </Checkbox>
              </div>
              <div>
                <Button
                  spinner
                  className="h-[59.38px] text-[20px] bg-[#2EB67D] text-white w-[496px]"
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] relative overflow-hidden flex justify-center items-center h-full bg-[#2EB67D]">
          <div className="w-[602px] h-[420px] relative z-50">
            <Image width="100%" height={"100%"} alt="Oau Advancement" src={advancement} />
          </div>
          <div className="absolute w-[1598px] rotate-[-135deg]  bottom-0 left-0">
            <Image width="100%" height={"100%"} src={wave} alt="wave" />
          </div>
          <div className="absolute w-[1598px] rotate-[-135deg] top-0 right-0">
            <Image width="100%" height={"100%"} src={wave} alt="Wave" />
          </div>
        </div>
      </div>
    </div>
  );
}
