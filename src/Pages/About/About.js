import { Container } from "@chakra-ui/react";
import React from "react";
import Loading from "../../Components/Loading";
import useAbout from "../../Hooks/useAbout";
import Head from "./Helper/Head";
import { Courses, Educations, Experiences } from "./InfoSection";
const About = () => {
  const { educations, courses, experiences } = useAbout();
  const loading = educations[1] || courses[1] || experiences[1];
  if (loading) {
    return (
      <Container maxW={"container.lg"} className={"relative w-screen h-screen"}>
        <Loading size="xl" />
      </Container>
    );
  }
  return (
    <Container maxW={"container.lg"} className="my-5 sm:my-10 space-y-10">
      <Head />
      <Courses info={courses} />
      <Experiences info={experiences} />
      <Educations info={educations} />
    </Container>
  );
};

export default About;
