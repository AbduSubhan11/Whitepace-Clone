import Image from "next/image";
import React from "react";

function WorkEveryWhere() {
  return (
    <section className="sm:py-[140px] py-20 lg:px-[110px] px-[32px] bg-[#043873] relative">
      <Image
        src={"/Images/Project Management Bg.png"}
        alt="Work EveryWHere Image"
        width={500.74}
        height={691.34}
        className="absolute left-0 top-0 -rotate-90 sm:block hidden"
      />
      <div className=" space-y-64 sm:space-y-60 md:space-y-52 lg:space-y-32 xl:space-y-10 text-white flex flex-col md:items-center justify-center ">
        <div className="md:text-center space-y-5 xl:w-[1064px] h-[171px] relative">
          <h1 className="font-bold text-[34px] sm:text-[54px] md:text-6xl sm:leading-[87.14px] relative z-20">
            Your work, everywhere you are
          </h1>
          <Image
            src={"/Images/Work EveryWhere heading line.png"}
            alt="section heading line"
            width={314.03}
            height={23.96}
            className="absolute w-[150px] md:w-[250px] lg:w-[300px] sm:left-[200px] md:left-[500px] lg:left-[600px] xl:left-[750px] sm:top-8 top-28 "
          />
          <p className="font-light text-lg leading-[30px] md:px-32">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
        </div>
        <button className="flex items-center justify-center gap-[10px] rounded-lg bg-[#4F9CF9] text-white w-[195px] h-[63px] font-medium text-lg">
          Try Taskey
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
    </section>
  );
}

export default WorkEveryWhere;
