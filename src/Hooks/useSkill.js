import { useQuery } from "@tanstack/react-query";
import { getSkill } from "./Helper/Skills";

const useSkill = (id) => {
  const {
    data: skill,
    isLoading: skillLoading,
    error: skillError,
    refetch,
  } = useQuery(["skill", id], async () => await getSkill(id));
  if (id) {
    return { skill, skillLoading, skillError, refetch };
  }
};

export default useSkill;
