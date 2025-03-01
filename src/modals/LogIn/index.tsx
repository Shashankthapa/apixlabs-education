import React from "react";
import { Text, CheckBox, Button, Input, Img, Heading, Slider } from "../../components";
import SignUpInputfield from "../../components/SignUpInputfield";
import AliceCarousel, { EventObject } from "react-alice-carousel";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
  isOpen: boolean;
}

export default function LogIn({ isOpen, ...props }: Props) {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);

  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[1052px]">
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-center w-full px-14 py-[71px] md:p-5 bg-white-A700 rounded-[15px]">
          <div className="flex flex-row justify-center w-[97%]">
            <div className="flex flex-row justify-center w-full p-2">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
                  <div className="flex flex-col items-center justify-start w-[40%] md:w-full gap-[25px]">
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 3 } }}
                      disableDotsControls
                      activeIndex={sliderState}
                      onSlideChanged={(e: EventObject) => {
                        setSliderState(e?.item);
                      }}
                      ref={sliderRef}
                      className="w-full"
                      items={[...Array(9)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <Heading size="2xl" as="h1" className="mx-2.5 !text-black-900_02 !font-metropolis">
                            <>
                              Welcome to
                              <br />
                              Educatsy Online
                              <br />
                              Learning Platform
                            </>
                          </Heading>
                        </React.Fragment>
                      ))}
                    />
                    <div className="flex justify-center w-[36px] h-[10px] sm:w-full" />
                  </div>
                  <div className="h-[641px] w-px md:w-full md:h-px bg-gradient" />
                  <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                    <Button
                      color="white_A700"
                      leftIcon={<Img src="images/img_googleplus_1_1.svg" alt="google-plus (1) 1" />}
                      className="w-full gap-[23px] sm:px-5 !text-gray-700_01 border-gray-300 border border-solid rounded-[10px]"
                    >
                      Sign in with google
                    </Button>
                    <div className="flex flex-row justify-center items-center w-full mt-5 gap-[11px] p-[3px]">
                      <div className="h-px w-[6%] ml-[55px] md:ml-5 bg-gray-700_01" />
                      <a href="#" className="mt-[3px]">
                        <Text as="p" className="text-center">
                          Or sign in with your email
                        </Text>
                      </a>
                      <div className="h-px w-[6%] mr-[55px] md:mr-5 bg-gray-700_01" />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full mt-5 gap-5">
                      <SignUpInputfield className="flex flex-col items-start justify-start w-full pt-[5px] gap-[9px]" />
                      <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[9px]">
                        <Text as="p" className="!text-gray-900 !font-medium">
                          Password
                        </Text>
                        <Input
                          color="white_A700"
                          size="xs"
                          type="password"
                          name="password"
                          placeholder="*************"
                          prefix={
                            <Img
                              src="images/img_lockpad_locksafesecurityprotectedlock_alt_24_outline.svg"
                              alt="lock,pad lock,safe,security,protected,lock alt, / 24 / Outline"
                            />
                          }
                          suffix={<Img src="images/img_eye_1_1.svg" alt="eye (1) 1" />}
                          className="w-full sm:w-full gap-[15px] rounded-tr-[10px] rounded-br-[10px] border-gray-300 border border-solid"
                        />
                      </div>
                    </div>
                    <Button className="w-full mt-[30px] sm:px-5 font-medium rounded-[10px]">Sign In</Button>
                    <div className="flex flex-row justify-between items-center w-full mt-6 py-[3px]">
                      <CheckBox
                        shape="square"
                        name="keepmesignedin"
                        label="Keep me signed in"
                        id="keepmesignedin"
                        className="gap-2.5 text-gray-700_01 text-left"
                      />
                      <a href="#">
                        <Text as="p">Forgot Password?</Text>
                      </a>
                    </div>
                    <div className="flex flex-row justify-start w-[66%] md:w-full mt-6 gap-1 py-[3px]">
                      <a href="#" className="my-px">
                        <Text as="p" className="!font-medium">
                          Don’t have an account?
                        </Text>
                      </a>
                      <a href="#">
                        <Text as="p" className="!text-red-300_01 !font-medium">
                          Sign Up
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
