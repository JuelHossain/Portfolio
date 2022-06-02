import { HStack } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({small}) => {
    const pages = ["Home", "Skills", "Projects", "About", "Contact"];
    if (small) {
        return (
          <HStack display={["flex", "flex", "none"]}>
            {pages.map((page) => (
              <NavLink
                to={`/${page}`}
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellow-300 shadow-md font-bold px-3 py-1 "
                    : "hover:bg-yellow-300 shadow hover:shadow-md font-bold px-3 py-1 "
                }
              >
                {page}
              </NavLink>
            ))}
          </HStack>
        );
    }else{ return (
      <HStack display={["none", "none", "flex"]}>
        {pages.map((page) => (
          <NavLink
            to={`/${page}`}
            className={({ isActive }) =>
              isActive
                ? "bg-yellow-300 shadow-md font-bold px-3 py-1 "
                : "hover:bg-yellow-300 shadow hover:shadow-md font-bold px-3 py-1 "
            }
          >
            {page}
          </NavLink>
        ))}
      </HStack>
    );}
   
};

export default Nav;