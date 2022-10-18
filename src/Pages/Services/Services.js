import { Container, Link, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { CgWebsite } from "react-icons/cg";
import { MdBrandingWatermark, MdOutlineDesignServices } from "react-icons/md";
import { TbSettingsAutomation } from "react-icons/tb";
import branding from "../../assets/services/automation1.jpg";
import design from "../../assets/services/Branding.jpg";
import fullstack from "../../assets/services/coding.jpg";
import website from "../../assets/services/websiteDesign.jpg";
import PageTitle from "../../Components/PageTitle";
import VisitMore from "../../Components/VisitMore";
import ServicesCard from "./ServicesCard";
const Services = () => {
  const services = [
    {
      photo: website,
      icon: MdOutlineDesignServices,
      title: "Website Design",
      text: "I Can Design front end website. also make it very gorgeous and beautiful if i got some time.",
      reting: "4.9",
    },
    {
      photo: fullstack,
      icon: <CgWebsite />,
      title: "FullStack Website",
      text: "i can Develop a fullstack website from backend to client end . fully functional. no doubt!",
      rating: "4.9",
    },
    {
      photo: branding,
      icon: <TbSettingsAutomation />,
      title: "Automation",
      text: "I Can Automate full Website for testing purpose. also deploy the automation in automation server ",
      rating: "4.9",
    },
    {
      photo: design,
      icon: <MdBrandingWatermark />,
      title: "Branding",
      text: "I Can Make Brand Identity like Logo . banner etc. Your brand will shine in your website for sure.",
      rating: "4.9",
    },
  ];

  const serviceCards = services.map((service) => {
    return (
      <ServicesCard
        service={service}
        sp={
          service.title === "FullStack Website" &&
          "bg-yellow-400 dark:bg-red-500"
        }
      />
    );
  });
  return (
    <Container maxW={"container.lg"} className="my-5 sm:my-10">
      <PageTitle>What I can Offer ?</PageTitle>
      <SimpleGrid columns={[1, 2]} spacing="4">
        {serviceCards}
      </SimpleGrid>
      <VisitMore>
        Please Contact Me
        <Link href="/contact" className="underline">
          To Discuss Your work &rarr;
        </Link>
      </VisitMore>
    </Container>
  );
};

export default Services;
