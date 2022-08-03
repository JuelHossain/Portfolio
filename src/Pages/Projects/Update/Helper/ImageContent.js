import { Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Loading from "../../../../Components/Loading";
import UploadScreenshot from "../../lib/UploadScreenshot";
import useProjects from "../../../../Hooks/useProjects";
import { ImageContainer } from "../../lib/Containers";
const ImageContent = ({ id, register, watch, create }) => {
  const { project: { screenshot } = {}, projectLoading } = useProjects(id);
  const [preview, setPreview] = useState("");
  const image = watch("screenshot")?.[0];
  useEffect(() => {
    if (image) {
      const previewURL = URL.createObjectURL(image);
      setPreview(previewURL);
    }
  }, [watch, image]);
  return (
    <ImageContainer>
      <Image
        alt="screenshot"
        className="object-top w-full "
        src={preview || screenshot}
      />
      <UploadScreenshot register={register} />
      {projectLoading && !create && <Loading />}
    </ImageContainer>
  );
};

export default ImageContent;
