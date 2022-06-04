import React from "react";
import { Container, Center } from "@chakra-ui/react";
import {  useLocation } from "react-router-dom";
import Development from "./Development";
import { useEffect } from "react";
import { useState } from "react";

import Automation from "./Automation";
import Computer from "./Computer";
import { MdDeveloperMode} from 'react-icons/md'
import { TbSettingsAutomation } from "react-icons/tb";
import { SiMaterialdesignicons } from "react-icons/si";
import { HiDesktopComputer } from "react-icons/hi";
import Design from "./Design";

const Skills = () => {
  const [dev, setDev] = useState(false);
  const [automation, setAutomation] = useState(false);
  const [design, setDesign] = useState(false);
  const [computer, setComputer] = useState(false);
  const { hash } = useLocation();
  useEffect(() => {
    switch (hash) {
      case "#development":
        setDev(true);
        setAutomation(false);
        setDesign(false);
        setComputer(false);
        break;
      case "#automation":
        setDev(false);
        setAutomation(true);
        setDesign(false);
        setComputer(false);
        break;
      case "#design":
        setDev(false);
        setAutomation(false);
        setDesign(true);
        setComputer(false);
        break;
      case "#computer":
        setDev(false);
        setAutomation(false);
        setDesign(false);
        setComputer(true);
        break;
      default:
        break;
    }
  }, [hash]);
  console.log(dev,'this is dev')
  return (
    <Container maxW={"container.lg"} className="my-2 scroll-smooth relative ">
      <Development />
      <Automation />
      <Design />
      <Computer />
      <Center
        className={
          "gap-2 p-2 shadow bg-white border-indigo-400 sticky bottom-0 right-0"
        }
      >
        <a
          href="#development"
          className={
            dev
              ? "bg-indigo-600 text-stone-200 shadow-md font-bold px-3 py-1 "
              : "hover:bg-indigo-600 bg-white hover:text-stone-200 shadow hover:shadow-md font-bold px-3 py-1 "
          }
        >
          <p className="hidden md:block">Development</p>{" "}
          <MdDeveloperMode className="md:hidden text-5xl p-2" />
        </a>
        <a
          href="#automation"
          className={
            automation
              ? "bg-indigo-600 text-stone-200 shadow-md font-bold px-3 py-1 "
              : "hover:bg-indigo-600 bg-white hover:text-stone-200 shadow hover:shadow-md font-bold px-3 py-1 "
          }
        >
          <p className="hidden md:block">Automation</p>{" "}
          <TbSettingsAutomation className="md:hidden text-5xl p-2" />
        </a>
        <a
          href="#design"
          className={
            design
              ? "bg-indigo-600 text-stone-200 shadow-md font-bold px-3 py-1 "
              : "hover:bg-indigo-600 bg-white hover:text-stone-200 shadow hover:shadow-md font-bold px-3 py-1 "
          }
        >
          <p className="hidden md:block">Graphic Design</p>{" "}
          <SiMaterialdesignicons className="md:hidden text-5xl p-3" />
        </a>
        <a
          href="#computer"
          className={
            computer
              ? "bg-indigo-600 text-stone-200 shadow-md font-bold px-3 py-1 "
              : "hover:bg-indigo-600 bg-white hover:text-stone-200 shadow hover:shadow-md font-bold px-3 py-1 "
          }
        >
          <p className="hidden md:block">Basic Computer</p>{" "}
          <HiDesktopComputer className="md:hidden text-5xl p-2" />
        </a>
      </Center>
    </Container>
  );
};

export default Skills;
