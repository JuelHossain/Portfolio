import { Button, Container, HStack, SimpleGrid, Slide, Text } from "@chakra-ui/react";
import React from "react";
import { Heading } from "@chakra-ui/react";
import ProjectsCard from "./ProjectsCard";
import efruits from "../../assets/screencapture-efruitsmanager-web-app-2022-06-04-14_10_08.png";
import screw from "../../assets/screencapture-screw-inc-web-app-2022-06-04-13_54_19.png";
import tourboy from "../../assets/screencapture-tourboy-web-app-2022-06-04-14_26_23.png";
import superhero from "../../assets/screencapture-superheroshop-netlify-app-2022-06-04-14_36_17.png";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
const Projects = ({home,size}) => {
  const projects = [
    {
      screen: efruits,
      name: "eFruits-Manager",
      title: "A Management system for efruits.wholesale",
      about:
        "This is a inventory management website for a wholesale fruits seller they can add fruits in the inventory they can update fruits and they can increase and decrease the quantity when fruits sold or added in the inventory. there is no admin or user panel because this is only for admins. login only. but now everyone can login because this website is not maintained by anyone this is a demo projects only.",
      git: "https://github.com/JuelHossain/eFruits-Manager",
      server: "https://github.com/JuelHossain/eFruits-Management-Server",
      live: "https://efruitsmanager.web.app/",
    },
    {
      screen: screw,
      name: "Screw-Inc",
      title: "Wholesale tools seller website",
      about:
        "this is a demo website for a wholesale tools manufacturer. in this website user can login also admin can user will see order related options and admin will se managment related options .this is a full functional wholesale website. user can order products give reviews and manage their orders and review. admin can manage everything in this site please visit live site to experience yourself. ",
      git: "https://github.com/JuelHossain/screw-inc",
      server: "https://github.com/JuelHossain/Screw-Inc-Server",
      live: "https://screw-inc.web.app/",
    },
    {
      screen: tourboy,
      name: "Tour Boy",
      title: "Personal Website for a Travel Guide",
      about:
        "This is a website for a travel guide who offers customers many offers by his/her own. this is a simple website user can login and buy his package or contact the guide directly . and theres some travel places also in where customer can know about the tour places they can visit. ",
        git:"https://github.com/JuelHossain/tourboy",
          live:"https://tour-boy.web.app/"
    },
    {
       screen:superhero,
          name:"SuperHero Shop",
          title:"Be The Super Hero You Want",
          about:"hahah, this is a super fun project i have done . the concept is very futuristic. basically we are selling the super powers of the superheros here. this is a simple fun projects where users can add the superheroes to the cart and checkout the products . ",
          git:"https://github.com/JuelHossain/superhero-shop",
          live:"https://superheroshop.netlify.app/"
    },
  ];
  return (
    <Container maxW={"container.lg"} className='my-6'>
      <Heading size={"md"} className="text-center mt-12 mb-2">
        Projects I have done.
      </Heading>
      <hr className="mb-6 mx-40 border-yellow-300" />
      <SimpleGrid columns={[1,1,2]} spacing="5">
        {projects.slice(0, size).map((project,index) => {
          const { screen, name, title, about, git, server, live } =
            project ?? {};
          return (
              <ProjectsCard
                  key={index}
              screen={screen}
              name={name}
              title={title}
              about={about}
              git={git}
              server={server}
              live={live}
            />
          );
        })}
      </SimpleGrid>
      {home && (
        <Text
          fontSize={"sm"}
          className="rounded py-3 text-center my-3 bg-yellow-300"
        >
          Please Visit the Project sections to .
          <Link
            className="underline"
            to="/projects"
          >
            See More &rarr;{" "}
          </Link>
        </Text>
      )}
    </Container>
  );
};

export default Projects;
