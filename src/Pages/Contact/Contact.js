import { Container } from "@chakra-ui/react";
import React from "react";
import PageTitle from "../../Components/PageTitle";
import Form from "./Form";
import Map from "./Map";

const Contact = ({ home }) => {
  return (
    <Container maxW="container.lg">
      <PageTitle>Contact Me</PageTitle>
      <div className={`mb-10 flex sm:flex-nowrap flex-wrap gap-4`}>
        <Map />
        <Form />
      </div>
    </Container>
  );
};

export default Contact;
