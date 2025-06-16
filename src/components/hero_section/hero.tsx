import React from "react";
import Components from "../index";
import ProfilePic from "../../../assets/profile_pic.jpeg";
import Image from "next/image";
import PlatformLogo from "./PlatformLogo";
import { TextRevealCard } from "../ui/text-reveal-card";
import { FlipWords } from "../ui/flip-words";

export function hero() {
  const roles = [
    "Software Engineer",
    "Full stack Developer",
    "Backend Developer",
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen w-[100%] p-4 gap-8">
      {/* Profile Card - Top on mobile, Left on desktop */}
      <div className="w-full mt-10 mx-10 min-w-sm max-w-md rounded-2xl p-6 shadow-lg dark:shadow-[0px_0px_1px_0px_#1ca0fb]">
        <div className="flex justify-between mb-4">
          <p className="font-semibold">Suthakar</p>
          <p className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">SDE</p>
        </div>

        <div className="relative aspect-square w-4/5 mx-auto">
          <Image
            src={ProfilePic}
            alt="suthakar"
            fill
            className="rounded-2xl object-cover"
            priority
          />
        </div>

        <p className="mt-6 text-center text-neutral-600 dark:text-neutral-300">
          suthakaranburaj03@gmail.com
        </p>
        <p className="text-center mb-4">Navi Mumbai, India</p>

        <div className="flex justify-center">
          <PlatformLogo />
        </div>
      </div>

      {/* Text Content - Bottom on mobile, Right on desktop */}
      <div className="w-full mx-5 max-w-3xl text-center lg:text-left">
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex flex-wrap justify-center lg:justify-start items-end gap-2 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold">Hi I'm</h1>
            <TextRevealCard
              text="Suthakar Anburaj"
              revealText="Suthakar Anburaj"
              className="text-5xl md:text-5xl"
            />
          </div>

          <FlipWords
            words={roles}
            className="text-3xl md:text-4xl font-bold text-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
