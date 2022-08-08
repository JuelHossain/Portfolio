import { Container } from "@chakra-ui/react";
import React from "react";
import Loading from "../../Components/Loading";
import useSkills from "../../Hooks/useSkills";

import {
  Automation,
  Computer,
  Design,
  Development,
} from "./Helper/SkillsSection";
const Skills = () => {
  const { development, automation, computer, design } = useSkills();
  const loading = development[1] || automation[1] || computer[1] || design[1];
  if (loading) {
    return (
      <Container maxW={"container.lg"} className={"w-screen h-screen relative"}>
        <Loading size={"xl"} />
      </Container>
    );
  }
  return (
    <Container
      maxW={"container.lg"}
      className="my-5 sm:my-10 scroll-smooth relative flex flex-col gap-10 "
    >
      {/* <SkillsNav /> */}
      <Development skills={development} />
      <Automation skills={automation} />
      <Design skills={design} />
      <Computer skills={computer} />
    </Container>
  );
};

export default Skills;
