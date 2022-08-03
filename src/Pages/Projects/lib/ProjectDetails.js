import { Button, Heading, IconButton, Text } from "@chakra-ui/react";
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
      as={"a"}
      href={git}
      target={"_blank"}
      icon={<AiFillGithub />}
      className="bg-white shadow hover:bg-stone-900 hover:text-white dark:bg-gray-700 dark:hover:bg-black "
    />
  );
}
export function ServerGit({ serverGit }) {
  return (
    <Button
      leftIcon={<AiFillGithub />}
      className="bg-white shadow  hover:bg-stone-900 dark:hover:bg-black  hover:text-white dark:bg-gray-700"
      as={"a"}
      href={serverGit}
    >
      Server
    </Button>
  );
}
export function LiveSite({ liveSite }) {
  return (
    <Button
      className="bg-white shadow dark:hover:bg-red-500 hover:bg-red-500 hover:text-white dark:bg-gray-700"
      as={"a"}
      href={liveSite}
    >
      Live Site
    </Button>
  );
}
