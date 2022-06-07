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
      web: "https://www.sohopathi.com/panpara-government-primary-school/",
      text: "This is government a Primary School Located in Savar Dhaka, Bangladesh. ",
    },
    {
      insName: "Babupur Kasimuddin Bidyapith ",
      title: "Junior School",
      grade: "3 Years To Complete. Grade was Gpa 3.21.",
      duration: "2010 - 2012",
      web: "https://www.sohopathi.com/babupur-kasim-uddin-bidyapith/",
      text: "This is a high school located in rajbari district ,bangladesh ",
    },
    {
      insName: "Rajbari Govt. Technical School and college ",
      title: "Electric Engineering.",
      grade: "4 Years to Complete, dropped After six months.",
      duration: "2013",
      web: "http://www.rajbaritsc.gov.bd/",
      text: "This is technical college, Located in Rajbari District , Bangladesh",
    },
    {
      insName: "Hammadia High School",
      title: "Secondary School",
      grade:
        "2.3 years to complete.Subject Was Business Study. Grade was Gpa 4.61.",
      duration: "2014-2016",
      web: "https://www.sohopathi.com/hammadia-high-school/",
      text: "This is a high school located in noya-bazar, old dhaka , Bangladesh",
    },
    {
      insName: "Government Bangla College",
      title: "Higher Secondary School",
      grade:
        "2 years to complete, 1st year completed. Subject was Business. Dropped from 2nd year.",
      duration: "2016-2018",
      web: "https://www.sarkaribanglacollege.gov.bd/",
      text:'This is a college located in Mirpur dhaka, bangladesh '
    },
  ];
  const courses = [
    {
      insName: "Computer World",
      title: "Graphic Design",
      grade:
        "Six months course covered adobe photoshop ,illustrator, premiere pro, ms excel, ms word, how to freelance and more.",
      duration: "2020",
      web: "http://www.computerworld.com.bd/",
      text: "This is a Private Academy who teaches Graphics Design . They are located Mirpur Dhaka, Bangladesh",
    },
    {
      insName: "Ueropean It Institute",
      title: "Javascript Es6",
      grade:
        "3 month course covered html, css, javascript es6.i have completed this course and got certified. after that i have learned so many things on youtube related javascript",
      duration: "2021",
      web: "https://europeanit-inst.com/",
      text: "This is a Private Academy who teaches Programming and development, They are located in Mirpur dhaka, bangladesh",
    },
    {
      insName: "Udemy.com",
      title: "WebdriverIO",
      grade:
        "Online Course on udemy.com covered webdriver io with appium 2.0 and jenkins and everything about javascript automation.",
      duration: "2022",
      web: "https://www.udemy.com/course/webdriverio-complete-beginner-course/",
      text: "This is a course in udemy.com instructed by dilpreet johal. The course completed everything about webdriver io. ",
    },
    {
      insName: "Udemy.com",
      title: "Mobile Automation",
      grade:
        "Online Course on udemy.com covered webdriver io with appium 2.0 and jenkins and everything about javascript automation.",
      duration: "2022",
      web: "https://www.udemy.com/course/appium-webdriverio-mobile-automation/",
      text: "This is a course in udemy.com instructed by dilpreet johal. The course completed everything about mobile automation ",
    },
    {
      insName: "Udemy.com",
      title: "Gnu Linux",
      grade:
        "Online Course on udemy.com covered A to Z of Gnu Linux Operating system. that's how i have mastered Linux.",
      duration: "2022",
      web: "https://www.udemy.com/course/linux-mastery/",
      text: "this is a course on udemy.com instructed by Ziyad Yehia from internet of things academy . the course completed everything about gnu linux",
    },
    {
      insName: "Programming-Hero.com",
      title: "Complete Web Development",
      grade:
        "online course covered a to z of web devolopment with reactjs, nodejs, expressjs, mongodb,firebase, sass,bootstrap, tailwind css. i have completed this course and got certified.",
      duration: "2022",
      web: "https://web.programming-hero.com/",
      text:'Well this course was something special because this course instructed by jhankar mahbub a very famous web developer and author of some very famous book of programming in bangladesh, this course completed everything about web development.'
    },
  ];
    const exp = [
      {
        insName: "Cyber Cafe Shop Owner",
        title: "Small Business",
        grade:
          "After dropped out from the college, I have started This business.",
        duration: "2018 - 2019",
        text: "In This shop i had 3 computer. people could play video games and browse internet in these computer with the rate of 50 taka per hour.it was located near my house. in savar , dhaka, bangladesh",
      },
      {
        insName: "Uber",
        title: "Ride Sharing",
        grade:
          "Business didn’t go well so I started Ride Sharing with Uber with my motorcycle.",
        duration: "2019",
        web: "https://www.uber.com/bd/en/",
        text: "This is a international ride sharing company who also have their business running on bangladesh. ",
      },
      {
        insName: "Pathao Ltd.",
        title: "Parcel Delivery",
        grade:
          "Uber was not serving me well that's why i have switched to pathao ltd.and started instant parcel delivery with sharing ride also.",
        duration: "2020",
        web: "https://pathao.com/bn/",
        text: " This is a multi service company in bangladesh who provide multiple services.",
      },
      {
        insName: "Pathao Ltd",
        title: "Food delivery",
        grade:
          "when the covid 19 came ride sharing was totally off. then i started delivering food with pathao ltd.",
        duration: "2020",
        web: "https://pathao.com/bn/",
        text: " This is a multi service company in bangladesh who provide multiple services.",
      },
      {
        insName: "freelancer.com",
        title: "Freelancing",
        grade:
          "After Learning Photoshop and illustrator , I started freelancing.I made lots of brand identity and joined lots of contest here.",
        duration: "2020 - 2021",
        web: "https://www.freelancer.com/",
        text:'freelancer.com is a website where customer can done their work by posting their work in the site and the freelancers can find their work in here at same time '
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
                edu={exp}
                name="Experiences ."
                title="Here is some info about my experiences. i have no experiences working in any company as a web dev . but i have some other experiences which you can see below."
              />
      <Education
        edu={edu}
        name="Academic Carrier ."
        title="Here is some info about my Academic Carrier . from start to begin ."
      />
    </Container>
  );
};

export default About;
