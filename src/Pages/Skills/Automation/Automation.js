import React from "react";
import { Heading, VStack } from "@chakra-ui/react";

import Basics from "./Child/Basics";

const Automation = () => {
  return (
    <div id='automation'>
      <Heading size={"md"} className="my-6">
        Automation Skills .
      </Heading>
      <VStack>
        <Basics />
      </VStack>
    </div>
  );
};

export default Automation;
