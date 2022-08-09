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
  const [active, setActive] = useState({
    development: false,
    automation: false,
    design: false,
    computer: false,
  });
  return (
    <Center
      className={
        "gap-2  shadow border bg-white dark:bg-gray-800 dark:border-gray-700 h-auto sm:w-1 sm:h-[50vh] sm:top-0 sm:bottom-0 my-auto sticky top-14 sm:fixed z-[999] sm:flex-col sm:justify-between p-2"
      }
    >
      {pages.map((page) => (
        <Link
          spy
          hashSpy
          smooth
          duration={500}
          offset={page.default ? -200 : -150}
          key={Math.random()}
          to={page.link}
          activeClass={
            "bg-violet-500 text-gray-200 dark:bg-red-500 dark:text-gray-700 dark:text-gray-200 shadow font-bold dark:shadow-gray-700 "
          }
          onSetActive={(e) => {
            setActive((p) =>{ return {...p, e}});
            console.log(active);
          }}
          onSetInactive={(e) => {
            setActive(false);
          }}
          className={
            active
              ? ""
              : "sm:hover:bg-violet-600 sm:hover:text-gray-200 sm:dark:hover:bg-red-500 shadow hover:shadow-md font-bold dark:shadow-gray-700 dark:bg-gray-700 dark:text-gray-200 p-2 rounded-lg sm:rounded-full text-2xl sm:text-xl flex-1 sm:flex-initial items-center flex justify-center bg-white text-gray-700 "
          }
        >
          {page.icon}
        </Link>
      ))}
    </Center>
  );
};

export default SkillsNav;
