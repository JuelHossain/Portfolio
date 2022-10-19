import { Avatar, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import PageTitle from "../../Components/PageTitle";
import Section from "../../Components/Section";

const Certification = () => {
  const certificates = [
    {
      name: "javascript",
      org: "Hacker Rank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png",
      link: "https://www.hackerrank.com/certificates/e67573e87832",
    },
    {
      name: "Web Development",
      org: "Programming hero",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLOWDsSCzmvgFSPxkhpa8sm2CemsXy17NXr6cSCPwWug&s",
      link: "https://drive.google.com/file/d/15NPVUwSbIJ4HWk6ZNG6EoX29VUOHT1tw/view?usp=sharing",
    },
    {
      name: "Redux",
      org: "Learn with sumit",
      logo: "https://avatars.githubusercontent.com/u/73503432?v=4",
      link: "https://learnwithsumit.com/certificates/verify/LWSCTXN-2OZU0ASR",
    },
  ];

  const certificateCards = certificates.map((certificate) => {
    const { name, org, logo, link } = certificate;
    return (
      <Stack
        target={"_blank"}
        as={"a"}
        href={link}
        className="dark:border-gray-700  flex-1 border shadow-md dark:hover:bg-red-900/20  duration-300 rounded-md basis-60  dark:bg-gray-800 p-5 gap-1 bg-white hover:bg-gray-100"
      >
        <p className="text-xl bg-yellow-500/20 dark:bg-red-500/20 font-bold capitalize px-2 py-1  ">
          {name}
        </p>
        <Flex gap={2}>
          <Avatar src={logo} className="w-10 h-10" />
          <p className="text-xl font-semibold">{org}</p>
        </Flex>
      </Stack>
    );
  });
  return (
    <Section>
      <PageTitle>Certifications</PageTitle>
      <Flex gap={4} className=" flex-wrap">
        {certificateCards}
      </Flex>
    </Section>
  );
};

export default Certification;
