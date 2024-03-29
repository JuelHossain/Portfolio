import { Box, SimpleGrid } from "@chakra-ui/react";
import PageTitle from "../../../Components/PageTitle";
import useAdmin from "../../../Hooks/useAdmin";
import CreateCard from "../Create/CreateCard";
import SkillsCard from "../SkillsCard";

export function SkillsSection({ id, skills, cls }) {
  const { status } = useAdmin();
  const [data, loading, error, refetch] = skills;

  error && console.log(error);
  return (
    <Box
      id={id}
      className={`${cls} sm:ml-10 py-5 md:py-10 rounded shadow  border
      border-gray-200/50  dark:border-gray-700/20 
      dark:bg-gray-800/20 bg-white/20 px-2`}
    >
      <PageTitle>{`${id} Skills`}</PageTitle>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="2">
        {data?.map((sk) => (
          <SkillsCard key={sk._id} id={sk._id} refetch={refetch} />
        ))}
        {status && !loading && <CreateCard cat={id} refresh={refetch} />}
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
