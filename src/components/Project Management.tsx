import Image from "next/image";
import React from "react";

function ProjectManagement() {
  return (
    <section className="sm:py-10 sm:pb-24 pb-10 lg:px-[110px] px-[32px] space-y-24 relative">
      {/* BG IMAGE */}
      <Image
        src={"/Images/Project Management Bg.png"}
        alt="Project Management Background"
        width={400.84}
        height={345.55}
        className="absolute left-0 top-2 sm:top-20 w-[200px] sm:w-[400px]"
      />

      {/* PROJECT MANAGEMENT */}
      <div className="xl:flex items-center gap-[60px]">
        {/* LEFT */}
        <div className="md:block flex flex-col items-center space-y-5 md:space-y-[60px] lg:w-[672px] h-[411px] md:text-left text-center relative">
          <h1 className="font-bold text-[34px] sm:text-[54px] md:text-6xl sm:leading-[87.14px] relative z-20">
            Project Management
            <Image
              src={"/Images/section heading line.png"}
              alt="Underline"
              width={678.74}
              height={65.55}
              className="absolute sm:w-[678px] w-[200px] sm:left-1 left-20 top-full sm:-translate-y-10 -translate-y-5 -z-20"
            />
          </h1>
          <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 md:leading-8">
            Images, videos, PDFs, and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <button className="flex items-center justify-center gap-[10px] rounded-lg bg-[#4F9CF9] text-white w-[201px] h-[63px] font-medium text-lg">
            Get Started
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
            src={"/Images/project management right.png"}
            alt="Project Management Image"
            width={748}
            height={547}
            className="bg-[#C4DEFD] w-[748px] sm:h-[547px]"
          />
        </div>
      </div>

      {/* WORK TOGETHER */}
      <div
        className="flex xl:flex-row 
      flex-col xl:items-center gap-[100px] md:space-y-0 space-y-5 "
      >
        {/* LEFT */}
        <Image
          src={"/Images/Work Together Image.png"}
          alt="Work Together Image"
          width={500}
          height={661}
          className="w-[500px] sm:h-[470px]"
        />

        {/* RIGHT */}
        <div className="relative space-y-[40px] lg:w-[670px] sm:h-[294px] md:block flex flex-col items-center">
          <h1 className="font-bold text-[34px] sm:text-6xl leading-[87.14px] relative z-20">
            Work together
            <Image
              src={"/Images/section heading line.png"}
              alt="Underline"
              width={400.36}
              height={28.81}
              className="absolute sm:w-[350px] w-[200px] sm:left-40 left-16 sm:top-full top-20 -translate-y-8 -z-20"
            />
          </h1>
          <p className="font-normal  text-lg leading-[30px] md::text-left text-center">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>
          <button className="flex items-center justify-center gap-[10px] rounded-lg bg-[#4F9CF9] text-white w-[186px] h-[63px] font-medium text-lg">
            Get Started
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

export default ProjectManagement;
