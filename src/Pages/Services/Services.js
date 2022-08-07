import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { CgWebsite } from "react-icons/cg";
import { MdBrandingWatermark, MdOutlineDesignServices } from "react-icons/md";
import { TbSettingsAutomation } from "react-icons/tb";
import branding from "../../assets/services/automation1.jpg";
import design from "../../assets/services/Branding.jpg";
import fullstack from "../../assets/services/coding.jpg";
import website from "../../assets/services/websiteDesign.jpg";
import ServicesCard from "./ServicesCard";
const Services = () => {
  return (
    <Container maxW={"container.lg"} my="6">
      <Heading size={"md"} className="text-center mt-12 mb-2">
        What I can Offer?
      </Heading>
      <hr className="mb-6 mx-60 border-yellow-400" />
      <SimpleGrid columns={[1, 1, 2, 2]} spacing="2">
        <ServicesCard
          photo={website}
          icon={<MdOutlineDesignServices />}
          title="Website Design"
          text={
            "I Can Design front end website. also make it very gorgeous and beautiful if i got some time."
          }
          rating="4.9"
        />
        <ServicesCard
          // sp={"bg-yellow-400 dark:bg-red-500"}
          photo={fullstack}
          icon={<CgWebsite />}
          title="FullStack Website "
          text={
            "i can Develop a fullstack website from backend to client end . fully functional. no doubt!"
          }
          rating="4.9"
        />

        <ServicesCard
          photo={branding}
          icon={<TbSettingsAutomation />}
          title="Automation"
          text={
            "I Can Automate full Website for testing purpose. also deploy the automation in automation server "
          }
          rating="4.9"
        />
        <ServicesCard
          photo={design}
          icon={<MdBrandingWatermark />}
          title="Branding"
          text={
            "I Can Make Brand Identity like Logo . banner etc. Your brand will sine in your website for sure."
          }
          rating="4.9"
        />
      </SimpleGrid>
    </Container>
  );
};

export default Services;
