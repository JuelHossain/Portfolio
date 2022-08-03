import { Divider, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import Loading from "../../../Components/Loading";
import useAdmin from "../../../Hooks/useAdmin";
import useProjects from "../../../Hooks/useProjects";
import AdminButtons from "../Admin/AdminButtons";
import { TextContainer } from "../lib/Containers";
import {
  About,
  Git,
  LiveSite,
  Name,
  ServerGit,
  Title,
} from "../lib/ProjectDetails";

const ProjectDetails = ({ id }) => {
  const {
    project: { name, title, about, git, serverGit, liveSite } = {},
    projectLoading,
  } = useProjects(id);
  const { status } = useAdmin();

  return (
    <TextContainer>
      {projectLoading && <Loading />}
      <VStack className="items-start gap-1">
        <Name name={name} />
        <Title title={title} />
        <About about={about} />
      </VStack>
      <Divider />
      <HStack className="">
        <Git git={git} />
        {serverGit && <ServerGit serverGit={serverGit} />}
        <LiveSite liveSite={liveSite} />
      </HStack>
      <HStack className="absolute right-5 top-5">
        {status && <AdminButtons id={id} />}
      </HStack>
    </TextContainer>
  );
};

export default ProjectDetails;
