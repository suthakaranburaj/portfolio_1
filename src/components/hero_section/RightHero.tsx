import React from 'react'
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";
import { FlipWords } from '../ui/flip-words';
export function RightHero() {
  const roles = [
    "Software Engineer",
    "Full stack Developer",
    "Backend Developer",
  ]
  return (
    <div className="h-[100%] rounded-2xl w-full">
      <div className="flex justify-start items-center w-full">
        <p className="pr-2 pt-4 text-[4rem] font-bold">Hi I'm</p>
        <TextRevealCard
          text="Suthakar Anburaj"
          revealText="Suthakar Anburaj"
        ></TextRevealCard>
      </div>
      <FlipWords className='text-[4rem] font-bold' words={roles} />
    </div>
  );
}