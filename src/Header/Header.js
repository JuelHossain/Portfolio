import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { updateStatus } from "../Hooks/Helper/Admin";
import useAdmin from "./../Hooks/useAdmin";
import Nav from "./Nav";

const Header = () => {
  const { status, refetch } = useAdmin();
  const [dark, setDark] = useState(false);
  useEffect(() => {
    // Change the icons inside the button based on previous settings
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDark(true);
    } else {
      setDark(false);
    }
  }, [dark]);
  const themeChanger = () => {
    setDark((p) => !p);
    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  };
  return (
    <Box
      as="header"
      className="sticky top-0 z-40 bg-zinc-50 dark:bg-zinc-900 py-3 border-b dark:border-zinc-800 border-zinc-50 shadow"
    >
      <Container maxW={"container.lg"}>
        <Flex gap={4} justify="space-between">
          <Center>
            <Heading as="a" href="/" id="logo" size="lg" className=" truncate">
              Juel Hossain
            </Heading>
          </Center>
          <Nav />
          <HStack>
            <IconButton
              as={Link}
              isExternal
              href="https://github.com/juelhossain"
              size={"sm"}
              icon={<AiFillGithub />}
              className="hover:bg-yellow-400 shadow hover:shadow-md font-bold rounded-full dark:bg-gray-700 dark:text-white dark:hover:bg-red-500"
            ></IconButton>
            <IconButton
              as={Link}
              isExternal
              href="https://linkedin.com/in/juelhossainnn"
              size={"sm"}
              icon={<AiFillLinkedin />}
              className="hover:bg-yellow-400 shadow hover:shadow-md font-bold rounded-full dark:bg-gray-700 dark:text-white dark:hover:bg-red-500"
            ></IconButton>
            <IconButton
              onClick={themeChanger}
              size={"sm"}
              icon={dark ? <SunIcon /> : <MoonIcon />}
              className="hover:bg-yellow-400 shadow hover:shadow-md font-bold rounded-full dark:bg-gray-700 dark:text-white dark:hover:bg-red-500"
            ></IconButton>
            {status && (
              <IconButton
                onClick={async () => {
                  await updateStatus(false);
                  refetch();
                }}
                size={"sm"}
                icon={<FiLogOut />}
                className="hover:bg-yellow-400 shadow hover:shadow-md font-bold rounded-full dark:bg-gray-700 dark:text-white dark:hover:bg-red-500"
              ></IconButton>
            )}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
