import { Container, Stack } from "@chakra-ui/react";
import React from "react";
import Loading from "../../Components/Loading";
import PageTitle from "../../Components/PageTitle";
import useAdmin from "../../Hooks/useAdmin";
import useProjects from "./../../Hooks/useProjects";
import CreateButton from "./Create/lib/CreateButton";
import SeeMore from "./lib/SeeMore";
import ProjectsCard from "./ProjectsCard";
const Projects = ({ home, size }) => {
  const { projects, projectsLoading } = useProjects();
  const { status } = useAdmin();

  if (projectsLoading) {
    return <Loading />;
  }
  return (
    <Container maxW={"container.lg"} className="my-6 relative">
      <PageTitle>Projects I have done.</PageTitle>
      {status && <CreateButton />}
      <Stack spacing="10">
        {projects.slice(0, size).map((project) => (
          <ProjectsCard key={Math.random()} id={project._id} />
        ))}
      </Stack>
      {home && <SeeMore />}
    </Container>
  );
};

export default Projects;
