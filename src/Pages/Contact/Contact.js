import React from "react";
import PageTitle from "../../Components/PageTitle";
import Section from "../../Components/Section";
import VisitMore from "../../Components/VisitMore";
import Form from "./Form";
import Map from "./Map";

const Contact = ({ home }) => {
  return (
    <Section>
      <PageTitle>Contact Me</PageTitle>
      <div className={`flex sm:flex-nowrap flex-wrap gap-4`}>
        <Map />
        <Form />
      </div>
      <VisitMore>
        <p>Thank You For Visiting My Website</p>
      </VisitMore>
    </Section>
  );
};

export default Contact;
