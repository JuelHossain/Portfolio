import { Container, SimpleGrid } from "@chakra-ui/react";
import { FaKeyboard } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiWebdriverio,
} from "react-icons/si";
import PageTitle from "../../Components/PageTitle";
import VisitMore from "../../Components/VisitMore";
import SkillsCard from "./SkillsCard";

const SkillsOverView = () => {
  const skills = [
    {
      bg: "bg-[#589636] hover:bg-lime-700",
      title: "MongoDb",
      text: "The Most Popular NoSQL Database",
      icon: <SiMongodb />,
    },
    {
      bg: "bg-[#61DBFB] hover:bg-cyan-400",
      title: "React Js",
      text: "The Most Popular Javascript Library",
      icon: <SiReact />,
    },
    {
      bg: "bg-green-700 hover:bg-green-600",
      title: "Express Js",
      text: "Most Popular Node js Framework",
      icon: <SiExpress />,
    },
    {
      bg: "bg-[#339933] hover:bg-[#336633]",
      title: "Node Js",
      text: "The Most Popular Javascript Library",
      icon: <SiNodedotjs />,
    },
    {
      bg: "bg-sky-500 hover:bg-sky-400",
      title: "Tailwind Css",
      text: "The Most Popular Css Framework.",
      icon: <SiTailwindcss />,
    },
    {
      bg: "bg-purple-700 hover:bg-purple-800",
      title: "Redux",
      text: "Most Popular State Management Tool",
      icon: <SiRedux />,
    },
    {
      bg: "bg-orange-600 hover:bg-orange-500",
      title: "Web Driver IO",
      text: "Most Popular Javascript Automation Framework",
      icon: <SiWebdriverio />,
    },
    {
      bg: "bg-blue-600 hover:bg-blue-700",
      title: "80+ WPM",
      text: "Professional Typing Speed.",
      icon: <FaKeyboard />,
    },
  ];
  const skillsCards = skills.map((skill) => {
    return <SkillsCard skill={skill} />;
  });
  return (
    <Container maxW={"container.lg"} className="my-5 sm:my-10">
      <PageTitle>Skills Overview</PageTitle>

      <SimpleGrid columns={[1, 2, 3, 4]} spacing="4">
        {skillsCards}
      </SimpleGrid>
      <VisitMore link={"/skills#root"} section="Skills" />
    </Container>
  );
};

export default SkillsOverView;
