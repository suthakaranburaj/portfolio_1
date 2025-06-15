"use client";
import React from "react";
import { GlowingEffect } from "../ui/glowing-effect";
import ProfilePic from "../../../assets/profile_pic.jpeg";
import Image from "next/image";
import PlatformLogo from "./PlatformLogo";

export function LeftHero() {
  return (
    // <div className="relative min-h-[30rem] rounded-2xl border p-2 md:rounded-3xl md:p-3">
    //   <GlowingEffect
    //     spread={40}
    //     glow={true}
    //     disabled={false}
    //     proximity={64}
    //     inactiveZone={0.01}
    //   />
    <div className="w-[380px] border-0.75 relative flex h-[560px] flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_10px_0px_#1ca0fb]">
      <div className="flex flex-col justify-around">
        <div className="flex justify-between">
          <p>Suthakar</p>
          <p>SDE</p>
        </div>
        <Image
          src={ProfilePic}
          alt="suthakar"
          height={400}
          width={400}
          className="rounded-[22px] object-contain"
          priority
        />

        <p className="mt-4 mb-2 text-base text-black sm:text-xl dark:text-neutral-200">
          suthakaranburaj03@gmail.com
        </p>
        <p>Navi Mumbai, India</p>
        <PlatformLogo />
      </div>
    </div>
    // </div>
  );
}
