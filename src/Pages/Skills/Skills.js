import { Box, Container, Link } from "@chakra-ui/react";
import React from "react";
import Loading from "../../Components/Loading";
import VisitMore from "../../Components/VisitMore";
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
      className="scroll-smooth relative my-5 sm:my-10 flex flex-col gap-10 "
    >
      <SkillsNav />
        <Development skills={development} />
        <Automation skills={automation} />
        <Design skills={design} />
        <Computer skills={computer} />
        <VisitMore>
          Want To Know ?
          <Link href="/about" className="underline">
            Where I Have Learned These Skills&rarr;
          </Link>
        </VisitMore>
    </Container>
  );
};

export default Skills;
