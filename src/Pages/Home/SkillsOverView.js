import { Container,  Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import SkillsCard from './SkillsCard';
import {DiReact} from 'react-icons/di'

const SkillsOverView = () => {
    return (
      <Container maxW={"container.lg"}>
        <Heading py={6} size={"md"} className="text-center">
          What I Know ?
        </Heading>
        <hr className="mb-6 mx-60" />

      <SimpleGrid columns={[2, 3, 4,5]} spacing="2">
          <SkillsCard
            photo={
              "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777655/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
            }
            title="React"
            text={"The Most Popular Javascript Library"}
            icon={<DiReact />}
          />
          <SkillsCard
            photo={
              "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777655/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
            }
            title="Express Js"
            text={"Most Popular Node js Framework"}
            icon={<DiReact />}
          />
          <SkillsCard
            photo={
              "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777655/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
            }
            title="Web Driver IO"
            text={"Most Popular Javascript Automation Framework"}
            icon={<DiReact />}
          />
          <SkillsCard
            photo={
              "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777655/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
            }
            title="Illustrator"
            text={"Industry Standard Illustration Tool."}
            icon={<DiReact />}
          />
          <SkillsCard
            photo={
              "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777655/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
            }
            title="Tailwind Css"
            text={"The Most Popular Css Framework."}
            icon={<DiReact />}
          />
            </SimpleGrid>
      </Container>
    );
};

export default SkillsOverView;