import { Spinner } from "@chakra-ui/react";
import React from "react";

const Loading = ({ ...props }) => {
  return (
    <Spinner
      {...props}
      className="absolute top-0 left-0 right-0 bottom-0 m-auto"
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
    />
  );
};

export default Loading;
