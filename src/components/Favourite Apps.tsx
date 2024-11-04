import Image from "next/image";
import React from "react";

function FavouriteApps() {
  return (
    <section className="py-[100px] lg:px-[110px] px-[32px] bg-[#043873] bg-[url('/Images/herobg.png')] bg-center bg-cover">
      <div className="xl:flex items-center justify-between gap-[100px] md:space-y-10 space-y-20">
        {/* LEFT */}
        <Image
          src={"/Images/Apps.png"}
          alt="Favourite Apps"
          width={582}
          height={470}
        />
        {/* RIGHT */}
        <div className="lg:w-[798px] md:h-[468px] md:block flex flex-col items-center text-white md:text-left text-center space-y-8">
          <h1 className="font-bold text-[34px] sm:text-[54px] md:text-6xl sm:leading-[87.14px]">
            Work with Your Favorite Apps Using whitepace
          </h1>
          <p className="font-normal text-lg leading-[30px]">
            Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your
            project success.
          </p>
          <button className="flex items-center justify-center gap-[10px] rounded-lg bg-[#4F9CF9] text-white w-[194px] h-[63px] font-medium text-lg">
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
      </div>
    </section>
  );
}

export default FavouriteApps;
