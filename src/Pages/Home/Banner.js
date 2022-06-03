import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Image,

  Center,
  Container,
  Flex,
  Text,
  VStack,
  Heading,

} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MyButton from "../../Components/MyButton";
import me from "./me.png";
const Banner = () => {
  var titles = ["Web Developer", "Web Designer", "Graphic Designer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tick = () => setIndex((i) => i + 1);
    const id = setInterval(tick, 3000);
    return () => clearInterval(id);
  }, []);


  return (
    <Container maxW="container.lg" centerContent my={6} >
      <Flex direction={["column-reverse", "column-reverse", "row-reverse"]}>
        <Center w={["auto", "auto", 400, 600]} shadow={"base"} _hover={{shadow:'md'}}>
          <VStack
            p="4"
            w={["auto", "auto", 400, 600]}
            alignItems={["center", "center", "start"]}
          >
            <Heading color={"red.900"} fontWeight="black" fontSize={"5xl"}>
              Juel Hossain
            </Heading>
            <Heading color={"red.500"} fontWeight="black" fontSize={"5xl"} className='truncate'>
              {titles[index % titles.length]}
            </Heading>
            <Text>
              Hey, Hi. Welcome to My site. Please Go Ahead And Explore More
              about me.
            </Text>
            <MyButton
              text={"LinkedIn Profile"}
              icon={<ExternalLinkIcon mx="2px" />}
              link={"https://linkedin.com/in/juelhossainnn"}
            />
          </VStack>
        </Center>
        <Center w={["auto", "auto", 400]} shadow='base' _hover={{shadow:'md'}}>
          <Image
            width={"400px"}
            height="350px"
            fit={"cover"}
            src={me}
            align="top"
          ></Image>
        </Center>
      </Flex>
    </Container>
  );
};

export default Banner;
