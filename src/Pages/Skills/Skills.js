import React from "react";
import { Container, Center } from "@chakra-ui/react";
import {  useLocation } from "react-router-dom";
import Development from "./Development";
import { useEffect } from "react";
import { useState } from "react";
import { MdOutlineDesignServices, } from "react-icons/md";
import Automation from "./Automation";
import Computer from "./Computer";
import { MdDeveloperMode} from 'react-icons/md'
import Design from "./Design";
import { TbSettingsAutomation } from "react-icons/tb";
import { HiDesktopComputer } from "react-icons/hi";
const Skills = () => {
  const [dev, setDev] = useState(false);
  const [automation, setAutomation] = useState(false);
  const [design, setDesign] = useState(false);
  const [computer, setComputer] = useState(false);
  const { hash } = useLocation();
  useEffect(() => {
    switch (hash) {
      case "#development":
        setDev(true);
        setAutomation(false);
        setDesign(false);
        setComputer(false);
        break;
      case "#automation":
        setDev(false);
        setAutomation(true);
        setDesign(false);
        setComputer(false);
        break;
      case "#design":
        setDev(false);
        setAutomation(false);
        setDesign(true);
        setComputer(false);
        break;
      case "#computer":
        setDev(false);
        setAutomation(false);
        setDesign(false);
        setComputer(true);
        break;
      default:
        break;
    }
  }, [hash]);
  const pages = [
    {
      name: "Development",
      link: "#development",
      matcher: dev,
      icon: <MdDeveloperMode className="md:hidden text-2xl " />,
    },
    {
      name: "Automation",
      link: "#automation",
      matcher: automation,
      icon: <TbSettingsAutomation className="md:hidden text-2xl" />,
    },
    {
      name: "Design",
      link: "#design",
      matcher: design,
      icon: <MdOutlineDesignServices className="md:hidden text-2xl" />,
    },
    {
      name: "Computer",
      link: "#computer",
      matcher: computer,
      icon:<HiDesktopComputer className="md:hidden text-2xl"/>
    },
  ];

  return (
    <Container maxW={"container.lg"} className="my-2 scroll-smooth relative ">
      <Center
        className={
          "gap-2 p-2 shadow bg-zinc-50 dark:bg-zinc-900  border-indigo-400 sticky top-10 z-10  "
        }
      >
        {pages.map((page, index) => (
          <a
            key={index}
            href={page.link}
            className={
              page.matcher
                ? "bg-indigo-600 text-zinc-50 shadow font-bold px-3 py-1 dark:shadow-gray-700 "
                : "hover:bg-indigo-600 hover:text-zinc-50 shadow hover:shadow-md font-bold px-3 py-1 dark:shadow-gray-700 "
            }
          >
            <p className="hidden md:block">{page.name}</p>
           {page.icon}
          </a>
        ))}
      </Center>
      <Development />
      <Automation />
      <Design />
      <Computer />
    </Container>
  );
};

export default Skills;
