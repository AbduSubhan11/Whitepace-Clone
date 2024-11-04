import Image from "next/image";
import React from "react";
import PriceCard from "./Price Card";

function Pricing() {
  return (
    <section className="md:py-[140px] py-20 lg:px-[110px] px-[32px] space-y-20 ">
      {/* HEADING */}
      <div className="md:space-y-5 space-y-10 relative">
        <h1 className="font-bold text-[34px] sm:text-[54px] md:text-6xl sm:leading-[87.14px] text-center relative z-20">
          Choose Your Plan
        </h1>
        <Image
          src="/Images/section heading line.png"
          alt="section heading line"
          className="absolute w-[200px] sm:w-[380px] left-[30vw] sm:left-[230px] md:left-[350px] lg:left-[400px] xl:left-[600px] sm:top-5 top-0 "
          width={380}
          height={30}
        />
        <p className="font-normal text-lg text-center leading-[30px]">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>

      {/* PRICING CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* CARD 1 */}
        <PriceCard
          cardHeading="Free"
          cardPara="Capture ideas and find them quickly"
          bulletColor="#212529"
          cardColor="#ffffff"
          cardBtnColor="#FFFFFF"
          cardTextColor="#000"
          cardPrice={0}
          cardHeight="634px"
          cardWidth="100%"
        />
        {/* CARD 2 */}
        <PriceCard
          cardHeading="Personal"
          cardPara="Keep home and family on track"
          bulletColor="#FFE492"
          cardColor="#043873"
          cardBtnColor="#4F9CF9"
          cardTextColor="#fff"
          cardPrice={11.9}
          cardHeight="634px"
          cardWidth="100%"
        />
        {/* CARD 3 */}
        <PriceCard
          cardHeading="Organization"
          cardPara="Capture ideas and find them quickly"
          bulletColor="#212529"
          cardColor="#ffffff"
          cardBtnColor="#FFFFFF"
          cardTextColor="#000"
          cardPrice={49.99}
          cardHeight="634px"
          cardWidth="100%"
        />
      </div>
    </section>
  );
}

export default Pricing;
