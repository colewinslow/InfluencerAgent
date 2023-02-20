import React, { useState } from "react";
export default function LanguageChanger() {
  const [language, setLanguage] = useState("EN");

  return (
    <div className="flex items-center ">
      <div className="text-[#E5E9F0] flex item-center">
        <div className="h-[20px] bg-accent w-[2px] ml-5 mr-5" />
        <div className="bg-transparent relative cursor-pointer   ">
          <div className="flex items-center text-lightPurple ">
            {language}
            <svg
              className="ml-4"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="#9797BE"
                stroke-opacity="0.46"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <select
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-transparent w-[100px] opacity-0 text-sm absolute top-0  left-[-30px] "
          >
            <option value={"EN"}>English (EN)</option>
            <option value={"ES"}>Español (ES)</option>
            <option value={"BR"}>Português (BR)</option>
            <option value={"IT"}>Italiano (IT)</option>
          </select>{" "}
        </div>{" "}
      </div>
    </div>
  );
}
