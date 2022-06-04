import { Container } from "@chakra-ui/react";
import React from "react";
import Education from "./Education";
import Head from "./Head";
const About = () => {
  const edu = [
    {
      insName: "Panpara Govt. Primary School ",
      title: "Primary School",
      grade: "5 Years To complete. Grade was first class.",
      duration: "2005 - 2009",
    },
    {
      insName: "Babupur Kasimuddin Bidyapith ",
      title: "Junior School",
      grade: "3 Years To Complete. Grade was Gpa 3.21.",
      duration: "2010 - 2012",
    },
    {
      insName: "Rajbari Govt. Technical School and college ",
      title: "Electric Engineering.",
      grade: "4 Years to Complete, dropped After six months.",
      duration: "2013",
    },
    {
      insName: "Hammadia High School",
      title: "Secondary School",
      grade:
        "2.3 years to complete.Subject Was Business Study. Grade was Gpa 4.61.",
      duration: "2014-2016",
    },
    {
      insName: "Government Bangla College",
      title: "Higher Secondary School",
      grade:
        "2 years to complete, 1st year completed. Subject was Business. Dropped from 2nd year.",
      duration: "2016-2018",
    },
  ];
  const courses = [
    {
      insName: "Computer World",
      title: "Graphic Design",
      grade:
        "Six months course covered adobe photoshop ,illustrator, premiere pro, ms excel, ms word, how to freelance and more.",
      duration: "2020",
    },
    {
      insName: "Ueropean It Institute",
      title: "Javascript Es6",
      grade:
        "3 month course covered html, css, javascript es6.i have completed this course and got certified. after that i have learned so many things on youtube related javascript",
      duration: "2021",
    },
    {
      insName: "Udemy.com",
      title: "Webdriver IO",
      grade:
        "Online Course on udemy.com covered webdriver io with appium 2.0 and jenkins and everything about javascript automation.",
      duration: "2022",
    },
    {
      insName: "Udemy.com",
      title: "Gnu Linux",
      grade:
        "Online Course on udemy.com covered A to Z of Gnu Linux Operating system. that's how i have mastered Linux.",
      duration: "2022",
    },
    {
      insName: "Programming-Hero.com",
      title: "Complete Web Development",
      grade:
        "online course covered a to z of web devolopment with reactjs, nodejs, expressjs, mongodb,firebase, sass,bootstrap, tailwind css. i have completed this course and got certified.",
      duration: "2022",
    },
    ];
    const exp = [
      {
        insName: "Cyber Cafe Shop Owner",
        title: "Small Business",
        grade:
          "After dropped out from the college, I have started This business.",
        duration: "2018 - 2019",
      },
      {
        insName: "Uber and Pathao Ltd.",
        title: "Ride Sharing",
        grade:
          "Business didn’t go well so I started Ride Sharing with Uber and instant Percel delivery with Pathao Ltd. At the same time.",
        duration: "2019 - 2020",
      },
      {
        insName: "Pathao Ltd. and Shohoz Ltd.",
        title: "Food delivery",
        grade:
          "when the covid 19 came ride sharing was totally off. then i started delivering food with pathao and shohoz ltd.",
        duration: "2020",
      },
      {
        insName: "freelancer.com",
        title: "Freelancing",
        grade:
          "After Learning Photoshop and illustrator , I started freelancing.I made lots of brand identity and joined lots of contest here.",
        duration: "2020 - 2021",
      },
    ];
  return (
    <Container maxW={"container.lg"}>
      <Head />
          <Education edu={courses}
              name="Private Courses ."
              title="Here is some info about my programming journey. how i became a web dev you can have some idea from below. information. please do click on the name of the institutions to reach their website."
          />
      <Education
        edu={edu}
        name="Academic Carrier ."
        title="Here is some info about my Academic Carrier . from start to begin ."
      />
      <Education
        edu={exp}
        name="Experiences ."
        title="Here is some info about my experiences. i have no experiences working in any company as a web dev . but i have some other experiences which you can see below."
      />
    </Container>
  );
};

export default About;
