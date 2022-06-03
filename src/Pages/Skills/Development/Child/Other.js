import React from 'react';
import SkillsCard from './../../SkillsCard';
import {AiFillGithub} from 'react-icons/ai'
import { SiMongodb, SiFirebase } from "react-icons/si";
import { GrHeroku } from "react-icons/gr";
import { SiSpringsecurity, SiAiohttp } from "react-icons/si";
import SkillsBox from '../../SkillsBox';

const Other = () => {
    return (
<SkillsBox id='others'>
          <SkillsCard
            title={"Github"}
            text={
              "I Use Github to host my code . GitHub is a code hosting platform for version control and collaboration."
            }
            icon={<AiFillGithub />}
          />
          <SkillsCard
            title={"MongoDb"}
            text={
              "I use Mongodb to Manage my data. MongoDB is an open source NoSQL database management program. "
            }
            icon={<SiMongodb />}
          />
          <SkillsCard
            title={"Firebase"}
            text={
              "Firebase provides variety of services .i use firebase to authenticate and host the application"
            }
            icon={<SiFirebase />}
          />
          <SkillsCard
            title={"Heroku"}
            text={
              "Heroku is a container-based cloud Platform as a Service (PaaS). I use heroku to deploy my backend server."
            }
            icon={<GrHeroku />}
          />
          <SkillsCard
            title={"JWT"}
            text={
              "JWT, or JSON Web Token used to share security information between two parties — a client and a server. I use JWT to Secure my server api."
            }
            icon={<SiSpringsecurity />}
          />
          <SkillsCard
            title={"Axios"}
            text={
              "Axios is a promise-based HTTP Client for node. js and the browser, i use axios to perform crud operations from the client side to the server"
            }
            icon={<SiAiohttp />}
          />
</SkillsBox>
    );
};

export default Other;