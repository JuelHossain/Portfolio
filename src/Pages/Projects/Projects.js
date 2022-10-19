import { Container, Stack } from "@chakra-ui/react";
import React from "react";
import Loading from "../../Components/Loading";
import PageTitle from "../../Components/PageTitle";
import Section from "../../Components/Section";
import VisitMore from "../../Components/VisitMore";
import useAdmin from "../../Hooks/useAdmin";
import useProjects from "./../../Hooks/useProjects";
import CreateButton from "./Create/lib/CreateButton";
import ProjectsCard from "./ProjectsCard";
const Projects = ({ home, size }) => {
  const { projects, projectsLoading } = useProjects();
  const { status } = useAdmin();

  if (projectsLoading) {
    return (
      <Container maxW={"container.lg"} className="w-screen h-screen relative">
        <Loading size={"xl"} />
      </Container>
    );
  }
  return (
    <Section>
      <PageTitle>Projects I have done.</PageTitle>
      {status && !home && <CreateButton />}
      <Stack spacing="10">
        {projects.slice(0, size).map((project) => (
          <ProjectsCard key={Math.random()} id={project._id} />
        ))}
      </Stack>
      {home && <VisitMore section={"Project"} link="/projects" />}
    </Section>
  );
};

export default Projects;
