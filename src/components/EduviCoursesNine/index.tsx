import React from "react";
import { Button, Text, Heading, Img } from "./..";

interface Props {
  className?: string;
  standardone?: string;
  standard1isa?: string;
  classDetails?: string;
}

export default function EduviCoursesNine({
  standardone = "Standard Nine",
  standard1isa = "Standard 5 Learning Resources. Learning Resources ensure that the school has the...",
  classDetails = "Class Details",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-center w-full gap-[25px] p-[15px] bg-white-A700 rounded-[15px]">
        <div className="flex flex-col items-center justify-start w-full mt-[15px] gap-[19px] md:px-5 max-w-[260px]">
          <Img src="images/img_group_red_500_50x50.svg" alt="image" className="h-[50px] w-[50px]" />
          <div className="flex flex-col items-center justify-start w-full gap-[9px]">
            <Heading size="lg" as="h1" className="text-center">
              {standardone}
            </Heading>
            <Text as="p" className="text-center !leading-[30px]">
              {standard1isa}
            </Text>
          </div>
        </div>
        <Button
          size="md"
          variant="outline"
          shape="round"
          className="mb-[15px] sm:px-5 font-medium min-w-[159px] sm:min-w-full"
        >
          {classDetails}
        </Button>
      </div>
    </div>
  );
}
