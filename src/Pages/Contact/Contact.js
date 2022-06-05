import { Container } from '@chakra-ui/react';
import React from 'react';
import Form from './Form';
import Map from './Map';

const Contact = ({home}) => {
    return (
      <Container
        maxW="container.lg"
        className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap gap-4"
      >
        <Map />
        <Form />
      </Container>
    );
};

export default Contact;
