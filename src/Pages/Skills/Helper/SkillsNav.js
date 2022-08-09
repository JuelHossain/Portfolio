import { Center } from "@chakra-ui/react";
import React, { useState } from "react";
import { HiDesktopComputer } from "react-icons/hi";
import { MdDeveloperMode, MdOutlineDesignServices } from "react-icons/md";
import { TbSettingsAutomation } from "react-icons/tb";
import { Link } from "react-scroll";
const SkillsNav = () => {
  const pages = [
    {
      name: "Development",
      link: "development",
      icon: <MdDeveloperMode />,
      default: true,
    },
    {
      name: "Automation",
      link: "automation",
      icon: <TbSettingsAutomation />,
    },
    {
      name: "Design",
      link: "design",
      icon: <MdOutlineDesignServices />,
    },
    {
      name: "Computer",
      link: "computer",
      icon: <HiDesktopComputer />,
    },
  ];
  const [active, setActive] = useState("");
  return (
    <Center
      className={
        "gap-2  shadow border bg-white dark:bg-gray-800 dark:border-gray-700 h-auto sm:w-1 sm:h-[50vh] sm:top-0 sm:bottom-0 my-auto sticky top-14 sm:fixed z-[999] sm:flex-col sm:justify-between p-2 rounded"
      }
    >
      {pages.map((page) => (
        <Link
          spy
          hashSpy
          smooth
          duration={500}
          offset={page.default ? -200 : -180}
          key={Math.random()}
          to={page.link}
          onSetActive={(a) => {
            setActive(a);
          }}
          className={
            page.link === active
              ? "bg-violet-600 text-gray-200 dark:shadow-gray-700 hover:bg-yellow-500 hover:text-gray-700 dark:hover:bg-red-500 shadow hover:shadow-md font-bold p-2 rounded-lg sm:rounded-full text-2xl sm:text-xl flex-1 sm:flex-initial items-center flex justify-center"
              : "bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-200 dark:shadow-gray-700 hover:bg-violet-600 hover:text-gray-200 dark:hover:bg-violet-600 shadow hover:shadow-md font-bold p-2 rounded-lg sm:rounded-full text-2xl sm:text-xl flex-1 sm:flex-initial items-center flex justify-center"
          }
        >
          {page.icon}
        </Link>
      ))}
    </Center>
  );
};

export default SkillsNav;
