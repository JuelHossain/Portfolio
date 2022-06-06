import { HStack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import {AiFillHome}from 'react-icons/ai'
import { CgEditUnmask } from "react-icons/cg";
import { AiFillProject } from "react-icons/ai";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { GrContact } from "react-icons/gr";
const Nav = ({ small }) => {
  const pages = [
    {
      name: "Home",
      link: "/",
      icon: <AiFillHome />,
    },
    {
      name: "Skills",
      link: "/skills#development",
      icon: <CgEditUnmask />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <AiFillProject />,
    },
    {
      name: "About",
      link: "/about",
      icon: <BsFillExclamationSquareFill className="text-sm"/>,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <GrContact className="text-sm"/>,
    },
  ];
  if (small) {
    return (
      <HStack display={["flex", "flex", "none"]}>
        {pages.map((page, index) => (
          <NavLink
            key={index}
            to={page.link}
            className={({ isActive }) =>
              isActive
                ? "bg-yellow-400 shadow-md font-bold px-3 py-1 dark:text-zinc-900  flex flex-col items-center sm:flex-row sm:gap-2"
                : "hover:bg-yellow-400 shadow hover:shadow-md font-bold px-3 py-1 dark:text-zinc-50 dark:hover:text-zinc-900 dark:bg-gray-700 dark:shadow-gray-700 flex flex-col items-center sm:flex-row sm:gap-2"
            }
          >
            {page.icon}
            <p className="text-[8px] sm:text-sm">{page.name}</p>
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
                ? "bg-yellow-400 shadow-md font-bold px-3 py-1 dark:text-zinc-900 "
                : "hover:bg-yellow-400 shadow hover:shadow-md font-bold px-3 py-1 dark:text-zinc-50 dark:hover:text-zinc-900 dark:bg-gray-700 dark:shadow-gray-700 dark:hover:bg-yellow-400"
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
