import React from "react";

function Header() {
  return (
    <div className=" w-full text-lightPurple">
      <p className="text-[14px] sm:text-[16px]">
        Make money from your content, the right way!
      </p>
      <h1 className=" text-[34px] lg:text-[45px] my-5 text-gray font-bold ">
        How Does Influencer Agent Work?
      </h1>
      <p className="text-[14px] sm:text-[16px]">
        We help influencers connect with business that share similar missions
        and values
      </p>
      <div className="flex flex-col sm:flex-row item-center w-full mt-12 ">
        <div className="bg-white w-full mb-10 sm:mb-0 sm:w-[45%] flex items-end  justify-center mr-10 h-[350px] rounded-md shadow-md">
          {" "}
          <button className="gradient-dark px-10 w-[70%] mb-5 rounded-md py-4 shadow-md  mt-8 lg:mt-0 lg:ml-5 font-semibold  text-xs text-white">
            Creators Looking Too Monetize
          </button>
        </div>
        <div className="bg-white w-full sm:w-[45%] flex items-end justify-center  h-[350px] rounded-md  shadow-md">
          <button className="gradient-dark px-10 w-[70%] mb-5  rounded-md py-4 shadow-md  mt-8 lg:mt-0 lg:ml-5 font-semibold  text-xs text-white">
            Businesses Looking to Advertize
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
