import { Container } from "@chakra-ui/react";
import React from "react";

const Section = ({ children, cls }) => {
  return (
    <Container
      maxW="container.lg"
          className={`my-2 py-5 md:my-5 md:py-10 rounded   border
      border-gray-200/50  dark:border-gray-700/20 
      dark:bg-gray-800/20 bg-white/20 ${cls} `}
    >
      {children}
    </Container>
  );
};

export default Section;
