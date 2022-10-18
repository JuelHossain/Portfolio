import React from "react";
import { PContainer } from "./Helper/lib/Containers";

import ProjectDetails from "./Helper/ProjectDetails";
import Screenshot from "./Helper/Screenshot";
const ProjectsCard = ({ id }) => {
  return (
    <PContainer h="md:h-96">
      <Screenshot id={id} />
      <ProjectDetails id={id} />
    </PContainer>
  );
};

export default ProjectsCard;
