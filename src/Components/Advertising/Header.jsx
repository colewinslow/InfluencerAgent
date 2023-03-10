import React from "react";

function Header() {
  return (
    <div className="w-full  text-lightPurple">
      {" "}
      <div className=" ">
        <p className="text-[14px] sm:text-[16px]">
          No matter the content, InfluencerAgent has you covered.
        </p>
        <h1 className="text-[28px] lg:text-[45px] my-5 text-gray font-bold  ">
          Advertising Opportunities
        </h1>
        <p className="text-[14px] sm:text-[16px]">
          Blogs, Podcasts, Youtube Channels & anywhere you post content
        </p>
      </div>
    </div>
  );
}

export default Header;
