"use client"

import React, { useState } from "react";
import { CardBase } from "./Card";
import Input from "./Input";

const Carousel = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValueChange = (value) => {
    setInputValue(value);
  };
  return (
    <div className="flex h-52">
      <CardBase>
        <div className="flex justify-between flex-col h-full w-56">
          <div className=" flex justify-between items-center">
            <img src="/static/images/Bell (3).svg" />
            <span className="text-[0.75rem] font-semibold text-[#19191A]">
              Save
            </span>
          </div>
          <p className="text-sm text-[#19191A] font-semibold py-3 w-2/3">
            We’ll be sending notifications to you here
          </p>
          <Input
            value={inputValue}
            onChange={handleInputValueChange}
            placeholder=""
            id="custom-input"
            name="custom-input"
          />
        </div>
      </CardBase>
      <CardBase>
        <div className="flex justify-between flex-col h-full w-56">
          <div className=" flex justify-between items-center">
            <img src="/static/images/bar-chart-2.svg" />
            <img src="/static/images/Checkmark.png" className="scale-[.6]" />
          </div>
          <p className="text-sm text-[#19191A] font-semibold pt-3 ">
            Notify me when any wallets move more than
          </p>
          <span className="bg-gray-200 w-24 flex rounded py-1 px-2 text-gray-800 text-sm">
            $1,000.00
            <img src="/static/images/triangle-down.png" />
          </span>
        </div>
      </CardBase>
      <CardBase>
        <div className="flex justify-between flex-col h-full w-56">
          <div className=" flex justify-between items-center">
            <img src="/static/images/clock.svg" />
            <img src="/static/images/Checkmark.png" className="scale-[.6]" />
          </div>
          <p className="text-sm text-[#19191A] font-semibold pt-3 ">
            Notify me when any wallet dormant for
          </p>
          <span className="bg-gray-200 w-32 flex rounded py-1 px-2 text-gray-800 text-sm">
            {">  "} $1,000.00 <img src="/static/images/triangle-down.png" />
          </span>
          <p className="text-sm text-[#19191A] font-semibold">becomes active</p>
        </div>
      </CardBase>
    </div>
  );
};

export default Carousel;
