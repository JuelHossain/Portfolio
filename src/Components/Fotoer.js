
import React from "react";
import { SiFreelancer } from "react-icons/si";
import {
  RiArrowUpSLine,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiFacebookCircleFill,
} from "react-icons/ri";
const Footer = () => {
  const socs = [
    {
      name: "Facebook",
      icon: <RiFacebookCircleFill />,
      link: "https://www.facebook.com/juelhossainnn/",
    },
    {
      name: "Twitter",
      icon: <RiTwitterFill />,
      link: "https://www.twitter.com/juelhossainnn/",
    },
    {
      name: "Github",
      icon: <RiGithubFill />,
      link: "https://www.github.com/juelhossain/",
    },
    {
      name: "Github",
      icon: <RiLinkedinBoxFill />,
      link: "https://www.linkedin.com/in/juelhossainnn",
    },
    {
      name: "Freelancer",
      icon: <SiFreelancer />,
      link: "https://www.freelancer.com/u/juelhossainn/",
    },
  ];
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 mt-auto">
      <div className="relative max-w-5xl px-4 my-4 flex flex-col gap-3 mx-auto sm:px-6 lg:px-8 lg:flex-row lg:justify-between lg:items-center lg:py-8 ">
        <div className="absolute right-10 -top-3  ">
          <a
            className="inline-block text-teal-300 transition bg-gray-700 shadow-md rounded-full p-2 hover:bg-gray-600"
            href={"#root"}
          >
            <span className="sr-only">Back to top</span>
            <RiArrowUpSLine />
          </a>
        </div>
        <p className=" text-lg font-bold text-center text-gray-400 lg:text-left ">
          Juel Hossain
        </p>
        <ul className="flex justify-center gap-6 md:gap-8">
          {socs.map((soc, index) => (
            <li key={index}>
              <a
                href={soc.link}
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-400 transition hover:text-gray-700/75"
              >
                <span className="sr-only">{soc.name}</span>
                {soc.icon}
              </a>
            </li>
          ))}
        </ul>
        <p className=" p-1 text-sm text-center text-gray-400 lg:text-right">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
