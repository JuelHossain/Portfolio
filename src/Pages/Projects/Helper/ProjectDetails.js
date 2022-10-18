import {
  Divider,
  HStack,
  Skeleton,
  SkeletonText,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import useAdmin from "../../../Hooks/useAdmin";
import useProject from "../../../Hooks/useProject";
import AdminButtons from "../Admin/AdminButtons";
import { TextContainer } from "../Helper/lib/Containers";

import {
  About,
  Git,
  LiveSite,
  Name,
  ServerGit,
  Title,
} from "../Helper/lib/ProjectDetails";

const ProjectDetails = ({ id }) => {
  const {
    project: { name, title, about, git, serverGit, liveSite } = {},
    projectLoading,
  } = useProject(id);
  const { status } = useAdmin();
  if (projectLoading) {
    return (
      <TextContainer>
        <VStack className="items-start gap-1">
          <Skeleton className="w-60 h-8" />
          <Skeleton className="w-full h-8" />
          <SkeletonText className="w-full" noOfLines={8} />
        </VStack>
        <Divider />
        <HStack>
          <Skeleton className="w-8 h-8" />
          <Skeleton className="w-20 h-8" />
          <Skeleton className="w-20 h-8" />
        </HStack>
      </TextContainer>
    );
  }
  return (
    <TextContainer>
      <VStack className="items-start gap-1">
        <Name name={name} />
        <Title title={title} />
        <About about={about} />
      </VStack>
      <Divider />
      <HStack>
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
