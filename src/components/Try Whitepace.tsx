import Image from "next/image";
import React from "react";

function TryWhitepace() {
  return (
    <section className="pt-[140px] pb-[32px] lg:px-[110px] px-[32px] bg-[#043873] flex justify-center ">
      <div className="xl:w-[608px] md:h-[533px] text-white flex flex-col xl:items-center gap-10">
        <h1 className="font-bold text-[34px] sm:text-[54px] md:text-6xl sm:leading-[87.14px] xl:text-center">Try Whitepace today</h1>
        <p className="font-normal sm:text-2xl text-lg leading-[32px] xl:text-center">Get started for free. Add your whole team as your needs grow.</p>
        <button className="flex items-center justify-center gap-[10px] rounded-lg bg-[#4F9CF9] text-white w-[197px] h-[63px] font-medium text-lg">
          Try Taskey free
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
        <p>On a big team? Contact sales</p>
        <Image
          src={"/Images/App-icon.png"}
          alt="App Icon"
          width={260}
          height={60}
          className="gap-96 sm:w-[260px] w-[185px] sm:h-[60px] h-[36px]"
        />
      </div>
    </section>
  );
}

export default TryWhitepace;
