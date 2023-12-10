"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Input from "./Input";

const Form = () => {
  const router = useRouter();

  const [inputValue, setInputValue] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const checkValidEmail = (val) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailPattern.test(val));
  };
  const handleInputValueChange = (value) => {
    event.preventDefault();
    console.log(value, "value");
    setInputValue(value);
    checkValidEmail(value);
  };

  const handleFormSubmit = () => {
    event.preventDefault();
    console.log(isValidEmail, "isValidEmail");
    if (isValidEmail && inputValue !== "") {
      router.push("https://app.loch.one/welcome");
    } else {
      checkValidEmail(inputValue);
    }
  };

  return (
    <div className="w-full lg:w-5/12 bg-white h-screen px-8 lg:px-0">
      <div className="w-full lg:w-7/12 mx-auto flex justify-center items-center flex-col h-full">
        <h3 className="heading-3 text-[#B0B1B3] py-6">
          Sign up for exclusive access.
        </h3>
        <Input
          value={inputValue}
          onChange={handleInputValueChange}
          placeholder="Your email address"
          id="custom-input"
          name="custom-input"
        />
        {!isValidEmail && (
          <p className="text-red-500 opacity-70 text-sm text-left pt-2 w-full">
            Please enter a valid email
          </p>
        )}
        <button
          onClick={handleFormSubmit}
          disabled={!isValidEmail}
          className="bg-black w-full button-label text-white px-4 py-4 rounded-md my-6 hover:bg-gray-900 active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Get started
        </button>

        <span className="button-label py-4">
          You’ll receive an email with an invite link to join.
        </span>
      </div>
    </div>
  );
};

export default Form;
