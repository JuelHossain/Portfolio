import { Box, SimpleGrid } from "@chakra-ui/react";
import PageTitle from "../../../Components/PageTitle";
import SkillsCard from "../SkillsCard";
import Loading from "./../../../Components/Loading";

export function SkillsSection({ id, skills }) {
  const [data, loading, error, refetch] = skills;
  error && console.log(error);
  if (loading) {
    return (
      <Box className="w-screen h-screen relative">
        <Loading />
      </Box>
    );
  }
  return (
    <Box id={id}>
      <PageTitle>{`${id} Skills`}</PageTitle>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="2">
        {data?.map((skill) => {
          const { title, about, tag, _id } = skill;
          return (
            <SkillsCard
              key={_id}
              title={title}
              about={about}
              tag={tag}
              id={_id}
              refetch={refetch}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export function Development({ skills }) {
  return <SkillsSection id={"development"} skills={skills} />;
}
export function Automation({ skills }) {
  return <SkillsSection id={"automation"} skills={skills} />;
}
export function Design({ skills }) {
  return <SkillsSection id={"design"} skills={skills} />;
}
export function Computer({ skills }) {
  return <SkillsSection id={"computer"} skills={skills} />;
}
