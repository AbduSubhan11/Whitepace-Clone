import Image from "next/image";
import React from "react";

function UseExtension() {
  return (
    <section className="py-[100px] lg:px-[110px] px-[32px] bg-[#043873]">
      <div className="xl:flex items-center gap-10 md:space-y-0 space-y-10">
        {/* LEFT */}
        <div className="md:w-[697px] md:h-[294px] md:block flex flex-col items-center  space-y-9 text-white relative">
          <h1 className="font-bold text-[34px] sm:text-[54px] md:text-6xl sm:leading-[87.14px] leading-[87.14px] relative z-20">
            Use as Extension
          </h1>
          <Image
            src={"/Images/section heading line.png"}
            alt="Section Heading Line"
            width={450}
            height={150}
            className="absolute w-[200px] sm:w-[450px] md:w-[600px] lg:w-[650px] left-20 sm:left-32 md:left-36 top-[300px] md:top-full -translate-y-72"
          />
          <p className="font-normal text-lg leaidng-[30px] md:text-left text-center">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>
          <button className="flex items-center justify-center gap-[10px] rounded-lg bg-[#4F9CF9] text-white w-[171px] h-[63px] font-medium text-lg">
            Let&apos;s Go
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

        {/* RIGHT */}
          <Image
            src={"/Images/extension right.webp"}
            alt="Extension Image"
            width={686}
            height={479}
            className="bg-[#C4DEFD] w-[686px] h-auto"
          />
      </div>
    </section>
  );
}

export default UseExtension;
