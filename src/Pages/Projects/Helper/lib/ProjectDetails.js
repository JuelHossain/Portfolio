import { Button, Heading, IconButton, Link, Text } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

export function Name({ name }) {
  return <Heading size={"md"}> {name}</Heading>;
}
export function Title({ title }) {
  return <Heading size={"sm"}> {title}</Heading>;
}
export function About({ about }) {
  return (
    <Text className="md:h-36 hover:overflow-auto text-clip overflow-hidden">
      {about}
    </Text>
  );
}
export function Git({ git }) {
  return (
    <IconButton
      as={Link}
      isExternal
      href={git}
      icon={<AiFillGithub />}
      className="bg-white shadow hover:bg-stone-900 hover:text-white dark:bg-gray-700 dark:hover:bg-black "
    />
  );
}
export function ServerGit({ serverGit }) {
  return (
    <Button
      as={Link}
      isExternal
      href={serverGit}
      leftIcon={<AiFillGithub />}
      className="bg-white shadow  hover:bg-stone-900 dark:hover:bg-black  hover:text-white dark:bg-gray-700 hover:no-underline"
    >
      Server
    </Button>
  );
}
export function LiveSite({ liveSite }) {
  return (
    <Button
      as={Link}
      isExternal
      className="bg-white shadow dark:hover:bg-red-500 hover:bg-red-500 hover:text-white dark:bg-gray-700 hover:no-underline"
      href={liveSite}
    >
      Live Site
    </Button>
  );
}
