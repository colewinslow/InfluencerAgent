import React from "react";
import { Link } from "react-router-dom";

function SignInFormElements() {
  return (
    <div className=" bg-white p-10 sm:h-full h-[100vh] text-gray rounded w-full  ">
      <h2 className="font-bold text-[26px] mb-5">Sign in to InfluencerAgent</h2>
      <button className="flex mt-5 w-full max-w-[350px] p-1 rounded text-white text-sm bg-[#1a73e8] item-center">
        <div className="mr-2  h- flex items-center justify-center  bg-white h-[35px] w-[35px]">
          <svg
            className=" object-contain"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.64 9.20456C17.64 8.56638 17.5827 7.95274 17.4764 7.36365H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20456Z"
              fill="#4285F4"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.99976 18C11.4298 18 13.4671 17.1941 14.9562 15.8195L12.0475 13.5614C11.2416 14.1014 10.2107 14.4205 8.99976 14.4205C6.65567 14.4205 4.67158 12.8373 3.96385 10.71H0.957031V13.0418C2.43794 15.9832 5.48158 18 8.99976 18Z"
              fill="#34A853"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957273C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71Z"
              fill="#FBBC05"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.99976 3.57955C10.3212 3.57955 11.5075 4.03364 12.4403 4.92545L15.0216 2.34409C13.463 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z"
              fill="#EA4335"
            />
          </svg>
        </div>
        <span className="h-[35px] flex justify-center items-center">
          Sign in with Google
        </span>
      </button>
      <div className="flex items-center mt-10  justify-evenly">
        <div className="w-[40%] bg-accent h-[1px]" />
        <span className="text-[#c2c2c2] mx-8">Or</span>
        <div className="w-[40%] bg-accent h-[1px] " />
      </div>
      <div className="mt-8 flex flex-col w-full">
        <label className="font-bold ">Username or Email Address</label>
        <input className="bg-[#f3f3f4] p-3 mt-2" />
      </div>
      <div className="mt-5 flex flex-col relative ">
        <span className="absolute right-0 top-1 text-xs text-accent">
          Forgot Password?
        </span>
        <label className="font-bold ">Password</label>
        <input className="bg-[#f3f3f4] p-3 mt-2 " />
      </div>{" "}
      <button className="gradient-dark px-10 w-full mb-10 rounded-md py-4 shadow-md  mt-8 font-semibold  text-sm text-white">
        Sign In
      </button>
      <Link className="mt-4 text-sm underline text-center w-full" to="/sign-up">
        Don't have an account? Sign Up Now
      </Link>
    </div>
  );
}

export default SignInFormElements;
