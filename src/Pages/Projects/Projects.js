import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import useProjects from "./../../Hooks/useProjects";
import CreateProject from "./Create/CreateProject";
import ProjectsCard from "./ProjectsCard";
const Projects = ({ home, size }) => {
  const { projects } = useProjects();
  return (
    <Container maxW={"container.lg"} className="my-6">
      <Heading size={"md"} className="text-center mt-12 mb-2">
        Projects I have done.
      </Heading>
      <hr className="mb-6 mx-40 border-yellow-400" />
      <Stack spacing="10">
        <CreateProject />
        {projects.slice(0, size).map((project, index) => {
          const {
            screenshot,
            name,
            title,
            about,
            git,
            serverGit,
            liveSite,
            _id,
          } = project ?? {};
          return (
            <ProjectsCard
              key={index}
              screen={screenshot}
              name={name}
              title={title}
              about={about}
              git={git}
              server={serverGit}
              live={liveSite}
              id={_id}
            />
          );
        })}
      </Stack>
      {home && (
        <Text
          fontSize={"sm"}
          className="rounded py-3 text-center my-3 bg-yellow-400 dark:bg-red-500"
        >
          Please Visit the Project sections to .
          <Link className="underline" to="/projects">
            See More &rarr;{" "}
          </Link>
        </Text>
      )}
    </Container>
  );
};

export default Projects;
