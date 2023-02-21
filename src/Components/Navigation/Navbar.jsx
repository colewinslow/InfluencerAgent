import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Assets/IALogoIcon.svg";
import LanguageChanger from "../LanguageChanger";
function Navbar() {
  const [OpenMenu, setOpenMenu] = useState(false);
  const Links = [
    { id: 1, to: "/", title: "Search" },
    { id: 2, to: "/how-it-works", title: "How It Works" },
    { id: 3, to: "/advertizing", title: "IA Advertizing" },
    { id: 4, to: "/sign-in", title: "Sign In" },
  ];
  let location = useLocation();
  console.log(location.pathname);
  return (
    <div
      className={`${
        location.pathname === "/sign-in" || location.pathname === "/sign-up"
          ? "h-[100vh]"
          : "h-[400px] gradient-light"
      } gradient-light`}
    >
      {location.pathname === "/sign-in" || location.pathname === "/sign-up" ? (
        <div className="bg-white hidden sm:flex w-[0%] md:w-[60%] top-0 h-screen absolute z-0  right-0"></div>
      ) : (
        <div></div>
      )}
      <nav className="flex   py-5  w-full z-50 ">
        <div className="flex sm:w-[60%] w-[50%] ml-10 sm:ml-24">
          <Link to="/" className="flex w-[200px] h--[60px]  items-center ">
            <img src={Logo} alt="Logo" />
          </Link>{" "}
          <LanguageChanger />
        </div>{" "}
        <div className="md:flex  md:w-[55%] max-w-[600px] w-[45%] hidden  items-center justify-evenly  z-50 text-sm  mr-10  text-lightPurple">
          {Links.map(({ to, title, id }) => {
            return (
              <Link
                key={id}
                className={`mr-2 hover:text-main  ${
                  location.pathname === to ? "active text-main" : ""
                }`}
                to={to}
              >
                {title}
              </Link>
            );
          })}{" "}
        </div>{" "}
        <div
          onClick={() => setOpenMenu(!OpenMenu)}
          className="md:hidden flex items-center  justify-end w-[30%]  "
        >
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.6377 7.55511H19.6377"
              stroke="#7845C0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.6377 1.55511H19.6377"
              stroke="#7845C0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.6377 13.5551H19.6377"
              stroke="#7845C0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {OpenMenu && (
          <div
            onClick={() => setOpenMenu(!OpenMenu)}
            className="flex flex-col h-[100vh] md:hidden  bg-black/50 text-[#24292E] absolute z-20 top-[70px] w-full left-0"
          >
            {" "}
            {Links.map(({ id, to, title }) => {
              return (
                <Link
                  className={`p-5 px-8 text-[16px] border-accent  border-b-2 bg-[#fcfcfc] shadow-lg font-semibold w-full   mr-8 hover:bg-slate-200${
                    location.pathname === to ? "active bg-light text-white" : ""
                  }`}
                  key={id}
                  to={to}
                >
                  {title}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
