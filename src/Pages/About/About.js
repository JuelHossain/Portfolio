import { Container } from "@chakra-ui/react";
import React from "react";
import useAbout from "../../Hooks/useAbout";
import Head from "./Helper/Head";
import { Courses, Educations, Experiences } from "./InfoSection";
const About = () => {
  const { educations, courses, experiences } = useAbout();
  return (
    <Container maxW={"container.lg"}>
      <Head />
      <Courses info={courses} />
      <Experiences info={experiences} />
      <Educations info={educations} />
    </Container>
  );
};

export default About;
