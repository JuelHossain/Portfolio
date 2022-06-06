import { DownloadIcon,  } from "@chakra-ui/icons";
import {
  Image,
  Center,
  Container,
  Flex,
  Text,
  VStack,
  Heading,

} from "@chakra-ui/react";
import MyButton from "../../Components/MyButton";
import me from "../../assets/me.png";
import cv from '../../assets/Resume of Juel Hossain.pdf'
import ReactTyped from "react-typed";
const Banner = () => {
  var titles = ["Web Developer", "Web Designer", "Graphic Designer","Programmer","Automation boy"];

  return (
    <Container maxW="container.lg" my={6}>
      <Flex direction={["column-reverse", "column-reverse", "row-reverse"]}>
        <Center className="flex-1 shadow hover:shadow-md dark:shadow-gray-700">
          <VStack p="4" alignItems={["center", "center", "start"]}>
            <Heading className="text-4xl sm:text-5xl font-extrabold sm:font-black ">
              Juel Hossain
            </Heading>
            <Heading
              className="text-4xl sm:text-5xl font-extrabold sm:font-black text-red-500 py-1 "
              noOfLines={1}
            >
              <ReactTyped strings={titles} typeSpeed={80} backSpeed={50} loop />
            </Heading>
            <Text textAlign={["center", "center", "left"]}>
              Hey, Hi. Welcome to My site. Please Go Ahead And Explore More
              about me.
            </Text>
            <MyButton
              text={"Download CV"}
              icon={<DownloadIcon mx="2px" />}
              link={cv}
            />
          </VStack>
        </Center>
        <Center
          w={["auto", "auto", 350, 400]}
          className="shadow hover:shadow-md dark:shadow-gray-700"
        >
          <Image className="w-auto" fit={"cover"} src={me} align="top"></Image>
        </Center>
      </Flex>
    </Container>
  );
};

export default Banner;
