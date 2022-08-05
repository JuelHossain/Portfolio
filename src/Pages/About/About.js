import { Container } from "@chakra-ui/react";
import React from "react";
import useAbout from "../../Hooks/useAbout";
import Education from "./Education";
import Head from "./Head";
const About = () => {
  const { educations, courses, experiences } = useAbout();
  console.log(educations);
  return (
    <Container maxW={"container.lg"}>
      <Head />
      <Education
        edu={courses[0]}
        name="Private Courses ."
        title="Here is some info about my programming journey. how i became a web dev you can have some idea from below. information. please do click on the name of the institutions to reach their website."
      />
      <Education
        edu={experiences[0]}
        name="Experiences ."
        title="Here is some info about my experiences. i have no experiences working in any company as a web dev . but i have some other experiences which you can see below."
      />
      <Education
        edu={educations[0]}
        name="Academic Carrier ."
        title="Here is some info about my Academic Carrier . from start to begin ."
      />
    </Container>
  );
};

export default About;
