import { useQuery } from "@tanstack/react-query";
import { getProject } from "./Helper/Projects";
const useProject = (id) => {
  const {
    data: project,
    isLoading: projectLoading,
    error: projectError,
    refetch,
  } = useQuery(["project", id], async () => await getProject(id), {
    enabled: Boolean(id),
  });
  return { project, projectLoading, projectError, refetch };
};

export default useProject;
