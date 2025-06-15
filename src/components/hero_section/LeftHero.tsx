"use client";
import React from "react";
import { GlowingEffect } from "../ui/glowing-effect";
import { IconAppWindow } from "@tabler/icons-react";
import ProfilePic from "../../../assets/profile_pic.jpeg";
import Image from "next/image";
import PlatformLogo from "./PlatformLogo";

export function LeftHero() {
  return (
    <div className="w-[100%]">
        <div className="flex flex-col justify-around">
          <Image
            src={ProfilePic}
            alt="suthakar"
            height={400}
            width={400}
            className="object-contain rounded-[22px]"
          />

          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            suthakaranburaj03@gmail.com
          </p>
          <p>Navi Mumbai, India</p>
          <PlatformLogo/>
        </div>
    </div>
  );
}
