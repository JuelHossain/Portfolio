import { useQuery } from "@tanstack/react-query";
import { getProjects } from "./Helper/Projects";
const useProjects = (singleId) => {
  // getting projects
  const {
    data: projects,
    isLoading: projectsLoading,
    error: projectsError,
    refetch,
  } = useQuery(["projects"], getProjects);
  // getting project

  return {
    projects,
    projectsLoading,
    projectsError,
    refetch,
  };
};
export default useProjects;
