import { Box, Divider } from "@chakra-ui/react";
import React from "react";
import Loading from "../../../../Components/Loading";
import useProject from "../../../../Hooks/useProject";

import { TextContainer } from "../../lib/Containers";
import {
  UpdateAbout,
  UpdateGit,
  UpdateLiveSite,
  UpdateName,
  UpdateServerGit,
  UpdateTitle,
} from "../lib/UpdateInputs";

const TextContent = ({ id, register }) => {
  const {
    project: { name, title, about, git, serverGit, liveSite } = {},
    projectLoading,
  } = useProject(id);

  if (projectLoading) {
    return (
      <TextContainer>
        <Loading />
      </TextContainer>
    );
  }
  return (
    <TextContainer>
      <Box>
        <UpdateName value={name} register={register} />
        <UpdateTitle value={title} register={register} />
        <UpdateAbout value={about} register={register} />
      </Box>
      <Divider />
      <Box>
        <UpdateGit value={git} register={register} />
        <UpdateServerGit value={serverGit} register={register} />
        <UpdateLiveSite value={liveSite} register={register} />
      </Box>
    </TextContainer>
  );
};

export default TextContent;
