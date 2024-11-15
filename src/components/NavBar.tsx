"use client";
import Link from "next/link";
import React, { useState } from "react";

function NavBar() {
  const [isHamburger, setIsHamburger] = useState(false);
  const hamburHandler = () => {
    setIsHamburger(!isHamburger);
  };
  return (
    <nav className="flex justify-between bg-[#043873] items-center py-4 px-[32px] lg:px-[110px] top-0 z-30">
      <div className="flex items-center space-x-4 text-white w-[191px]">
        <svg
          width="37"
          height="30"
          viewBox="0 0 37 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_9_316)">
            <path
              d="M0 2.86525V9.6182C0 11.6749 2.50611 12.7719 4.03763 11.3322L11.3471 4.5792C12.9483 3.1052 11.904 0.5 9.71119 0.5H2.40169C1.07902 0.5 0 1.56265 0 2.86525Z"
              fill="white"
            />
            <path
              d="M34.5983 0.5H27.2888C25.1308 0.5 24.0517 3.1052 25.6529 4.5792L32.9624 11.3322C34.4939 12.7376 37 11.6749 37 9.6182V2.86525C37 1.56265 35.921 0.5 34.5983 0.5Z"
              fill="white"
            />
            <path
              d="M20.1533 16.9884L32.9624 28.8489C34.4939 30.2543 37 29.1917 37 27.1349V20.3134C37 19.6621 36.7215 19.0451 36.2342 18.5995L20.1533 3.68814C19.2135 2.83117 17.7865 2.83117 16.8467 3.68814L0.765757 18.5995C0.278457 19.0451 0 19.6621 0 20.3134V27.1349C0 29.1917 2.50611 30.2886 4.03763 28.8489L16.8467 16.9884C17.7865 16.1314 19.2135 16.1314 20.1533 16.9884Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_9_316">
              <rect
                width="37"
                height="29"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <h1 className="text-[28px] font-bold">whitepace</h1>
      </div>

      <div className="flex gap-[60px]">
        {/* NAVLINKS PARENT */}
        <div
          className={`text-lg text-white gap-10 ${
            isHamburger
              ? "fixed top-0 right-0 h-screen flex flex-col bg-[#043873] px-10 py-20 w-52"
              : "xl:flex hidden "
          }`}
        >
          <div className="flex items-center gap-[10px]">
            <Link href={""}>Products</Link>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 1L5 5L9.5 1"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex items-center gap-[10px]">
            <Link href={""}>Solutions</Link>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 1L5 5L9.5 1"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex items-center gap-[10px]">
            <Link href={""}>Resources</Link>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 1L5 5L9.5 1"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex items-center gap-[10px]">
            <Link href={""}>Pricing</Link>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 1L5 5L9.5 1"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div
          className={` items-center gap-6 ${
            isHamburger ? "fixed top-96 space-y-5 right-4" : "md:flex hidden"
          }`}
        >
          <button className="bg-[#FFE492] w-[126px] h-[50px] rounded-lg font-medium text-lg">
            Login
          </button>
          <button className="flex items-center justify-center gap-2 sm:gap-[10px] rounded-lg bg-[#4F9CF9] text-white sm:w-[227px] h-[50px] font-medium px-2 sm:px-0 sm:text-lg">
            Try Whitepace free{" "}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6H11"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 1L11 6L6 11"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* HAMBURGER */}
      <div className="md:hidden z-20">
        <button
          className="flex flex-col justify-between w-6 h-[18px] focus:outline-none"
          onClick={hamburHandler}
        >
          <span
            className={`block h-[3px] w-full bg-white transition-transform duration-300 ease-in-out ${
              isHamburger ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-full bg-white transition-opacity duration-300 ease-in-out ${
              isHamburger ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-full bg-white transition-transform duration-300 ease-in-out ${
              isHamburger ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
