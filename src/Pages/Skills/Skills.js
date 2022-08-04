import { Container } from "@chakra-ui/react";
import React from "react";
import useSkills from "../../Hooks/useSkills";

import SkillsNav from "./Helper/SkillsNav";
import {
  Automation,
  Computer,
  Design,
  Development,
} from "./Helper/SkillsSection";
const Skills = () => {
  const { development, automation, computer, design } = useSkills();

  return (
    <Container maxW={"container.lg"} className="my-2 scroll-smooth relative ">
      <SkillsNav />
      <Development skills={development} />
      <Automation skills={automation} />
      <Design skills={design} />
      <Computer skills={computer} />
    </Container>
  );
};

export default Skills;
