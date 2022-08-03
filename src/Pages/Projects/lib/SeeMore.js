import { Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SeeMore = () => {
  return (
    <Text
      fontSize={"sm"}
      className="rounded py-3 text-center my-3 bg-yellow-400 dark:bg-red-500"
    >
      Please Visit the Project sections to .
      <Link className="underline" to="/projects">
        See More &rarr;{" "}
      </Link>
    </Text>
  );
};

export default SeeMore;
