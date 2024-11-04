import Image from "next/image";
import React from "react";

function SecureData() {
  return (
    <section className="py-[140px] lg:px-[110px] px-[32px]  ">
      <div className="xl:flex items-center md:space-y-0 space-y-20">
        {/* LEFT */}
        <div className="lg:w-[800px] md:h-[324px] md:block flex flex-col items-center space-y-10 md:space-y-[60px] md:text-left text-center relative">
          <h1 className="font-bold text-[34px] sm:text-[54px] md:text-6xl sm:leading-[87.14px] relative z-20">
            100% your data
          </h1>
          <Image
            src="/Images/section heading line.png"
            alt="section heading line"
            className="absolute w-[250px] sm:w-[380px] top-1 sm:left-48 left-20 "
            width={380}
            height={30}
          />
          <p className="font-normal text-[16px] leading-[30px]">
            The app is open source and your notes are saved to an open format,
            so you'll always have access to them. Uses End-To-End Encryption
            (E2EE) to secure your notes and ensure no-one but yourself can
            access them.
          </p>
          <button className="flex items-center justify-center gap-[10px] rounded-lg bg-[#4F9CF9] text-white w-[197px] h-[63px] font-medium text-lg">
            Read more
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
        <div>
          <Image
            src={"/Images/Secure Data.png"}
            alt="Secure Data Image"
            width={681}
            height={381.13}
            className="md:w-[681px] sm:h-[381px] h-72"
          />
        </div>
      </div>
    </section>
  );
}

export default SecureData;
