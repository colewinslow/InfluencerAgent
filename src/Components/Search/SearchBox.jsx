import React from "react";

function SearchBox() {
  return (
    <div className="w-full flex  flex-col mt-12 shadow-md bg-white rounded-md items-center">
      <div className="flex relative flex-wrap justify-evenly items-center p-4  w-full">
        <div className="absolute flex items-center z-0 top-[30px] left-[34px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8889 19.7778C15.7981 19.7778 19.7778 15.7981 19.7778 10.8889C19.7778 5.97969 15.7981 2 10.8889 2C5.97969 2 2 5.97969 2 10.8889C2 15.7981 5.97969 19.7778 10.8889 19.7778Z"
              stroke="#E5E9F0"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.9998 22L17.1665 17.1667"
              stroke="#E5E9F0"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <input
          className="w-[100%] lg:w-[75%] text-[14px] sm:text-[16px] p-4 pl-[50px]"
          placeholder=" Search company name, deal type or keyword"
        />
        <div className="flex justify-center lg:justify-end items-center w-full lg:w-[200px]">
          <button className="gradient-dark px-10 w-full rounded-md py-4 shadow-md  mt-8 lg:mt-0 lg:ml-5 font-semibold  text-xs text-white">
            SEARCH
          </button>
        </div>{" "}
      </div>
      <div className=" border-t flex items-center justify-evenly w-full border-t-accent p-4">
        <div className="flex-1 text-sm flex-col md:flex-row w-full text-DarkGrey">
          <select className="p-3 text-sm mb-2 w-full md:w-[200px]  sm:mr-3  rounded-md border border-accent  round">
            <option>All Deals</option>
            <option>One time</option>
            <option>Partnership</option>
            <option>Sponsorship</option>
          </select>
          <select className="p-3 text-sm mb-2 w-full md:w-[200px] sm:mr-3  rounded-md border border-accent  round">
            <option>Any Content</option>
            <option>Photo</option>
            <option>Video</option>
            <option>Audio</option>
          </select>
          <select className="p-3 text-sm mb-2 w-full md:w-[200px] sm:mr-3 rounded-md border border-accent  round">
            <option>Any Platform</option>
            <option>Instagram</option>
            <option>TikTok</option>
            <option>Youtube</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
