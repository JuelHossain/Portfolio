import { Container, IconButton, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FaPlus } from "react-icons/fa";
import InfoCard from "./InfoCard";
import Create from "./Helper/Create";

export const InfoSection = ({ info, title, about,cat }) => {
  const [data, , refetch] = info;

    const {
    isOpen: isOpenCreate,
    onOpen: onOpenCreate,
    onClose: onCloseCreate,
  } = useDisclosure();

  return (
    <Container
      maxW="container.lg"
      className=" bg-gray-100 dark:bg-gray-800 rounded-lg  relative "
    >
      <div className="absolute top-2 right-2">
<IconButton
        className="dark:bg-gray-900/10 dark:text-bg-gray-200 ring-0 dark:hover:bg-gray-900/50"
        icon={<FaPlus />}
        onClick={onOpenCreate}
      />
      </div>
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold ">{title}</h2>

          <p className="mt-4">{about}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:gap-12 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {data?.sort().map((ed) => (
            <InfoCard key={ed._id} id={ed._id} refresh={refetch} />
          ))}
        </div>
      </div>
       <Create
        cat={cat}
        isOpen={isOpenCreate}
        onClose={onCloseCreate}
        refetch={refetch}
      />
    </Container>
  );
};

export const Courses = ({ info }) => {
  return (
    <InfoSection
      info={info}
      title="Programming Journey ."
      about="Here is some info about my programming journey."
      cat="milestone"
    />
  );
};
export const Experiences = ({ info }) => {
  return (
    <InfoSection
      info={info}
      title="Work History ."
      about="Here is some info about my working experiences."
      cat="experience"
    />
  ); 
};
export const Educations = ({ info }) => {
  return (
    <InfoSection
      info={info}
      title="Academic Carrier."
      about="Here is some info about my Academic Carrier."
      cat="degree"
    />
  );
};
