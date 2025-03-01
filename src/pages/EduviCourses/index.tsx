import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Text, SelectBox, Input, Heading } from "../../components";
import EduviCoursesDetailsMaincard from "../../components/EduviCoursesDetailsMaincard";
import EduviCoursesDetailsMaincard1 from "../../components/EduviCoursesDetailsMaincard1";
import EduviCoursesEight from "../../components/EduviCoursesEight";
import EduviCoursesEleven from "../../components/EduviCoursesEleven";
import EduviCoursesFive from "../../components/EduviCoursesFive";
import EduviCoursesFooter from "../../components/EduviCoursesFooter";
import EduviCoursesFour from "../../components/EduviCoursesFour";
import EduviCoursesNine from "../../components/EduviCoursesNine";
import EduviCoursesOne from "../../components/EduviCoursesOne";
import EduviCoursesSeven from "../../components/EduviCoursesSeven";
import EduviCoursesSix from "../../components/EduviCoursesSix";
import EduviCoursesSubscribe from "../../components/EduviCoursesSubscribe";
import EduviCoursesTen from "../../components/EduviCoursesTen";
import EduviCoursesThree from "../../components/EduviCoursesThree";
import EduviCoursesTwo from "../../components/EduviCoursesTwo";
import Header from "../../components/Header";
import Footer from "components/Footer";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function EduviCoursesPage() {
  const [searchBarValue7, setSearchBarValue7] = React.useState("");
  const [activeSection, setActiveSection] = useState("");
  const [hoveredButton, setHoveredButton] = useState("");

  const handleColorEnter = (buttonValue: string) => {
    setHoveredButton(buttonValue);
  };

  const handleColorLeave = () => {
    setHoveredButton("");
  };

  const handleSectionClick = (sectionName: string) => {
    setActiveSection(sectionName);
  };

  return (
    <>
      <Helmet>
        <title>education</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-100">
        <div className="flex flex-col items-center justify-start w-full gap-12">
          <Header className="flex flex-row justify-center items-center w-full md:h-auto p-[22px] sm:p-5 bg-gray-100" />
          <div className="flex flex-col items-start justify-start w-full gap-[5px] p-5 md:px-5 bg-yellow-100 max-w-7xl rounded-[20px]">
            <Text
              as="p"
              className="mt-[5px] ml-2.5 md:ml-0 !text-black-900_02 !font-medium"
            >
              Home | Courses
            </Text>
            <div className="flex flex-row md:flex-col justify-between items-center w-[99%] md:w-full ml-2.5 gap-[436px] md:gap-10 md:ml-0">
              <Heading size="3xl" as="h1" className="w-[33%] !font-semibold">
                <>
                  Educatsy Courses
                  <br />
                  For All Standards
                </>
              </Heading>
              <div className="h-[210px] w-[32%] md:w-full relative">
                <div className="h-[14px] w-full bottom-[1%] right-0 left-0 m-auto bg-black-900_cc backdrop-opacity-[0.5] blur-[81.00px] absolute rounded-[50%]" />
                <Img
                  src="images/img_image_210x374.png"
                  alt="image_one"
                  className="justify-center h-[210px] w-[97%] sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                />
                <div className="flex flex-row justify-start w-[32%] left-[7%] top-0 m-auto absolute">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col w-full gap-px">
                      <div className="flex flex-row justify-center items-center w-full">
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="ml-[7px] !text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="ml-2 !text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="ml-[5px] !text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="ml-[7px] !text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="ml-[7px] !text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="ml-[7px] !text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="ml-[7px] !text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="ml-[7px] !text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="ml-[7px] !text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between items-center w-full">
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between w-full">
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between w-full">
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between w-full">
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between w-full">
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between w-full">
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-[47px]">
          <div className="flex flex-row md:flex-col justify-start w-full gap-5 md:px-5 max-w-7xl">
            <Button
              color={
                hoveredButton == "Allcourses" ? "orange_200_01" : "white_A700"
              }
              onMouseEnter={() => handleColorEnter("Allcourses")}
              onMouseLeave={() => handleColorLeave()}
              onClick={() => {
                setActiveSection("Allcourses");
              }}
              className="sm:px-5 font-medium min-w-[142px] rounded-[10px]"
            >
              All Courses
            </Button>
            <Button
              color={
                hoveredButton == "Kindergarten" ? "orange_200_01" : "white_A700"
              }
              onMouseEnter={() => handleColorEnter("Kindergarten")}
              onMouseLeave={() => handleColorLeave()}
              onClick={() => {
                setActiveSection("Kindergarten");
              }}
              className="font-medium min-w-[142px] rounded-[10px]"
            >
              Kindergarten
            </Button>
            <Button
              color={
                hoveredButton == "Highschool" ? "orange_200_01" : "white_A700"
              }
              onMouseEnter={() => handleColorEnter("Highschool")}
              onMouseLeave={() => handleColorLeave()}
              onClick={() => {
                setActiveSection("Highschool");
              }}
              className="sm:px-5 font-medium min-w-[142px] rounded-[10px]"
            >
              High School
            </Button>
            <Button
              color={
                hoveredButton == "College" ? "orange_200_01" : "white_A700"
              }
              onMouseEnter={() => handleColorEnter("College")}
              onMouseLeave={() => handleColorLeave()}
              onClick={() => {
                setActiveSection("College");
              }}
              className="sm:px-5 font-medium min-w-[142px] rounded-[10px]"
            >
              College
            </Button>
            <Button
              color={
                hoveredButton == "Computer" ? "orange_200_01" : "white_A700"
              }
              onMouseEnter={() => handleColorEnter("Computer")}
              onMouseLeave={() => handleColorLeave()}
              onClick={() => {
                setActiveSection("Computer");
              }}
              className="sm:px-5 font-medium min-w-[142px] rounded-[10px]"
            >
              Computer
            </Button>
            <Button
              color={
                hoveredButton == "Science" ? "orange_200_01" : "white_A700"
              }
              onMouseEnter={() => handleColorEnter("Science")}
              onMouseLeave={() => handleColorLeave()}
              onClick={() => {
                setActiveSection("Science");
              }}
              className="sm:px-5 font-medium min-w-[142px] rounded-[10px]"
            >
              Science
            </Button>
            <Button
              color={
                hoveredButton == "Engineering" ? "orange_200_01" : "white_A700"
              }
              onMouseEnter={() => handleColorEnter("Engineering")}
              onMouseLeave={() => handleColorLeave()}
              onClick={() => {
                setActiveSection("Engineering");
              }}
              className="sm:px-5 font-medium min-w-[142px] rounded-[10px]"
            >
              Engineering
            </Button>
            <Button
              color={
                hoveredButton == "Morecourses" ? "orange_200_01" : "white_A700"
              }
              onMouseEnter={() => handleColorEnter("Morecourses")}
              onMouseLeave={() => handleColorLeave()}
              onClick={() => {
                setActiveSection("Morecourses");
              }}
              className="!text-deep_orange-400 font-medium min-w-[142px] rounded-[10px]"
            >
              More Courses
            </Button>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full gap-[23px] md:px-5 max-w-7xl">
              <Heading size="xl" as="h2">
                Standard Classes
              </Heading>
              <div className="flex flex-row justify-start w-full">
                {activeSection == "Allcourses" && (
                  <div className="w-full gap-10 grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                    <EduviCoursesOne className="flex flex-col items-center justify-start w-full" />
                    <EduviCoursesTwo className="flex flex-col items-center justify-start w-full" />
                    <EduviCoursesThree className="flex flex-col items-center justify-start w-full" />
                    <EduviCoursesFour className="flex flex-col items-center justify-start w-full" />
                    <EduviCoursesFive className="flex flex-col items-center justify-start w-full" />
                    <EduviCoursesSix className="flex flex-col items-center justify-start w-full" />
                    <EduviCoursesSeven className="flex flex-col items-center justify-start w-full" />
                    <EduviCoursesEight className="flex flex-col items-center justify-start w-full" />
                    <EduviCoursesNine className="flex flex-col items-center justify-start w-full" />
                    <EduviCoursesTen className="flex flex-col items-center justify-start w-full" />
                    <EduviCoursesEleven className="flex flex-col items-center justify-start w-full" />
                  </div>
                )}
                {activeSection == "Kindergarten" && (
                  <div className="w-full gap-10 grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                    <EduviCoursesOne className="flex flex-col items-center justify-start w-full" />
                    <EduviCoursesTwo className="flex flex-col items-center justify-start w-full" />
                  </div>
                )}
                {activeSection == "Highschool" && (
                  <div className="w-full gap-10 grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                    <EduviCoursesThree className="flex flex-col items-center justify-start w-full" />
                  </div>
                )}
                {activeSection == "College" && (
                  <div className="w-full gap-10 grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                    <EduviCoursesFive className="flex flex-col items-center justify-start w-full" />
                  </div>
                )}
                {activeSection == "Computer" && (
                  <div className="w-full gap-10 grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                    <EduviCoursesFour className="flex flex-col items-center justify-start w-full" />
                  </div>
                )}
                {activeSection == "Science" && (
                  <div className="w-full gap-10 grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                    <EduviCoursesSix className="flex flex-col items-center justify-start w-full" />
                    <EduviCoursesSeven className="flex flex-col items-center justify-start w-full" />{" "}
                  </div>
                )}
                {activeSection == "Engineering" && (
                  <div className="w-full gap-10 grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                    <EduviCoursesEight className="flex flex-col items-center justify-start w-full" />
                    <EduviCoursesNine className="flex flex-col items-center justify-start w-full" />
                  </div>
                )}
                {activeSection == "Morecourses" && (
                  <div className="w-full gap-10 grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                    <EduviCoursesTen className="flex flex-col items-center justify-start w-full" />
                    <EduviCoursesEleven className="flex flex-col items-center justify-start w-full" />{" "}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[50px] md:px-5 max-w-7xl">
            <div className="flex flex-col items-center justify-start w-full gap-10">
              <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-2.5">
                <Heading size="xl" as="h2">
                  Other Courses For High School
                </Heading>
                <div className="flex flex-row md:flex-col justify-start sm:w-full gap-[42px] md:gap-5">
                  <Input
                    color="white_A700"
                    name="search"
                    placeholder="Search Class, Course, Book Name"
                    value={searchBarValue7}
                    onChange={(e: string) => setSearchBarValue7(e)}
                    suffix={
                      searchBarValue7?.length > 0 ? (
                        <CloseSVG
                          onClick={() => setSearchBarValue7("")}
                          height={24}
                          width={24}
                          fillColor="#ffffffff"
                        />
                      ) : (
                        <Img
                          src="images/img_search.svg"
                          alt="search"
                          className="cursor-pointer"
                        />
                      )
                    }
                    className="w-[66%] md:w-full gap-[35px] !text-gray-700_99 rounded-tr-[10px] rounded-br-[10px] font-medium"
                  />
                  <SelectBox
                    size="xs"
                    shape="round"
                    indicator={
                      <Img
                        src="images/img_arrowdown_red_300_01.svg"
                        alt="arrow_down"
                      />
                    }
                    name="sortbylatest"
                    placeholder="Sort by: Latest"
                    options={dropDownOptions}
                    className="w-[32%] md:w-full gap-px font-medium"
                  />
                </div>
              </div>
              <div className="justify-center w-full gap-10 grid-cols-2 md:grid-cols-1 md:gap-5 grid">
                <EduviCoursesDetailsMaincard1
                  imageOne="images/img_image_103x160.png"
                  className="flex flex-row sm:flex-col justify-start w-full gap-6 p-[15px] bg-white-A700 cursor-pointer rounded-[10px] hover:shadow-xs"
                />
                <EduviCoursesDetailsMaincard1 className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white-A700 cursor-pointer rounded-[10px] hover:shadow-xs" />
                <EduviCoursesDetailsMaincard1
                  imageOne="images/img_image_2.png"
                  className="flex flex-row sm:flex-col justify-start w-full gap-6 p-[15px] bg-white-A700 cursor-pointer rounded-[10px] hover:shadow-xs"
                />
                <EduviCoursesDetailsMaincard1
                  imageOne="images/img_image_3.png"
                  className="flex flex-row sm:flex-col justify-start w-full gap-6 p-[15px] bg-white-A700 cursor-pointer rounded-[10px] hover:shadow-xs"
                />
                <EduviCoursesDetailsMaincard className="flex flex-row sm:flex-col justify-start w-full gap-6 p-[15px] bg-white-A700 shadow-xs cursor-pointer rounded-[10px] hover:shadow-xs" />
                <EduviCoursesDetailsMaincard1 className="flex flex-row sm:flex-col justify-start w-full gap-6 p-[15px] bg-white-A700 cursor-pointer rounded-[10px] hover:shadow-xs" />
                <EduviCoursesDetailsMaincard1
                  imageOne="images/img_image_2.png"
                  className="flex flex-row sm:flex-col justify-start w-full gap-6 p-[15px] bg-white-A700 cursor-pointer rounded-[10px] hover:shadow-xs"
                />
                <EduviCoursesDetailsMaincard1
                  imageOne="images/img_image_3.png"
                  className="flex flex-row sm:flex-col justify-start w-full gap-6 p-[15px] bg-white-A700 cursor-pointer rounded-[10px] hover:shadow-xs"
                />
                <EduviCoursesDetailsMaincard1
                  imageOne="images/img_image_103x160.png"
                  className="flex flex-row sm:flex-col justify-start w-full gap-6 p-[15px] bg-white-A700 cursor-pointer rounded-[10px] hover:shadow-xs"
                />
                <EduviCoursesDetailsMaincard1 className="flex flex-row sm:flex-col justify-start w-full gap-6 p-[15px] bg-white-A700 cursor-pointer rounded-[10px] hover:shadow-xs" />
              </div>
            </div>
            <div className="flex flex-row justify-start items-center w-full pl-[497px] pr-14 gap-[19px] md:px-5">
              <Button
                color="white_A700"
                size="lg"
                shape="round"
                className="w-[44px] !rounded-md"
              >
                <Img src="images/img_arrow_left.svg" />
              </Button>
              <Text as="p" className="!text-gray-900 !font-medium">
                Page
              </Text>
              <Button
                color="white_A700"
                size="sm"
                className="!text-gray-700_01 font-medium min-w-[42px] rounded-lg"
              >
                5
              </Button>
              <Text as="p" className="!text-gray-900 !font-medium">
                of 80
              </Text>
              <Button size="lg" shape="round" className="w-[44px] !rounded-md">
                <Img src="images/img_arrow_right.svg" />
              </Button>
            </div>
          </div>
        </div>
        <Footer className="flex flex-col items-center justify-center w-full" />
        {/* <footer className="flex flex-col items-center justify-center w-full">
          <EduviCoursesSubscribe className="flex flex-row justify-center w-full" />
          <EduviCoursesFooter className="flex flex-row justify-center w-full mt-[516px] ml-[-1440px] px-14 py-20 md:ml-0 md:p-5 bg-gray-100" />
        </footer> */}
      </div>
    </>
  );
}
