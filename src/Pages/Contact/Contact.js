import { Container } from "@chakra-ui/react";
import React from "react";
import PageTitle from "../../Components/PageTitle";
import VisitMore from "../../Components/VisitMore";
import Form from "./Form";
import Map from "./Map";

const Contact = ({ home }) => {
  return (
    <Container maxW="container.lg" className="my-5 sm:my-10 ">
      <PageTitle>Contact Me</PageTitle>
      <div className={`flex sm:flex-nowrap flex-wrap gap-4`}>
        <Map />
        <Form />
      </div>
      <VisitMore>
        <p>Thank You For Visiting My Website</p>
        
      </VisitMore>
    </Container>
  );
};

export default Contact;
