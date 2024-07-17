"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../Animation/ui";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center  w-full">
      <TextRevealCard
        text=" Blogs" 
        revealText="Blogs "
        className='text-md'
      >
        <TextRevealCardTitle>
      
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
