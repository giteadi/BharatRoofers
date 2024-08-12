"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../Animation/ui";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center w-full mt-12 md:mt-16 lg:mt-20">
      <TextRevealCard
        text="Blogs" 
        revealText="Blogs "
        className="text-base md:text-lg lg:text-xl"
      >
        <TextRevealCardTitle className="text-sm md:text-base lg:text-lg">
          {/* Add title text here */}
        </TextRevealCardTitle>
        <TextRevealCardDescription className="text-xs md:text-sm lg:text-base">
          {/* Add description text here */}
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
