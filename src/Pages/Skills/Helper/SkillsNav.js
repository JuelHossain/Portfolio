import { Center, Link, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HiDesktopComputer } from "react-icons/hi";
import { MdDeveloperMode, MdOutlineDesignServices } from "react-icons/md";
import { TbSettingsAutomation } from "react-icons/tb";
import { useLocation } from "react-router-dom";

const SkillsNav = () => {
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
      icon: <HiDesktopComputer className="md:hidden text-2xl" />,
    },
  ];
  return (
    <Center
      className={
        "gap-2 p-2 shadow bg-zinc-50 dark:bg-zinc-900  border-indigo-400 sticky top-10 z-10  "
      }
    >
      {pages.map((page) => (
        <Link
          key={Math.random()}
          href={page.link}
          className={
            page.matcher
              ? "bg-indigo-600 text-zinc-50 shadow font-bold px-3 py-1 dark:shadow-gray-700 "
              : "hover:bg-indigo-600 hover:text-zinc-50 shadow hover:shadow-md font-bold px-3 py-1 dark:shadow-gray-700 "
          }
        >
          <Text className="hidden md:block">{page.name}</Text>
          {page.icon}
        </Link>
      ))}
    </Center>
  );
};

export default SkillsNav;
