import { Container } from "@chakra-ui/react";
import React from "react";
import Loading from "../../Components/Loading";
import useAbout from "../../Hooks/useAbout";
import Head from "./Helper/Head";
import { Courses, Educations, Experiences } from "./InfoSection";
const About = () => {
  const { educations, courses, experiences } = useAbout();
  console.log(courses);
  const loading = educations[1] || courses[1] || experiences[1];
  if (loading) {
    return (
      <Container maxW={"container.lg"} className={"relative w-screen h-screen"}>
        <Loading size="xl" />
      </Container>
    );
  }
  return (
    <Container
      maxW={"container.lg"}
      className="my-5 md:my-10 space-y-5 md:space-y-10 p-0 overflow-auto overflow-x-hidden"
    >
      <Head />
      <Courses info={courses} />
      <Experiences info={experiences} />
      <Educations info={educations} />
    </Container>
  );
};

export default About;
