import { DownloadIcon } from "@chakra-ui/icons";
import {
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import ReactTyped from "react-typed";
import cv from "../../assets/full stack developer resume pro.pdf";
import me from "../../assets/me.png";
import MyButton from "../../Components/MyButton";
const Banner = () => {
  var titles = [
    "Web Developer",
    "Web Designer",
    "Graphic Designer",
    "Programmer",
    "Automation boy",
  ];

  return (
    <Container
      maxW="container.lg"
      className=" rounded   border border-zinc-200 dark:border-gray-700 dark:bg-gray-800 p-0 bg-white "
    >
      <Flex direction={["column-reverse", "column-reverse", "row-reverse"]}>
        <Center className="flex-1 w-full  pb-4 sm:p-4 sm:pl-0 border-l dark:border-gray-700">
          <VStack p="4" alignItems={["center", "center", "start"]}>
            <Heading className="text-4xl sm:text-5xl font-extrabold sm:font-black ">
              Juel Hossain
            </Heading>
            <Heading
              className="text-4xl md:text-5xl font-extrabold sm:font-black text-red-500 py-1 "
              noOfLines={1}
            >
              <ReactTyped strings={titles} typeSpeed={80} backSpeed={50} loop />
            </Heading>
            <Text textAlign={["center", "center", "left"]} className="max-w-md">
              Hey, Hi. Welcome to My site. Please Go Ahead And Explore More
              about me.
            </Text>
            <MyButton
              text={"Download Resume"}
              icon={<DownloadIcon mx="2px" />}
              link={cv}
            />
          </VStack>
        </Center>
        <Center w={["auto", "auto", 350, 400]} className=" ">
          <Image className="w-auto" fit={"cover"} src={me} align="top"></Image>
        </Center>
      </Flex>
    </Container>
  );
};

export default Banner;
