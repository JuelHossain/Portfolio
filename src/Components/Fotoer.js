import { Heading } from "@chakra-ui/react";
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
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="relative max-w-5xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
        <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8">
          <a
            className="inline-block text-teal-300 transition bg-gray-700 shadow-md rounded-full p-2 hover:bg-gray-600"
            href={'#root'}
          >
            <span className="sr-only">Back to top</span>
            <RiArrowUpSLine />
          </a>
        </div>
        <div className="flex justify-center text-teal-600">
          <Heading size="lg">Juel Hossain</Heading>
        </div>

        <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-500">
          {" "}
          If you Are Interested in me already. You Can checkout My socials
          profile below. Thank You.
        </p>

        <ul className="flex justify-center gap-6 mt-6 md:gap-8">
          <li>
            <a
              href="https://www.facebook.com/juelhossainnn/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Facebook</span>
              <RiFacebookCircleFill />
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/JuelHossainnn"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">twitter</span>

              <RiTwitterFill />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/JuelHossain"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">GitHub</span>
              <RiGithubFill />
            </a>
          </li>

          <li>
            <a
              href="https://linkedin.com/in/juelhossainnn"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">LinkedIn</span>
              <RiLinkedinBoxFill />
            </a>
          </li>
          <li>
            <a
              href="https://www.freelancer.com/u/JuellHossainn"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">freelancer</span>

              <SiFreelancer />
            </a>
          </li>
        </ul>
        <p className="mt-6 text-sm text-center text-gray-400 lg:text-right">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
