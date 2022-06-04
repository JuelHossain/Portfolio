import {
  Heading,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import SkillsBox from "./SkillsBox";
import SkillsCard from "./SkillsCard";
const Development = () => {
  return (
    <div id="development relative">
      <Heading size={"md"} className={"mt-6 mb-2"}>
        Development Skills
      </Heading>
      <VStack>
        <SkillsBox id="tools">
          <SkillsCard
            title={"Html"}
            text={
              "I Know html5 all semantic tag and i know how to use it to improve the site seo"
            }
            cat={"MarkUp"}
          />
          <SkillsCard
            title={"Css"}
            text={
              "I Know Css3. I can design the whole website with only css. without any other css framework"
            }
            cat={"Style"}
          />
          <SkillsCard
            title={"JavaScript"}
            text={
              "I Know Vanilla Javascript. i have learned javascript from scratch . and i know all es6 syntax of javascript. "
            }
            cat={"Language"}
          />
          <SkillsCard
            title={"Node Js"}
            text={
              "I Know Node Js. Node js is nothing but a javascript run time environment in server side."
            }
            cat={"Js RunTime"}
          />
          <SkillsCard
            title={"Sass"}
            text={
              "Sass is the most powerful professional grade css extension language in the world."
            }
            cat={"Css Lang"}
          />
          <SkillsCard
            title={"Tailwind Css"}
            text={
              "Tailwind CSS is  a utility-first CSS framework for rapidly building custom user interfaces."
            }
            cat={"Css Framework"}
          />
          <SkillsCard
            title={"Express Js"}
            text={
              "Express is a minimal and flexible Node.js web application framework  "
            }
            cat={"Node Framework"}
          />
          <SkillsCard
            title={"React Js"}
            text={
              "React JS is a JavaScript library used in web development to build interactive elements on websites.  "
            }
            cat={"Js Library"}
          />
          {/* <SkillsCard
            title={"React Router"}
            text={
              "I Know React Router. v6 .React Router keeps ui in sync with the url"
            }
            cat={"React Tool"}
          />
          <SkillsCard
            title={"React Query"}
            text={
              "I Know React Query.  React Query makes fetching,caching,synchronizing and updating server state in in react applications a breeze. "
            }
            cat={"React Tool"}
          />
          <SkillsCard
            title={"React Hook Form"}
            text={
              "React Hook Form is a library that helps you validate forms in React. It is a minimal library without any other dependencies, "
            }
            cat={"React Tool"}
          /> 
          <SkillsCard
            title={"React Firebase Hooks"}
            text={
              "This library explores how React Hooks can work to make integration with Firebase even more straightforward than it already is"
            }
            cat={"React Tool"}
          />*/}
          <SkillsCard
            title={"Github"}
            text={
              "I Use Github to host my code . GitHub is a code hosting platform for version control and collaboration."
            }
            cat={"Code Hosting"}
          />
          <SkillsCard
            title={"MongoDb"}
            text={
              "I use Mongodb to Manage my data. MongoDB is an open source NoSQL database management program. "
            }
            cat={"Database"}
          />
          <SkillsCard
            title={"Firebase"}
            text={
              "Firebase provides variety of services .i use firebase to authenticate and host the application"
            }
            cat={"Auth/Hosting"}
          />
          <SkillsCard
            title={"Heroku"}
            text={
              "Heroku is a container-based cloud Platform as a Service (PaaS). I use heroku to deploy my backend server."
            }
            cat={"Server Hosting"}
          />
          <SkillsCard
            title={"JWT"}
            text={
              "JWT, or JSON Web Token used to share security information between two parties — a client and a server. I use JWT to Secure my server api."
            }
            cat={"Api Security"}
          />
          {/* <SkillsCard
            title={"Axios"}
            text={
              "Axios is a promise-based HTTP Client for node. js and the browser, i use axios to perform crud operations from the client side to the server"
            }
            cat={"Server"}
          /> */}
        </SkillsBox>
      </VStack>
    </div>
  );
};

export default Development;
