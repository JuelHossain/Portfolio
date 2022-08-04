import { Heading } from "@chakra-ui/react";
import React from "react";

const PageTitle = ({ children }) => {
  return (
    <>
      <Heading size={"md"} className="text-center mt-12 mb-2 capitalize">
        {children}
      </Heading>
      <hr className="mb-6 mx-40 border-yellow-400" />
    </>
  );
};

export default PageTitle;
