import React from "react";
import { Img } from "./..";
import AccordionMentor from "components/AccordianMentor";

interface Props {
  className?: string;
  bgOne?: string;
  kristinwatson?: string;
  foundermentor?: string;
}

export default function AllMentorsMaincard({
  bgOne = "images/img_bg_290x290.png",
  kristinwatson = "Kristin Watson",
  foundermentor = "Founder & Mentor",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start h-[290px] w-[290px]">
        <Img
          src={bgOne}
          alt="bg_one"
          className="w-[290px] md:h-auto object-cover rounded-[10px]"
        />
      </div>
      <div className="flex flex-col justify-start items-start w-full gap-6">
        <AccordionMentor kristinwatson = {kristinwatson} foundermentor = {foundermentor}/>
        {/* <Img src="images/img_arrow_down_black_900_02.svg" alt="arrowdown_nine" className="h-[24px] w-[24px]" /> */}
      </div>
    </div>
  );
}
