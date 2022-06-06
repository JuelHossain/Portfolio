import React from "react";
import { Heading, SimpleGrid } from "@chakra-ui/react";

const SkillsBox = ({ title,children, ...props}) => {
  return (
    <div {...props} className='  border-indigo-600 p-2 rounded '>
      <Heading size={"md"} className="my-2 ml-2">
        {title}
      </Heading>
      <SimpleGrid columns={[1, 2, 3,4]} spacing="2">
        {children}
      </SimpleGrid>
    </div>
  );
};

export default SkillsBox;
