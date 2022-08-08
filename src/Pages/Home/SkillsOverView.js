import { Container, SimpleGrid } from "@chakra-ui/react";
import { FaKeyboard } from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiWebdriverio,
} from "react-icons/si";
import PageTitle from "../../Components/PageTitle";
import VisitMore from "../../Components/VisitMore";
import SkillsCard from "./SkillsCard";

const SkillsOverView = () => {
  return (
    <Container maxW={"container.lg"} className="my-5 sm:my-10">
      <PageTitle>Skills Overview</PageTitle>

      <SimpleGrid columns={[1, 2, 3, 4]} spacing="4">
        <SkillsCard
          bg={"bg-[#589636] hover:bg-lime-700"}
          title="MongoDb"
          text={"The Most Popular NoSQL Database"}
          icon={<SiMongodb />}
        />
        <SkillsCard
          bg={"bg-green-700 hover:bg-green-600"}
          title="Express Js"
          text={"Most Popular Node js Framework"}
          icon={<SiExpress />}
        />
        <SkillsCard
          bg={"bg-[#61DBFB] hover:bg-cyan-400"}
          title="React Js"
          text={"The Most Popular Javascript Library"}
          icon={<SiReact />}
        />
        <SkillsCard
          bg={"bg-[#339933] hover:bg-[#336633]"}
          title="Node Js"
          text={"The Most Popular Javascript Library"}
          icon={<SiNodedotjs />}
        />
        <SkillsCard
          bg={"bg-sky-500 hover:bg-sky-400"}
          title="Tailwind Css"
          text={"The Most Popular Css Framework."}
          icon={<SiTailwindcss />}
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
          bg={"bg-violet-600 hover:bg-violet-800"}
          title="80+ WPM"
          text={"Professional Typing Speed."}
          icon={<FaKeyboard />}
        />
      </SimpleGrid>
      <VisitMore link={"/skills#root"} section="Skills" />
    </Container>
  );
};

export default SkillsOverView;
