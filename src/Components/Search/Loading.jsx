import React from "react";

function Loading() {
  return (
    <>
      <div className="flex w-full justify-evenly items-center opacity-50 ">
        <div className="skeleton w-[250px] h-[200px] rounded-lg mr-2"></div>
        <div className="flex flex-col w-full items-center">
          <div className="skeleton skeleton-text skeleton-text__body"></div>
          <div className="skeleton skeleton-text skeleton-text__body"></div>
          <div className="skeleton skeleton-text skeleton-text__body"></div>
          <div className="skeleton skeleton-text skeleton-text__body"></div>
        </div>
      </div>
      <div className="flex w-full justify-evenly items-center mt-5 opacity-20  ">
        <div className="skeleton w-[250px] h-[200px] rounded-lg mr-2"></div>
        <div className="flex flex-col w-full items-center">
          <div className="skeleton skeleton-text skeleton-text__body"></div>
          <div className="skeleton skeleton-text skeleton-text__body"></div>
          <div className="skeleton skeleton-text skeleton-text__body"></div>
          <div className="skeleton skeleton-text skeleton-text__body"></div>
        </div>
      </div>
    </>
  );
}

export default Loading;
