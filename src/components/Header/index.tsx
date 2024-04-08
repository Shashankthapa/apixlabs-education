import React, { useState } from "react";
import { Img, Text } from "./..";
import { Link } from "react-router-dom";
// import AccordiaHeadHighSchool from "components/AccordianHeadHighSchool";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [activeState, setActiveState] = useState("");

  return (
    <header {...props}>
      <div className="flex flex-row md:flex-col justify-between w-full mx-auto md:gap-10 md:px-5 max-w-7xl">
        <Link to="/">
          <Img
            src="images/img_logo.svg"
            alt="logo_one"
            className="h-[30px] cursor-pointer"
          />
        </Link>
        <div className="flex flex-row md:flex-col justify-start items-center w-[58%] md:w-full gap-5 md:gap-5">
          <Text as="p" className="!text-gray-900 !font-medium cursor-pointer">
            <Link to="/eduvishop">Shop</Link>
          </Text>
          <Link to="/noaccess">
            <div className="flex flex-row md:flex-col sm:flex-col md:gap-0 relative justify-start md:justify-center items-center w-[22%] md:w-full gap-0.5">
              <Text
                as="p"
                className="!text-gray-900 text-right !font-medium cursor-pointer"
              >
                For Kindergarten
              </Text>
              <Img
                src="images/img_arrow_down.svg"
                alt="arrowdown_one"
                className="h-[24px] w-[24px] cursor-pointer"
                onClick={() => {
                  if (activeState == "") {
                    setActiveState("ForKindergarten");
                  } else {
                    setActiveState("");
                  }
                }}
              />

              {activeState == "ForKindergarten" && (
                <div className="flex flex-col items-center w-[78%] py-2 absolute md:relative md:top-0 top-8 gap-1 bg-gray-200">
                  <Link to="#">Option1</Link>
                  <div>Option2</div>
                  <div>Option3</div>
                </div>
              )}
            </div>
          </Link>
          <div className="flex flex-row relative md:flex-col justify-start md:justify-center items-center w-[21%] md:w-full gap-0.5 py-[3px]">
            <Text
              as="p"
              className="!text-gray-900 text-right !font-medium cursor-pointer"
            >
              <Link to="/noaccess">For HighSchool</Link>
            </Text>
            <Img
              src="images/img_arrow_down.svg"
              alt="arrowdown_one"
              className="h-[24px] w-[24px] cursor-pointer"
              onClick={() => {
                if (activeState == "") {
                  setActiveState("ForSchool");
                } else {
                  setActiveState("");
                }
              }}
            />

            {activeState == "ForSchool" && (
              <div className="flex flex-col items-center w-[78%] py-2 absolute md:relative md:top-0 top-8 gap-1 bg-gray-200">
                <Link to="#">Option1</Link>
                <div>Option2</div>
                <div>Option3</div>
              </div>
            )}
            {/* <AccordiaHeadHighSchool /> */}
          </div>
          <div className="flex flex-row md:flex-col relative justify-start md:justify-center items-center w-[16%] md:w-full gap-0.5 py-[3px]">
            <Text
              as="p"
              className="!text-gray-900 text-right !font-medium cursor-pointer"
            >
              <Link to="/noaccess">For College</Link>
            </Text>
            <Img
              src="images/img_arrow_down.svg"
              alt="arrowdown_five"
              className="h-[24px] w-[24px] cursor-pointer"
              onClick={() => {
                if (activeState == "") {
                  setActiveState("ForCollege");
                } else {
                  setActiveState("");
                }
              }}
            />

            {activeState == "ForCollege" && (
              <div className="flex flex-col items-center w-[78%] py-2 absolute md:relative md:top-0 top-8 gap-1 bg-gray-200">
                <Link to="#">Option1</Link>
                <div>Option2</div>
                <div>Option3</div>
              </div>
            )}
          </div>
          <div className="flex flex-row md:flex-col relative justify-start md:justify-center items-center w-[13%] md:w-full gap-0.5 py-[3px]">
            <Text
              as="p"
              className="!text-gray-900 text-right !font-medium cursor-pointer"
            >
              <Link to="/eduvicourses">Courses</Link>
            </Text>
            <Img
              src="images/img_arrow_down.svg"
              alt="arrowdown_seven"
              className="h-[24px] w-[24px] cursor-pointer"
              onClick={() => {
                if (activeState == "") {
                  setActiveState("Courses");
                } else {
                  setActiveState("");
                }
              }}
            />
            {activeState == "Courses" && (
              <div className="flex flex-col items-center w-[78%] py-2 absolute md:relative md:top-0 top-8 gap-1 bg-gray-200">
                <Link to="#">Option1</Link>
                <div>Option2</div>
                <div>Option3</div>
              </div>
            )}
          </div>
          <Text as="p" className="!text-gray-900 !font-medium">
            <Link to="/allmentors">Mentors</Link>
          </Text>
        </div>
        <div className="flex flex-row justify-between w-[21%] md:w-full">
          <div className="flex flex-row justify-start items-center gap-2.5">
            <Text as="p" className="!text-gray-900 text-right !font-medium">
              <Link to="/cart">Cart (0)</Link>
            </Text>
            <Img
              src="images/img_shopping_bag_24.svg"
              alt="shoppingbagtwen"
              className="h-[30px] w-[30px] cursor-pointer"
            />
          </div>
          <div className="flex flex-row justify-start items-center pl-[3px] gap-2.5">
            <Text
              as="p"
              className="!text-gray-900 text-right !font-medium cursor-pointer"
            >
              <Link to="/noaccess">My Account</Link>
            </Text>
            <Img
              src="images/img_profile_24_outline.svg"
              alt="profiletwentyfo"
              className="h-[30px] w-[30px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
