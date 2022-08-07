import { Box, Image, Skeleton } from "@chakra-ui/react";
import React from "react";
import useProject from "../../../Hooks/useProject";

const Screenshot = ({ id }) => {
  const { project: { screenshot } = {}, projectLoading } = useProject(id);

  return (
    <Box className=" rounded-l md:h-full hover:overflow-auto overflow-hidden md:flex-1 md:basis-1/2 h-60 sm:h-80 relative">
      {projectLoading ? (
        <Skeleton className="w-full h-full" />
      ) : (
        <Image
          alt="screenshot"
          className="object-top w-full "
          src={screenshot}
        />
      )}
    </Box>
  );
};

export default Screenshot;
