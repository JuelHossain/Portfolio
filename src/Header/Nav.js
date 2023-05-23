import { HStack } from "@chakra-ui/react";
import React from "react";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import {
  BsChatSquareDotsFill,
  BsFillExclamationSquareFill,
} from "react-icons/bs";
import { CgEditUnmask } from "react-icons/cg";
import { NavLink } from "react-router-dom";
const Nav = ({ small }) => {
  const pages = [
    {
      name: "Home",
      link: "/",
      icon: <AiFillHome className="text-lg" />,
    },
    {
      name: "Skills",
      link: "/skills",
      icon: <CgEditUnmask className="text-lg" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <AiFillProject className="text-lg" />,
    },
    /* {
      name: "About",
      link: "/about",
      icon: <BsFillExclamationSquareFill className="text-md" />,
    },*/
    {
      name: "Contact",
      link: "/contact",
      icon: <BsChatSquareDotsFill className="text-md " />,
    },
  ];
  if (small) {
    return (
      <HStack display={["flex", "flex", "none"]} className=" w-full">
        {pages.map((page, index) => (
          <NavLink
            key={index}
            to={page.link}
            className={({ isActive }) =>
              isActive
                ? "bg-yellow-400 shadow-md font-bold    flex flex-col items-center sm:flex-row sm:gap-2 flex-1 sm:items-center sm:justify-center dark:bg-red-500 dark:text-gray-200 py-2 gap-1"
                : "hover:bg-yellow-400 shadow hover:shadow-md font-bold  py-2 dark:text-gray-200 dark:bg-gray-700 dark:shadow-gray-700 flex flex-col items-center sm:flex-row sm:gap-2 flex-1 sm:items-center sm:justify-center dark:hover:bg-red-500  sm:text-md gap-1 "
            }
          >
            {page.icon}
            <p className="text-xs sm:text-sm">{page.name}</p>
          </NavLink>
        ))}
      </HStack>
    );
  } else {
    return (
      <HStack display={["none", "none", "flex"]}>
        {pages.map((page, index) => (
          <NavLink
            key={index}
            to={page.link}
            className={({ isActive }) =>
              isActive
                ? "bg-yellow-400 shadow-md font-bold px-3 py-1 dark:bg-red-500 dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-transparent"
                : "hover:bg-yellow-400 shadow hover:shadow-md font-bold px-3 py-1 dark:text-zinc-50  dark:bg-gray-700 dark:shadow-gray-700 dark:hover:bg-red-500 duration-300 "
            }
          >
            {page.name}
          </NavLink>
        ))}
      </HStack>
    );
  }
};

export default Nav;
