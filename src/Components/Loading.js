import { Spinner } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Spinner
      className="absolute top-1/2 left-1/2"
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  );
};

export default Loading;
