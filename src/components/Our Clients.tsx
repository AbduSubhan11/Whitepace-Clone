import Image from "next/image";
import React from "react";

function OurClients() {
  return (
    <section className="py-[100px] lg:px-[110px] px-[32px] space-y-20 relative">
      <h1 className="text-center text-[34px] sm:text-[54px] md:text-6xl font-bold mb-12 ">
        What Our Clients Say
      </h1>
      <Image
        src="/Images/section heading line.png"
        alt="section heading line"
        className="absolute sm:top-10 top-12 w-[200px] sm:w-[330px] left-[180px] sm:left-[300px] md:left-[400px] lg:left-[500px] xl:left-[850px] -z-20"
        width={328}
        height={42}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {/* CARD 1 */}
        <div className="max-w-md py-[60px] px-[20px] sm:px-[40px] space-y-10 rounded-lg shadow-lg bg-white">
          <div className="space-y-5 pb-10 border-b border-gray-400">
            <Image
              src="/Images/Card Quote 1.png"
              alt="card 1 Quote"
              width={86}
              height={62}
            />
            <p className="font-normal text-lg">
              Whitepace is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <Image
              src="/Images/Client 1.png"
              alt="Client Image"
              width={95}
              height={95}
            />
            <div>
              <p className="font-bold text-xl">Oberon Shaw, MCH</p>
              <p className="text-base text-gray-600">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="max-w-md py-[60px] px-[20px] sm:px-[40px] space-y-10 rounded-lg shadow-lg bg-[#4F9CF9]">
          <div className="space-y-5 pb-10 border-b border-gray-400">
            <Image
              src="/Images/Card Quote 2&3.png"
              alt="card 2 Quote"
              width={86}
              height={62}
            />
            <p className="font-normal text-lg">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <Image
              src="/Images/Client 2.png"
              alt="Client Image"
              width={95}
              height={95}
            />
            <div>
              <p className="font-bold text-xl">Oberon Shaw, MCH</p>
              <p className="text-base text-gray-600">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="max-w-md py-[60px] px-[20px] sm:px-[40px] space-y-10 rounded-lg shadow-lg bg-[#4F9CF9]">
          <div className="space-y-5 pb-10 border-b border-gray-400">
            <Image
              src="/Images/Card Quote 2&3.png"
              alt="card 3 Quote"
              width={86}
              height={62}
            />
            <p className="font-normal text-lg">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <Image
              src="/Images/Client 3.png"
              alt="Client Image"
              width={95}
              height={95}
            />
            <div>
              <p className="font-bold text-xl">Oberon Shaw, MCH</p>
              <p className="text-base text-gray-600">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurClients;
