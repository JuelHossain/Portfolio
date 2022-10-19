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
    <Section cls={home || "my-5 md:my-10"}>
      <PageTitle>Projects I have done.</PageTitle>
      {status && !home && <CreateButton />}
      <Stack spacing="10">
        {projects.slice(0, size).map((project) => (
          <ProjectsCard key={Math.random()} id={project._id} />
        ))}
      </Stack>
      {home ? (
        <VisitMore section={"Project"} link="/projects" />
      ) : (
        <VisitMore>
          Please Visit My github Repos
          <a
            target="_blank"
            href="https://github.com/JuelHossain?tab=repositories"
            className="underline "
            rel="noreferrer"
          >
            To See All of my projects&rarr;
          </a>
        </VisitMore>
      )}
    </Section>
  );
};

export default Projects;
