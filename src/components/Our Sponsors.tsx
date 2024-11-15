import Image from "next/image";
import React from "react";

function OurSponsors() {
  return (
    <section className="py-[70px] lg:px-[110px] px-[32px] sm:space-y-32 space-y-20 relative">
      <h1 className="font-bold text-center text-[34px] sm:text-[54px] md:text-6xl sm:leading-[87.14px] relative z-20">
        Our sponsors
      </h1>
      <Image
        src="/Images/section heading line.png"
        alt="section heading line"
        className="absolute sm:top-0 top-8 w-[200px] sm:w-[330px] left-[100px] sm:left-[300px] md:left-[400px] lg:left-[500px] xl:left-[700px] "
        width={328}
        height={42}
      />
      <div className="flex lg:flex-row flex-col gap-20 items-center md:justify-between">
        <Image src={"/Images/Apple.png"} alt="Apple" width={40} height={68} />
        <Image
          src={"/Images/Microsoft.png"}
          alt="Microsoft"
          width={200}
          height={62}
        />
        <Image src={"/Images/Slack.png"} alt="Slack" width={150} height={71} />
        <Image
          src={"/Images/Google.png"}
          alt="Google"
          width={150}
          height={70}
        />
      </div>
    </section>
  );
}

export default OurSponsors;
