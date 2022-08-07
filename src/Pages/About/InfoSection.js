import { Center, Container } from "@chakra-ui/react";
import React from "react";
import Loading from "../../Components/Loading";
import InfoCard from "./InfoCard";

export const InfoSection = ({ info, title, about }) => {
  const [data, loading, refetch] = info;
  if (loading) {
    return (
      <Center className="w-screen h-screen relative">
        <Loading />
      </Center>
    );
  }
  return (
    <Container
      maxW="container.lg"
      className=" bg-gray-100 dark:bg-gray-800 rounded-lg mb-8"
    >
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
    </Container>
  );
};

export const Courses = ({ info }) => {
  return (
    <InfoSection
      info={info}
      title="Private Courses ."
      about="Here is some info about my programming journey. how i became a web dev you can have some idea from below. information. please do click on the name of the institutions to reach their website."
    />
  );
};
export const Experiences = ({ info }) => {
  return (
    <InfoSection
      info={info}
      title="Experiences ."
      about="Here is some info about my experiences. i have no experiences working in any company as a web dev . but i have some other experiences which you can see below."
    />
  );
};
export const Educations = ({ info }) => {
  return (
    <InfoSection
      info={info}
      title="Academic Carrier ."
      about="Here is some info about my Academic Carrier . from start to begin ."
    />
  );
};
