import Image from "next/image";
import React from "react";

function CustomiseYourNeed() {
  return (
    <section className="py-[140px] lg:px-[110px] px-[32px]">
      <div className="xl:flex items-center gap-[98px] lg:space-y-5 space-y-8">
        {/* LEFT */}
        <Image
          src={"/Images/customise left.png"}
          alt="Customise Your Need Image"
          width={714}
          height={532}
          className="bg-[#C4DEFD]"
        />

        {/* RIGHT */}
        <div className="md:w-[669px] h-[411px] md:block flex flex-col items-center md:text-left text-center space-y-10 relative">
          <h1 className="font-bold text-[34px] sm:text-[54px] md:text-6xl sm:leading-[87.14px] relative z-20">
            Customise it to your needs
          </h1>
          <Image
            src={"/Images/section heading line.png"}
            alt="section heading line"
            width={648}
            height={70}
            className="absolute w-[150px] sm:w-[300px] md:w-[400px] lg:w-[648px] left-26 sm:left-80 md:left-1 top-[430px] sm:top-full -translate-y-96"
          />
          <p className="font-normal text-lg leading-[30px]">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
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
      </div>
    </section>
  );
}

export default CustomiseYourNeed;
