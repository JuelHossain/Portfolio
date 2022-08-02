import { Box, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useProjects from "./../../../Hooks/useProjects";
import UploadScreenshot from "./UploadScreenshot";
const ImageContent = ({ id, register, watch }) => {
  const { project: { screenshot } = {} } = useProjects(id);
  const [preview, setPreview] = useState("");
  const image = watch("screenshot")?.[0];
  useEffect(() => {
    if (image) {
      const previewURL = URL.createObjectURL(image);
      setPreview(previewURL);
    }
  }, [watch, image]);
  return (
    <Box className=" rounded-l md:h-full overflow-hidden md:w-1/2 h-60 sm:h-80 relative">
      <Image
        alt="screenshot"
        className="object-top w-full "
        src={preview || screenshot}
      />
      <UploadScreenshot register={register} />
    </Box>
  );
};

export default ImageContent;
