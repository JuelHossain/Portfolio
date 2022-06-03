import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import Basics from "./Child/Basics";

const Design = () => {
  return (
    <div id="design">
      <Heading size={"md"} className="my-6">
        Graphics Design Skills
      </Heading>
      <VStack>
        <Basics />
      </VStack>
    </div>
  );
};

export default Design;
