import Header from "components/Header";
import React from "react";

const DoesNotExist = () => {
  return (
    <>
      <Header className="flex justify-center items-center w-full md:h-auto p-[22px] sm:p-5 bg-gray-100" />
      <div>This page does not exist</div>
    </>
  );
};

export default DoesNotExist;
