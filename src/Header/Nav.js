import { HStack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ small }) => {
  const pages = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Skills',
      link: '/skills#development',
    },
    {
      name: 'Projects',
      link: '/projects',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Contact',
      link: '/contact',
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
                ? "bg-yellow-400 shadow-md font-bold px-3 py-1 dark:text-zinc-900 "
                : "hover:bg-yellow-400 shadow hover:shadow-md font-bold px-3 py-1 dark:text-zinc-50 dark:hover:text-zinc-900 dark:bg-gray-700 dark:shadow-gray-700"
            }
          >
            {page.name}
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
