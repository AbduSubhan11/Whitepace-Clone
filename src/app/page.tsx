import CustomiseYourNeed from "@/components/Customise Your Need";
import FavouriteApps from "@/components/Favourite Apps";
import OurClients from "@/components/Our Clients";
import OurSponsors from "@/components/Our Sponsors";
import Pricing from "@/components/Pricing";
import ProjectManagement from "@/components/Project Management";
import SecureData from "@/components/Secure Data";
import TryWhitepace from "@/components/Try Whitepace";
import UseExtension from "@/components/Use Extension";
import WorkEveryWhere from "@/components/Work EveryWhere";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-[#043873] bg-[url('/Images/herobg.png')] bg-center bg-cover flex justify-center py-[80px] lg:px-[110px] px-[32px]">
        <div className="xl:flex items-center xl:space-y-0 space-y-8">
          {/* LEFT */}
          <div className="text-white space-y-10 md:block flex flex-col justify-center items-center md:text-left text-center">
            <h2 className="font-bold md:text-[64px] text-[36px] md:leading-[77.45px] leading-[43.57px]">
              Get More Done with whitepace
            </h2>
            <p className="text-lg leading-[30px]">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
            <button className="flex items-center justify-center gap-[10px] rounded-lg bg-[#4F9CF9] text-white w-[219px] h-[63px] font-medium text-lg">
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

          {/* RIGHT */}
          <div className="">
            <Image
              src={"/Images/hero right.webp"}
              alt="Hero Image"
              width={824}
              height={549}
              className="w-[824px] sm:h-[549px] bg-[#C4DEFD]"
            />
          </div>
        </div>
      </section>
      <ProjectManagement />
      <UseExtension />
      <CustomiseYourNeed />
      <Pricing />
      <WorkEveryWhere />
      <SecureData />
      <OurSponsors />
      <FavouriteApps />
      <OurClients/>
      <TryWhitepace />
    </>
  );
}
