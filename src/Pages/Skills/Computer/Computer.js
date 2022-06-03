import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import Basics from "./Child/Basics";

const Computer = () => {
  return (
    <div id='computer'>
      <Heading size={"md"} className="my-6">
        Basic Computer Skills.
      </Heading>
      <VStack>
        <Basics />
      </VStack>
    </div>
  );
};

export default Computer;
