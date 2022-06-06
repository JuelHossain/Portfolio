import { Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

import SkillsCard from "./SkillsCard";

import {
  SiExpress,
  SiReact,
  SiWebdriverio,
  SiAdobeillustrator,
  SiTailwindcss,
} from "react-icons/si";

import { Link } from "react-router-dom";

const SkillsOverView = () => {
  return (
    <Container maxW={"container.lg"}>
      <Heading size={"md"} className="text-center mt-12 mb-2">
        What I Know ?
      </Heading>

      <hr className="mb-6 mx-60 border-yellow-400" />

      <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing="2">
        <SkillsCard
          bg={"bg-sky-400 hover:bg-sky-500"}
          title="React"
          text={"The Most Popular Javascript Library"}
          icon={<SiReact />}
        />
        <SkillsCard
          bg={"bg-green-700 hover:bg-green-600"}
          title="Express Js"
          text={"Most Popular Node js Framework"}
          icon={<SiExpress />}
        />
        <SkillsCard
          bg={"bg-orange-600 hover:bg-orange-500"}
          title="Web Driver IO"
          text={"Most Popular Javascript Automation Framework"}
          icon={<SiWebdriverio />}
        />
        <SkillsCard
          bg={"bg-amber-900 hover:bg-amber-800"}
          title="Illustrator"
          text={"Industry Standard Illustration Tool."}
          icon={<SiAdobeillustrator />}
        />
        <SkillsCard
          bg={"bg-sky-500 hover:bg-sky-400"}
          title="Tailwind Css"
          text={"The Most Popular Css Framework."}
          icon={<SiTailwindcss />}
        />
        {/* <SkillsCard
            bg={"bg-violet-600 hover:bg-rose-500"}
            title="Nitro Typing."
            text={"80+wpm Typing Speed."}
            icon={<TiMessageTyping />}
          /> */}
      </SimpleGrid>
      <Text
        fontSize={"sm"}
        className="rounded py-3 text-center my-3 bg-yellow-400 dark:bg-red-500"
      >
        Please Visit the skills sections to know .
        <Link className="underline" to="/skills#root">
          all the skills i have got &rarr;{" "}
        </Link>
      </Text>
    </Container>
  );
};

export default SkillsOverView;
